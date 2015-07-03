module.exports = function(grunt) {
    grunt.initConfig({
        
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        jasmine_nodejs: {
        // task specific (default) options
        options: {
            specNameSuffix: "spec.js", // also accepts an array
            helperNameSuffix: "helper.js",
            useHelpers: false,
            stopOnFailure: false,
            // configure one or more built-in reporters
            reporters: {
                console: {
                    colors: true,
                    cleanStack: 1,       // (0|false)|(1|true)|2|3
                    verbosity: 3,        // (0|false)|1|2|(3|true)
                    listStyle: "indent", // "flat"|"indent"
                    activity: false
                },
                // junit: {
                //     savePath: "./reports",
                //     filePrefix: "junit-report",
                //     consolidate: true,
                //     useDotNotation: true
                // },
                // nunit: {
                //     savePath: "./reports",
                //     filename: "nunit-report.xml",
                //     reportName: "Test Results"
                // },
                // terminal: {
                //     color: false,
                //     showStack: false,
                //     verbosity: 2
                // },
                // teamcity: true,
                // tap: true
            },
            // add custom Jasmine reporter(s)
            customReporters: []
        },
            your_target: {
                // target specific options
                options: {
                    useHelpers: false
                },
                // spec files
                specs: [
                    "tests/**",
                ],
                helpers: [
                    "tests/helpers/**"
                ]
            }
        }
        
       
    
    });
    
    // load nodemon
    grunt.loadNpmTasks('grunt-nodemon');
    // load grunt-jasmine
    grunt.loadNpmTasks('grunt-jasmine-nodejs');
    
    // nodemon taask
    grunt.registerTask('default', ['jasmine_nodejs', 'nodemon']);
    
}