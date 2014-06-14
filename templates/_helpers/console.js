const chalk = require('chalk');

/**
 * Logging helpers
 */

module.exports.register = function (Handlebars, options, params) {

  Handlebars.registerHelper('success', function (msg, context) {
    console.log(chalk.green('  ' + msg), context);
  });

  Handlebars.registerHelper('warn', function (msg, context) {
    console.log(chalk.yellow('  ' + msg), context);
  });

  Handlebars.registerHelper('fail', function (msg, context) {
    console.log(chalk.red('  ' + msg), context);
  });
};

