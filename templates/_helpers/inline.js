/**
 * Handlebars Helper: {{inline}}
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

const matter = require('gray-matter');
const strip = require('strip-indent');
const _ = require('lodash');


module.exports.register = function (Handlebars, options, params) {
  options = options || {};
  options.data = options.data || {};

  // Add `inline` to assemble's options.
  var inline = _.extend(options.inline || {}, options.data.inline || {});
  // inline.prepend = inline.prepend || 'source-link';


  Handlebars.registerHelper("inline", function (filepath, context) {
    context.data = context.data || {};
    var append = '',
      prepend = '';

    var page = matter.read(filepath);
    var data = Handlebars.createFrame({filepath: filepath});

    _.defaults(page.context, context.data.root || {});

    // Prepend or append any content in the given partial to the output
    // prepend = inline.prepend ? Handlebars.partials[inline.prepend] : '';
    // append = inline.append ? Handlebars.partials[inline.append] : '';
    // // console.log(prepend);

    // var sections = [prepend, page.content, append].join('\n\n');
    var template = Handlebars.compile(page.content);
    var result = template(page.context, {data: data});
    return new Handlebars.SafeString(result);
  });
};
