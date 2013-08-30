/**
 * Grunt build file
 */
module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat :{
            dev: {
                src: ['src/**/*.js'],
                dest: 'dist/ti-utils.js'
            },
            prod: {
                src: ['src/**/*.js'],
                dest: 'dist/ti-utils-min.js'
            },
        },

        uglify: {
            prod: {
                files: {
                    'dist/ti-utils-min.js': ['<%= concat.prod.dest %>']
                }
            }
        },

        jshint: {
            // define the files to lint
            files: ['src/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    console: true,
                    module: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'concat:dev']
        },
        qunit: {
            all: {
                options: {
                    urls: [
                      'http://localhost:3000/test/index.html',
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },
        jsdoc : {
            dist : {
                src: ['src/**/*.js'], 
                options: {
                    destination: 'doc'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-jsdoc');

    
    grunt.registerTask('prod', ['jshint', 'concat:prod', 'uglify', 'jsdoc']);
    grunt.registerTask('dev', ['jshint', 'concat:dev']);
    grunt.registerTask('test', ['connect', 'qunit']);
    
};