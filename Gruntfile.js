module.exports = function(grunt) {
    
    grunt.initConfig({
        
        coffee: {
            build: {
                expand: true,
                cwd: "_coffee/blueprints/",
                src: ["**/*.coffee"],
                dest: "blueprints",
                ext: ".js"
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-coffee');
    
};
