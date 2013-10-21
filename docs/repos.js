var grunt = require('grunt');
var https = require('https');
var _  = grunt.util._;

var options = {
  host: 'api.github.com',
  method: 'GET',
  path: '/orgs/assemble/repos?page=1&per_page=100'
};

var request = https.request(options, function (response) {
  var body = '';
  response.on('data', function (chunk) {
    body += chunk;
  });
  response.on('end', function () {
    var json = JSON.parse(body);
    var repos = [];
    json.forEach(function (repo) {
      repos.push({
        name : repo.name,
        version : repo.version,
        description : repo.description,
        url : repo.html_url
      });
    });

    var plugins = {
      repos: _(repos).sortBy('name')
    };

    grunt.verbose.ok('repos:'.yellow, JSON.stringify(plugins, null, 2));
    grunt.file.write('docs/repos.json', JSON.stringify(plugins, null, 2));
  });
});

request.on('error', function (e) {
  console.error(e);
});

request.end();