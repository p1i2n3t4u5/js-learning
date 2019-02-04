var test = require("../src/jsObjects/using_get_set");
var assert = require('assert');
var expect = require('expect.js');

describe('accessorObj',function(){
    it('should return name',function(){
        assert.equal(test.obj.name, 'Amit');
    });

    it('should set new name and return updated name',function(){
        test.obj.name = 'Niranjan\'s Wife';
        assert.equal(test.obj.name, 'Niranjan\'s Wife');
    });

});

describe('objProperties',function(){
    it('should return all 4 properties',function(){
        assert.equal(Object.getOwnPropertyDescriptor(test.objProperties,'a').configurable, true);
        assert.equal(Object.getOwnPropertyDescriptor(test.objProperties,'a').enumerable, true);
        assert.equal(Object.getOwnPropertyDescriptor(test.objProperties,'a').writable, true);
        assert.equal(Object.getOwnPropertyDescriptor(test.objProperties,'a').value, 5);
    });

    it('should not allow to update value',function(){
        Object.defineProperty(test.objProperties, 'a', {
            writable: false,
          });
        assert.equal(Object.getOwnPropertyDescriptor(test.objProperties,'a').writable, false);
        test.objProperties.a = 'Kal';
        assert.equal(Object.getOwnPropertyDescriptor(test.objProperties,'a').value, 5);
    });

    it('should not allow to update value',function(){
        Object.defineProperty(test.objProperties, 'a', {
            configurable: false,
          });
        assert.equal(Object.getOwnPropertyDescriptor(test.objProperties,'a').writable, false);

        assert.throws(() => (Object.defineProperty(test.objProperties, 'a', {writable: true})), Error);
    });

});

describe('objProperties Prevention',function(){

    describe('Object.preventExtensions', function(){
        it('should not allow to update value',function(){
            Object.preventExtensions(test.objProperties.a);
            // Updating..
            test.objProperties.a = 'Kal';

            assert.equal(test.objProperties.a, 5);
            assert.equal(Object.isExtensible(test.objProperties), true);
            assert.equal(Object.isSealed(test.objProperties), false);
            assert.equal(Object.isFrozen(test.objProperties), false);
           
        });
    });
    
});