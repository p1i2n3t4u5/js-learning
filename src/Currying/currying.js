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



function negetive2(x){
    return x - 2;
}

function getMajicNumber(x) {
    return function () {
        x = x + 2;
        return function(){
           return x = x * 2;
        }
    }
}

// Point Free style and function composition
const addVal = x => x + 2;
const multiplyVal = y => y * 2;
const getMajicNumberV2 = n => multiplyVal(addVal(2));

// Creating compose function
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const getMajicNumberV3 = compose(multiplyVal,addVal);


// COMPOSITION
const barker = (state) => ({  bark: () => 'Woof, I am ' +  state.name });
const murderDog = (name) => {
    let state = {
        name,
        speed: 40,
        postion: 0
    };

    return Object.assign({}, barker(state));

}

module.exports = {
    addition: addition,
    curry: curry,

    getMajicNumber: getMajicNumber,
    getMajicNumberV2: getMajicNumberV2,
    getMajicNumberV3: getMajicNumberV3,

    murderDog: murderDog,
    // add2Multiply3: add2Multiply3
}