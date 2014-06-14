/*!
 * Handlebars Helpers: {{rel}}
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License.
 */
'use strict';

var file = require('fs-utils');
var path = require('path');
var relative = require('relative');
var _ = require('lodash');


module.exports.register = function (Handlebars, options, params) {
  var opts = options || {};
  var site = opts.site || {};
  var root = (site && site.root || site.base);

  if (!root) {
    throw new Error('  The {{rel}} helper requires a site.root property.');
  }

  Handlebars.registerHelper('rel', function (to) {
    var context = _.extend({}, opts, opts.data, this);
    var from = context.page.dest;
    to = path.join(root, to);
    return new Handlebars.SafeString(relative(from, to));
  });


  Handlebars.registerHelper('resolve', function (name, context) {
    var basename = path.basename(name, path.extname(name));
    var url = '';

    context = context || {};
    var self = _.extend({}, this, context);

    params.pages.forEach(function (page) {
      if (page.src.indexOf(basename) !== -1) {
        url = relative(self.page.dest, page.dest);
      }
    });

    if (!url) {
      var dest = file.normalizeSlash(path.join(site.dest, name));
      url = relative.toBase(url, name);
    }

    return new Handlebars.SafeString(url);
  });

};