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


    config: {
      src: 'src',
      dist: '<%= site.dest %>'
    },


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
        // Project metadata
        site: '<%= site %>',

        // Assemble extensions
        // We should use premalinks before going live
        // plugins: ['permalinks'],
        helpers: ['templates/helpers/*.js'],

        // Templates and data
        layouts: 'templates/layouts',
        partials: ['templates/includes/*.hbs'],
        data: ['data/*.{json,yml}'],

        // Dest config
        assets: '<%= site.dest %>/assets',
        flatten: true
      },
      pages: {
        // options: {
        //   permalinks: {preset: 'pretty'}
        // },
        src: 'templates/*.hbs',
        dest: '<%= site.dest %>/'
      }
    },


    /**
     * Compile LESS to CSS
     */
    less: {
      options: {
        paths: ['theme/bootstrap', 'theme/components']
      },
      docs: {
        src: ['theme/theme.less'],
        dest: '<%= assemble.options.assets %>/css/docs.css'
      }
    },


    /**
     * Before generating any new files clear out
     * any previously-created files.
     */
    clean: {
      example: ['<%= site.dest %>/*.html']
    }
  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default tasks to be run.
  grunt.registerTask('default', ['clean', 'jshint', 'less', 'assemble']);
};
