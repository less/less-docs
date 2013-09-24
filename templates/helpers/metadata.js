/**
 * Handlebars Helpers: Metadata
 * Copyright (c) 2013 lesscss.org
 * Licensed under the MIT License (MIT).
 */

'use strict';

// Node.js
var path   = require('path');
var fs     = require('fs');

// node_modules
var _      = require('lodash');

// package.json config object
// var config = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
var config = require(path.resolve(process.cwd(), 'package.json'));

// console.log(config);

// Export helpers
// module.exports.register = function (Handlebars, options) {
//   options = options || {};

//   /**
//    * {{pkg}}
//    * Return a property from package.json
//    * @param  {String} key
//    * @return {String}
//    */
//   exports.pkg = function(key) {
//     options = _.defaults(options, config);
//     return options[key] || '';
//   };


//   for (var helper in exports) {
//     if (exports.hasOwnProperty(helper)) {
//       Handlebars.registerHelper(helper, exports[helper]);
//     }
//   }
// };

function pkg(key) {
  var options = _.defaults(options, config) || {};
  return options[key] || '';
}

module.exports = {
  pkg: pkg
};