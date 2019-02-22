var src = require("../src/point-free-composition/point-free-composition");
var assert = require('assert');

describe('point-free-composition', function () {
    let person;
    beforeEach(function () {
      person = {
        firstName: 'amit',
        lastName: 'saha'
       }

    })
   
    describe('v1', function () {
        
        it('should return Amit when send amit', function () {

            assert.equal(src.toFullNameForViewV1(person), 'Amit Sah');
        });
    });

    describe('v2', function () {
        
        it('should return Amit when send amit', function () {

            assert.equal(src.toFullNameForViewV2(person), 'Amit Sah');
        });
    });
});