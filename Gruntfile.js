module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/',
            src: ['**/*', '!images/**', '!styles/**'],
            dest: 'dist/'
          }
        ]
      },
      images: {
        files: [
          {
            expand: true,
            cwd: 'src/images',
            src: ['**/*'],
            dest: 'dist/img'
          }
        ]
      },
      cssAsScss: {
        files: [
          {
            expand: true,
            cwd: 'src/styles/bower_components',
            src: ['**/*.css', '!**/*.min.css'],
            dest: 'src/styles/bower_components',
            filter: 'isFile',
            ext: ".scss"
          }
        ]
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
    'copy:main',
    'copy:images'
    ]
  );

  grunt.registerTask('cssAsScss', [
    'copy:cssAsScss'
    ]
  );

};
