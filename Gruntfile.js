/*
 * lesscss.org
 * https://github.com/less/less-docs
 * Copyright (c) 2013
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // Project metadata
    site: grunt.file.readYAML('data/site.yml'),
    pkg: grunt.file.readJSON('package.json'),

    // Lint JavaScript
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'helpers/*.js'
      ]
    },

    // Build HTML from templates and data
    assemble: {
      options: {
        flatten: true,
        assets: 'assets',
        partials: ['templates/includes/*.hbs'],
        helpers: ['helper-prettify'],
        layout: 'templates/layouts/default.hbs',
        data: ['data/*.{json,yml}', 'package.json']
      },
      pages: {
        src: 'templates/*.hbs',
        dest: '<%= site.destination %>/'
      }
    },

    // Compile LESS to CSS
    less: {
      options: {
        paths: ['vendor/bootstrap/less', 'styles'],
        imports: {
          reference: ['mixins.less', 'variables.less']
        }
      },
      bootstrap: {
        src: ['styles/bootstrap.less', 'styles/docs.less'],
        dest: '<%= assemble.options.assets %>/css/docs.css'
      }
    },

    // Before generating any new files clear out any previously-created files.
    clean: {
      example: ['<%= site.destination %>/*.html']
    },

    watch: {
      all: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint', 'nodeunit']
      },
      design: {
        files: ['Gruntfile.js', '<%= less.options.paths %>/*.less', '**/*.hbs'],
        tasks: ['design']
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'assemble',
    'prettify',
    'less'
  ]);

  // Build HTML, compile LESS and watch for changes.
  // You must first run "bower install" or install
  // Bootstrap to the "vendor" directory before running
  // this command.
  grunt.registerTask('design', [
    'clean',
    'assemble',
    'less:docs',
    'watch:design'
  ]);
};
