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
    pkg : grunt.file.readJSON('package.json'),
    site: grunt.file.readYAML('_config.yml'),


    jshint: {
      options: {jshintrc: '.jshintrc'},
      all: [
        'Gruntfile.js',
        'templates/helpers/*.js'
      ]
    },


    // Build HTML from templates and data
    assemble: {
      options: {
        flatten: true,
        production: false,
        assets: '<%= site.assets %>',

        // Metadata
        pkg: '<%= pkg %>',
        site: '<%= site %>',
        data: ['<%= site.data %>/*.{json,yml}'],

        // Extensions
        helpers: ['<%= site.helpers %>/*.js'],
        plugins: ['<%= site.plugins %>'],

        // Templates
        partials: '<%= site.includes %>/*.hbs',
        layoutdir: '<%= site.layouts %>',
        layout: '<%= site.layout %>',
      },
      site: {
        // options: {
        //   permalinks: {preset: 'pretty'}
        // },
        src: '<%= site.pages %>/*.hbs',
        dest: '<%= site.dest %>/'
      }
    },


    // Compile LESS to CSS
    less: {
      options: {
        paths: ['theme/bootstrap', 'theme/components']
      },
      docs: {
        src: ['theme/site.less'],
        dest: '<%= assemble.options.assets %>/css/site.css'
      }
    },


    copy: {
      assets: {
        src: ['assets/**'],
        dest: '<%= site.dest %>/'
      }
    },


    // Before generating any new files clear out any previously
    // created files.
    clean: {
      example: ['<%= site.dest %>/*.html']
    },


    // Pull down a JSON list of LESS's repos from GitHub's API,
    // so the metadata can be used in templates
    repos: {
      namespaced: {
        options: {username: 'less'},
        files: {
          '<%= site.data %>/less.json': ['repos?page=1&per_page=100']
        }
      }
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-repos');

  // Pull down the
  grunt.registerTask('update', ['repos', 'default']);

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'copy', 'jshint', 'less', 'assemble']);
};
