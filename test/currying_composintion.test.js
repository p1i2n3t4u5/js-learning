var src = require('../src/Currying/currying');
var srccomp = require('../src/Currying/composition');

var assert = require('assert');


describe('currying',function(){

    describe('currying', function(){
        it('should return 3', function () {
            assert.equal(src.addition(1)(2), 3);
        });

        it('should return 3', function () {
            assert.equal(src.curry()(1)(2), 3);
        });

    });


});

describe('composition',function(){

    describe('composition', function(){
        
        it('should return 8', function () {
            assert.equal(srccomp.getCompVal(2),8)
            assert.equal(srccomp.getMajicNumber(2)()(), 8);
            assert.equal(srccomp.getMajicNumberV2(2), 8);
            assert.equal(srccomp.getMajicNumberV3(2), 8);
            assert.equal(srccomp.getMajicNumberV4(2), 24);

        });

        it('should return Woof, I am Tom', function () {
            assert.equal(srccomp.murderDog('Tom').bark(), 'Woof, I am Tom');
        });
    });


});