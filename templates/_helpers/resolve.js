/*!
 * Handlebars Helpers: {{rel}}
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License (MIT).
 */
'use strict';

var file = require('fs-utils');
var path = require('path');
var relative = require('relative');
var _ = require('lodash');


module.exports.register = function (Handlebars, options, params) {
  var opts = options || {};

  Handlebars.registerHelper('resolve', function (filepath, context) {
    var basename = path.basename(filepath, path.extname(filepath));
    context = context || {};
    var self = _.extend({}, this, context);
    var dest = self.page.dest;
    var url = '';

    options.pages.forEach(function (page) {
      if (page.src.indexOf(basename) !== -1) {
        url = relative(dest, page.dest);
      }
    });

    if (!url && options.site && options.site.dest) {
      url = relative.toBase(options.site.dest, filepath);
    }
    return new Handlebars.SafeString(url);
  });

};