/**
 * Handlebars Helpers: Metadata
 * Copyright (c) 2013 lesscss.org
 * Licensed under the MIT License (MIT).
 */

// Node.js
var path   = require('path');
var fs     = require('fs');

// node_modules
var _      = require('lodash');

// package.json config object
var config = require(path.resolve(process.cwd(), 'package.json'));

// Export helpers
module.exports.register = function (Handlebars, options) {

  'use strict';

  /**
   * {{pkg}}
   * Return a property from package.json
   * @param  {String} key
   * @return {String}
   */
  exports.pkg = function(key) {
    options = _.defaults(options, config);
    return options[key] || '';
  };


  for (var helper in exports) {
    if (exports.hasOwnProperty(helper)) {
      Handlebars.registerHelper(helper, exports[helper]);
    }
  }
};
