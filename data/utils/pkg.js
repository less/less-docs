/**
 * package.json
 */

// Node.js
var path = require('path');

// node_modules
var cwd = require('cwd');
var grunt = require('grunt');
var _ = require('lodash');

// Config
cwd = path.join.bind(null, cwd, 'data');

var githubApi = require('github');
var github = new githubApi({
  version: '3.0.0',
  timeout: 5000
});

var getPackageFile = function (dest, callback) {

  // Get package.json
  github.repos.getContent({
    user: 'less',
    repo: 'less.js',
    path: 'package.json'
  },

  function (err, resp, cb) {
    if (err) {
      console.log('error: ' + err);
      callback(err, null);
    } else {
      var b = new Buffer(resp.content, 'base64');
      var pkg = {
        name: resp.name,
        text: b.toString()
      };
      var contents = JSON.parse(pkg.text, 'utf-8');
      contents = _.extend({
        repo: "https://github.com/less/less.js.git",
        issues: "https://github.com/less/less.js/issues",
        master: "https://github.com/less/less.js/blob/master/"
      }, contents);
      grunt.log.ok('Saved:'.yellow, dest);
      grunt.file.write(dest, JSON.stringify(contents, null, 2));
    }
  });
};

getPackageFile(cwd('less.json'));
