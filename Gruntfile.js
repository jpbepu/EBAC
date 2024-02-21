module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        less: {
            development: {
                files: {
                    'dev/main.css' : 'src/main.less'
                }
            },
            production:{

                options:{
                    compress: true
                },
                files: {
                    'dist/main.min.css' : 'src/main.less'
                }
            }
        },

        watch:{
            less:{
                files:['src/**/*.less'],
                tasks:['less:development']
            },
            html:{
                files:['src/index.html'],
                tasks:['replace:dev']
            }
        },

        replace:{
            dev:{
                options:{
                    patterns:[
                        {
                            match:'css_add',
                            replacement:'./main.css'
                        },
                        {
                            match:'js_add',
                            replacement:'./script.js'
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten: true,
                        src:['src/index.html'],
                        dest:'dev/'
                    }
                ]
            },

            dist:{
                options:{
                    patterns:[
                        {
                            match:'css_add',
                            replacement:'main.min.css'
                        },
                        {
                            match:'js_add',
                            replacement:'./script.min.js'
                        }
                    ]
                },
                files:[
                    {
                        expand:true,
                        flatten: true,
                        src:['prebuild/index.html'],
                        dest:'dist/'
                    }
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html' : 'src/index.html'
                }
            }
        },

        uglify:{
            target:{
                files:{
                    'dist/script.min.js' : 'src/script.js'
                }
            }
        },

        clean:['prebuild']


    });
  

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');








    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'uglify', 'clean']);
  
  };