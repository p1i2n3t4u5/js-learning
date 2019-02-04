var test = require("../src/jsObjects/using_get_set");
var assert = require('assert');

describe('accessorObj',function(){
    it('should return name',function(){
        assert.equal(test.obj.name, 'Amit');
    });

    it('should set new name and return updated name',function(){
        test.obj.name = 'Niranjan\'s Wife';
        assert.equal(test.obj.name, 'Niranjan\'s Wife');
    });

})