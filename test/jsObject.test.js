var test = require("../src/jsObject");
var assert = require('assert');

describe('jsObject',function(){
        var val1 = 15;
        var val2 = '15';
    describe('tripleEqual', function(){
        
        it('should return tNot equal val1 is int and val2 is string passed', function () {
            assert.equal(test.tripleEqual(val1,val2), "Not equal");
        });

        it('should return two objects are equal same val1 and val2 as integer is passed', function () {
            val2 = 15;
            assert.equal(test.tripleEqual(val1,val2), "two objects are equal");
        });
    });

    describe('doubleEqual', function(){
        it('should return two objects are equal same val1 is integer and val2 is string passed', function () {
            assert.equal(test.doubleEqual(val1,val2), "two objects are equal");
        });
        it('should return two objects are equal same val1 and val2 as integer is passed', function () {
            val2 = 15;
            assert.equal(test.tripleEqual(val1,val2), "two objects are equal");
        });
        
    });

});