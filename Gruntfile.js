var outputFile = "templates.js"

module.exports = function(grunt) {
  'use strict';

  // load grunt tasks
  grunt.loadNpmTasks('grunt-compile-handlebars');

  grunt.registerTask('delete-output', function() {
    grunt.log.writeln("Deleting " + outputFile);
    grunt.file.delete(outputFile, false);
  });

  grunt.registerTask('default', ['delete-output', 'compile-handlebars'])

  // create configureation object
  grunt.initConfig({
    'compile-handlebars': {
      all: {
        files: [{
          dest: outputFile,
          src: "templates.hbs"
        }],
        helpers: ['for.js'],
        templateData: {
          books: [{
            title: "A Brave New World"
          }]
        }
      }
    }
  });
}
