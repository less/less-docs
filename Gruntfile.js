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
    site: grunt.file.readYAML('_config.yml'),
    pkg:  grunt.file.readJSON('package.json'),


    /**
     * Lint JavaScript
     */
    jshint: {
      options: {jshintrc: '.jshintrc'},
      all: [
        'Gruntfile.js',
        'templates/helpers/*.js'
      ]
    },


    /**
     * Generate HTML
     */
    assemble: {
      options: {
        flatten: true,
        year: '<%= grunt.template.today("yyyy") %>',
        assets: '<%= site.destination %>/assets',
        partials: ['templates/includes/*.hbs'],
        helpers: ['helper-prettify', 'templates/helpers/*.js'],
        layout: 'templates/layouts/default.hbs',
        data: ['data/*.{json,yml}', 'package.json']
      },
      pages: {
        src: 'templates/*.hbs',
        dest: '<%= site.destination %>/'
      }
    },


    /**
     * Compile LESS to CSS
     */
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


    /**
     * Before generating any new files clear out
     * any previously-created files.
     */
    clean: {
      example: ['<%= site.destination %>/*.html']
    }
  });


  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default tasks to be run.
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'assemble',
    // 'less'
  ]);
};
