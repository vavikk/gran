(function() {
    "use strict";
    
    describe("Configuration Setup", function() {
        it("should load local configuration", function(){
            var config = require('../server/config.js')();
            expect(config.mode).toBe('local');
        });
        it("should load staging configuration", function(){
            var config = require('../server/config.js')('staging');
            expect(config.mode).toBe('staging');
        });
        it("should load production configuration", function(){
            var config = require('../server/config.js')('production');
            expect(config.mode).toBe('production');
        });
    
    });
})();