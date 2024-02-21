module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        less: {
            development: {
                files: {
                    'build/main.css' : 'src/main.less'
                }
            },
            production:{

                options:{
                    compress: true
                },
                files: {
                    'build/main.min.css' : 'src/main.less'
                }
            }
        },


        uglify:{
            target:{
                files:{
                    'build/script.min.js' : 'src/script.js'
                }
            }
        },



    });
  

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');



    grunt.registerTask('default', ['less', 'uglify']);
  
  };