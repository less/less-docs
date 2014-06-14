/**
 * Markdown Helper {{partial}}
 * Copyright (c) 2014 Jon Schlinkert, contributors
 * Licensed under the MIT License.
 */
'use strict';

var _ = require('lodash');


/**
 * Convenience method for creating `include`/`partial`
 * helpers, using the correct context.
 */

module.exports = function(Handlebars, options) {
  options = options || {};
  var opts = _.extend(options, options.data || {});

  return function (name, context) {
    var hash = context.hash || {};
    var ctx = _.extend({}, context || {}, hash);
    var template = Handlebars.partials[name];
    var fn = Handlebars.compile(template);
    return fn(ctx || '');
  };
};