module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    scriptsPath: './assets/javascripts',

    concat: {
      options: {
        separator: "/* END OF SOURCE */\n",
        process: function(src, filepath) {
          return "\n/* SOURCE: " + filepath + " */\n" + src;
        }
      },
      dist: {
        src: [
          '<%= scriptsPath %>/vendor/**/*.js',
          '<%= scriptsPath %>/app/module.js',
          '<%= scriptsPath %>/app/**/*.js',
          '!<%= scriptsPath %>/build.js'
        ],
        dest: '<%= scriptsPath %>/build.js'
      }
    },

    jshint: {
      options: { asi: true, force: true },
      all: ['<%= scriptsPath %>/**/*.js', '!<%= scriptsPath %>/build.js']
    },

    watch: {
      main: {
        files: ['<%= scriptsPath %>/**/*.js', '!<%= scriptsPath %>/build.js'],
        tasks: ['concat'] //, 'jshint']
      },

      grunt: {
        files: ['Gruntfile.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['concat']);
};