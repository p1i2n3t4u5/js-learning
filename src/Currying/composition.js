
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
const multiplyValByThree = y => y * 3;


// 1st Way to compose
let composev1 = function(f1,f2){
    return function(value){
        return f2(f1(value));
    }
}

const composed = composev1(addVal, multiplyVal);
const getCompVal = x => composed(x); // 8


// Translation
// 2nd Way to compose
const getMajicNumberV2 = n => multiplyVal(addVal(n)); // 8

// 3rd Way to compose
const composev3 = (multiplyVal, add) => x => multiplyVal(add(x));
const getMajicNumberV3 = composev3(multiplyVal,addVal); // 8



// Creating GENERIC compose function
let composeV4 = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const getMajicNumberV4 = composeV4(multiplyValByThree, multiplyVal,addVal); // 24

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

    getCompVal:getCompVal,
    getMajicNumber: getMajicNumber,
    getMajicNumberV2: getMajicNumberV2,
    getMajicNumberV3: getMajicNumberV3,
    getMajicNumberV4: getMajicNumberV4,

    murderDog: murderDog,
}