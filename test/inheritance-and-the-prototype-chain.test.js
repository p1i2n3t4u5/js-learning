var src = require('../src/inheritance-and-the-prototype-chain');
var assert = require('assert');


describe('inheritance-and-the-prototype-chain',function(){

    describe('withOutProtoType', function(){
        it('should return Not equal val1 is int and val2 is string passed', function () {
            assert.equal(src.withOutProtoType().leo.name, "Leo");
            assert.equal(src.withOutProtoType().leo.energy, 7);

            assert.equal(src.withOutProtoType().charlie.name, "Charlie");
            assert.equal(src.withOutProtoType().charlie.energy, 10);

        });
    });

    describe('withUseOfPrototype', function(){
        it('should return Not equal val1 is int and val2 is string passed', function () {
            assert.equal(src.withUseOfPrototype().leo.name, "Leo");
            assert.equal(src.withUseOfPrototype().leo.energy, 7);

            assert.equal(src.withUseOfPrototype().charlie.name, "Charlie");
            assert.equal(src.withUseOfPrototype().charlie.energy, 10);

        });
    });

});