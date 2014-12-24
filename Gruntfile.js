module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    copy: {
      files: {
        expand: true,
        cwd: 'src/',
        src: ['**/*', '!styles/**'],
        dest: 'dist/'
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/css/main.css': ['src/styles/main.scss']
        }
      }
    },

    watch: {
      javacript: {
        files: ['src/**/*', '!styles/**'],
        tasks: ['newer:copy']
      },
      sass: {
        files: ['src/**/*'],
        tasks: ['newer:sass']
      }
    }
  });


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');


  // Default task(s).
  grunt.registerTask('default', [
    'sass',
    'copy'
    ]
  );

};
