function addition(x) {
    return function (y) {
        return x + y;
    }
}

function add(x, y) {
    return x + y;
}
function curry() {
    return function (x) {
        return function (y) {
            return add(x, y);
        }
    }
}



module.exports = {
    addition: addition,
    curry: curry,
    // add2Multiply3: add2Multiply3
}