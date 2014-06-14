/**
 * Handlebars Helpers
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

var path = require('path');
var file = require('fs-utils');


module.exports.register = function (Handlebars, options, params) {

  /**
   * Write a file to disk.
   *
   * @param   {String}  filepath Filepath of the destination file
   * @param   {String}  content  Content to write to the file.
   * @return  {String}
   */

  Handlebars.registerHelper('write', function (filepath, content) {
    return file.writeFileSync(filepath, content);
  });



  /**
   * Write the give context to a JSON file.
   * @param   {String}  dest     Destination directory
   * @param   {String}  name     Destination file name
   * @param   {Object}  context  Context object
   * @return  {Object}           JSON File with context
   *
   * @example
   *   {{writeJSON 'tmp/page/' basename this.page}}
   *
   */

  Handlebars.registerHelper('writeJSON', function (dest, name, context) {
    return file.writeJSONSync(path.join(dest, name) + '.json', context);
  });
};
