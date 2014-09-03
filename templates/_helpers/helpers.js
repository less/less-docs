/**
 * Markdown Helper {{markdown}}
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

var path = require('path');
var file = require('fs-utils');
var hljs = require('highlight.js');
var log = require('verbalize');
var marked = require('marked');
var matter = require('gray-matter');
var strip = require('strip-indent');
var _ = require('lodash');

var languages = require('./lib/lang.js');
var partial = require('./partial');


var helperError = function(name, msg) {
  name = '\n  {{' + name + '}} helper:';
  log.warn(name, log.red(msg));
  throw new Error(log.bold(name, log.red(msg)));
};


/**
 * These need to be sorted out at some point
 */



// Initialize custom language settings for highlight.js
hljs.registerLanguage('less', require('./lib/less.js'));
hljs.registerLanguage('handlebars', require('./lib/handlebars.js'));

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,

  highlight: function (code, lang) {
    if (lang === "css") {
      // substitude CSS highlighter with Less one since the latter is more correct
      lang = "less";
    }
    try {
      if (languages[lang]) {
        lang = languages[lang];
      } else {
        return code;
      }
      return hljs.highlight(lang, code).value;
    } catch(e) {
      return hljs.highlightAuto(code).value;
    }
  }
});


module.exports.register = function (Handlebars, options, params) {
  var include = partial(Handlebars, options, params);
  options = options || {};
  var opts = _.extend(options, options.data || {});


  // expand glob patterns into an array of file paths.
  Handlebars.registerHelper('expand', function (patterns) {

    // Throw an error if invalid patterns are passed
    if(!/string|array/.test(typeof patterns)) {
      helperError('expand', 'expects an array, string or glob patterns.', this);
    }

    // Expand files.
    var files = file.expand(patterns);

    // Throw an error if no files are returned.
    if(!files.length) {
      helperError('expand', 'tried to expand "' + patterns + '" but no files were returned.', this);
    }

    return files;
  });


  // generic `marked` helper. can be used in other helpers
  Handlebars.registerHelper('marked', function(str) {
    return marked(str);
  });


  Handlebars.registerHelper('markdown', function (options) {
    var content = strip(options.fn(this));
    return new Handlebars.SafeString(marked(content || ''));
  });


  Handlebars.registerHelper('md', function (name, context) {
    var result = include(name, _.extend(this, context)) || '';
    return new Handlebars.SafeString(marked(result));
  });


  Handlebars.registerHelper('include', function (name, context) {
    var result = include(name, _.extend(this, context)) || '';
    return new Handlebars.SafeString(result);
  });


  var extend = function () {
    var args = [].slice.call(arguments);
    _.merge.apply(_, [this].concat(args));
    return this;
  };

  Handlebars.registerHelper("extend", extend);


  /**
   * Read a template and compile it with the given context.
   *
   * @method  read
   * @param   {String}  filepath
   * @param   {Object}  context
   * @return  {String}
   */

  Handlebars.registerHelper('read', function (filepath, context) {
    context.data = context.data || {};
    var page = matter.read(filepath);
    var metadata = _.extend(context.data.root, page.context);
    var template = Handlebars.compile(page.content);
    return new Handlebars.SafeString(template(metadata));
  });
};
