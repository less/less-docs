/**
 * Handlebars Helper: {{inline}}
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */

var matter = require('gray-matter');
var strip = require('strip-indent');
var _ = require('lodash');


module.exports.register = function (Handlebars, options, params) {
  options = options || {};

  Handlebars.registerHelper("inline", function (filepath, context) {
    var file = matter.read(filepath);
    var ctx = _.extend({}, options, this, context, file.context);
    var template = Handlebars.compile('\n' + strip(file.content));
    var result = template(ctx);
    return new Handlebars.SafeString(result);
  });
};
