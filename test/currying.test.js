var src = require('../src/Currying/currying');
var assert = require('assert');


describe('currying',function(){

    describe('currying', function(){
        it('should return 3', function () {
            assert.equal(src.addition(1)(2), 3);
        });

        it('should return 3', function () {
            assert.equal(src.curry()(1)(2), 3);
        });

        it('should return 8', function () {
            assert.equal(src.getMajicNumber(2)()(), 8);
            assert.equal(src.getMajicNumberV2(2), 8);
            assert.equal(src.getMajicNumberV3(2), 8);

        });

        it('should return Woof, I am Tom', function () {
            assert.equal(src.murderDog('Tom').bark(), 'Woof, I am Tom');
        });
    });


});