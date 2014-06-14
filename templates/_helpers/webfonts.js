'use strict';

/**
 * Webfont helpers
 */

module.exports.register = function (Handlebars, options, params) {
  Handlebars.registerHelper('webfonts', function (context) {
    return new Handlebars.SafeString('"' + context.join('", "') + '"');
  });
};
