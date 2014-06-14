/**
 * Handlebars Helpers
 * Copyright (c) 2014 Jon Schlinkert
 * Licensed under the MIT License (MIT).
 */
'use strict';

var path = require('path');


module.exports.register = function (Handlebars, options, params) {



  /**
   * JavaScript's replace function exposed in a helper.
   *
   * @param   {String}  str          The string to evaluate
   * @param   {RegExp}  pattern      The regex or string pattern to replace
   * @param   {String}  replacement  The replacement value
   * @param   {String}  flags        Optional regex flags to use.
   * @return  {String}
   */
  Handlebars.registerHelper('replace', function (str, pattern, replacement, flags) {
    flags = flags || 'gi';
    return str.replace(new RegExp(pattern, flags), replacement);
  });


  /**
   * This helper is used in the `source-link` popovers to
   * rename, say `helper-foo` to `"{{foo}}"` or, if not a
   * helper, rename `bar` to `"bar"`
   *
   * @param   {String}  basename   The string to rename.
   * @return  {String}             The {{renamed}} string
   */

  Handlebars.registerHelper('rename', function (name) {
    if(/helper-/.test(name)) {
      return '{{' + name.split(/\W/)[1] + '}}';
    }
    return new Handlebars.SafeString('"' + name + '"');
  });


  /**
   * Used in the source-link popovers to modify
   * the message based on the file extension.
   *
   * @param   {String}  filepath
   * @return  {String}
   */

  Handlebars.registerHelper('filetype', function (filepath) {
    switch (path.extname(filepath)) {
      case '.md':
        return 'markdown source';
      case '.hbs':
      case '.tmpl':
      case '.html':
        return 'source template';
      default:
        return 'source file';
    }
  });
};
