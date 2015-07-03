module.exports = function(grunt) {
    grunt.initConfig({
        
        nodemon: {
            dev: {
                script: 'server.js'
            }
        }
    
    });
    
    // load nodemon
    grunt.loadNpmTasks('grunt-nodemon');
    
    // nodemon taask
    grunt.registerTask('default', ['nodemon']);
    
}