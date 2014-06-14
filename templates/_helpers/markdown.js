/**
 * Markdown Helper {{markdown}}
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors
 * Licensed under the MIT License (MIT).
 */
'use strict';

var file = require('fs-utils');
var marked = require('marked-extras');
var strip = require('strip-indent');
var _ = require('lodash');


// module.exports = function (config) {
//   var Handlebars = config.Handlebars;
//   var helpers = {};

//   config.options = config.options || {};
//   var opts = _.extend(config.options, config.options.data || {});
//   opts.marked = opts.marked || {};

//   // file.expand(opts.content).map(function(filepath) {
//   //   var name = file.base(filepath).toLowerCase();
//   //   var template = file.readFileSync(filepath);
//   //   Handlebars.registerPartial(name, template);
//   // });

//   helpers.markdown = function (options) {
//     var content = strip(options.fn(this));
//     return new Handlebars.SafeString(marked(content, opts.marked));
//   };

//   helpers.md = function (name, context) {
//     var ctx = _.extend(this, context || {});
//     var template = Handlebars.partials[name];
//     var fn = Handlebars.compile(template);
//     return new Handlebars.SafeString(marked(fn(ctx), opts.marked));
//   };

//   return helpers;
// };