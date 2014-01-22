/**
 * Handlebars Helpers: {{sidenav}}
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

// Node.js
var path = require('path');
var _ = require('lodash');
var yfm = require('yfm');

// Export helpers
module.exports.register = function (Handlebars, options, params) {

  var assemble = params.assemble;
  var grunt = params.grunt;
  var opts = options || {};

  Handlebars.registerHelper('sidenav', function(page, context) {
    if(page.published !== false && page.sidenav) {

      if(!Array.isArray(assemble.partials)) {
        assemble.partials = [assemble.partials];
      }

      var filepath = _.first(_.filter(assemble.partials, function(fp) {
        return path.basename(fp, path.extname(fp)) === page.sidenav;
      }));

      // Process context, using YAML front-matter,
      // grunt config and Assemble options.data
      var pageObj = yfm(filepath) || {};
      var metadata = pageObj.context || {};

      context = _.extend(this, opts.data[page.sidenav], metadata, context);
      var partial = Handlebars.partials[page.sidenav];
      var template = Handlebars.compile(partial);
      var output = template(context);

      // Prepend output with the filepath to the original partial
      var sidenav = opts.sidenav || opts.data.sidenav || {};
      if(sidenav.origin === true) {
        output = '<!-- ' + filepath + ' -->\n' + output;
      }
      return new Handlebars.SafeString(output);
    }
  });
};