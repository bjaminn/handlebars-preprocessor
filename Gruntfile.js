var inputFile = "templates.hbs"
var outputFile = "templates.dot"

module.exports = function (grunt) {
  'use strict';

  // load grunt tasks
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-graphviz');

  grunt.registerTask('delete-output', function () {
    grunt.log.writeln("Deleting " + outputFile);
    grunt.file.delete(outputFile, false);
  });

  grunt.registerTask('default', ['delete-output', 'compile-handlebars', 'graphviz'])

  // create configureation object
  grunt.initConfig({
    graphviz: {
      your_target: {
        files: {
          'templates.png': outputFile,
          // etc... 
        }
      },
    },
    'compile-handlebars': {
      all: {
        files: [{
          dest: outputFile,
          src: inputFile
        }],
        helpers: ['node_modules/handlebars-helpers/lib/helpers/helpers-math.js', 'helpers/*.js'],
        templateData: {
          books: [{
            title: "A Brave New World"
          }]
        }
      }
    }
  });
}

