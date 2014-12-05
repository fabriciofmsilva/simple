module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      files: {
        expand: true,
        cwd: 'dev/',
        src: ['**/*'],
        dest: 'public/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

};
