module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    scriptsPath: './assets/javascripts',
    stylesheetsPath: './assets/stylesheets',

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
          '<%= scriptsPath %>/app/api/api.js',
          '<%= scriptsPath %>/app/api/*.js',
          '<%= scriptsPath %>/app/event_manager/events.js',
          '<%= scriptsPath %>/app/event_manager/*.js',
          '<%= scriptsPath %>/app/inputs/inputs.js',
          '<%= scriptsPath %>/app/inputs/*.js',
          '<%= scriptsPath %>/app/navigation/navigation.js',
          '<%= scriptsPath %>/app/navigation/*.js',
          '<%= scriptsPath %>/app/assessment/assessment.js',
          '<%= scriptsPath %>/app/assessment/**/*.js',
          '<%= scriptsPath %>/app/module.js',
          '!<%= scriptsPath %>/build.js'
        ],
        dest: '<%= scriptsPath %>/build.js'
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded' 
        },
        files: {
          '<%= stylesheetsPath %>/build.css': '<%= stylesheetsPath %>/style.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed' 
        },
        files: {
          '<%= stylesheetsPath %>/build.min.css': '<%= stylesheetsPath %>/style.scss'
        }
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
      css: {
        files: '<%= stylesheetsPath %>/{,*/}*.{scss,sass}',
        tasks: ['sass']
      },

      grunt: {
        files: ['Gruntfile.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['concat', 'sass:dev', 'sass:dist', 'watch']);
};