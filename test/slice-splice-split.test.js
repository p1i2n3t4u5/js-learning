var src = require("../src/slice-splice-split/slice-splice-split");
var assert = require('assert');

describe('slice-splice-split', function () {
    let arr = [1, 2, 3, "hello world", 4.12, true];
    let newar = '';
    let beforeLength = arr.length;
     let afterLength = 0

    describe('sliceCheck', function () {
        beforeEach(function () {
            newar = src.sliceCheck(arr);
            afterLength = arr.length;

        })
        it('should return same length of array  and  1', function () {

            assert.equal(beforeLength, afterLength);
            assert.equal(newar, 1);
        });
    });
    
    describe('spliceCheck', function () {
        

        beforeEach(function () {
            newar = src.spliceCheck(arr);
            afterLength = arr.length;

        })
        it('should return  different length of array and 1 ', function () {

            assert.notEqual (beforeLength, afterLength);
            assert.equal(newar, 1);
        });
    });

    describe('splitCheck', function () {
        
        it('should return two length of array when passed ab ', function () {
            assert.notEqual(src.splitCheck('ab'),2);
            assert.equal(src.splitCheck('ab')[0], 'a');
            assert.equal(src.splitCheck('ab')[1], 'b');

        });
    });

    

});