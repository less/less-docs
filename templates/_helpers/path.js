/**
 * Handlebars Helpers
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

var path = require('path');


module.exports.register = function (Handlebars, options, params) {


  Handlebars.registerHelper('basename', function (filepath) {
    return path.basename(filepath, path.extname(filepath));
  });

  Handlebars.registerHelper('filename', function (filepath) {
    return path.basename(filepath);
  });

};
