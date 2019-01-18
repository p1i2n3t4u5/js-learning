alert("Hello World!")


var x = "ssss";
var y = 10.1;
var z = true; //true/false
var p = undefined;
var q = null;

console.log(x + "  " + y + " " + z + "  " + p + "  " + q);


console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof p);
console.log(typeof q);
console.log(typeof window);

console.log(window);


var v = typeof null;
console.log("typeof null=" + v);
var v = typeof "hello";
console.log("typeof string=" + v);
var v = typeof 10;
console.log("typeof 10=" + v);
var v = typeof {
      hi: 10
};
console.log("typeof object=" + v);
var v = typeof undefined;
console.log("typeof undefined=" + v);
var v = typeof
function () {

}
console.log("typeof function=" + v);

var v = typeof [10, 20];
console.log("typeof array=" + v);

var v = typeof new Date();
console.log("typeof date=" + v);


//deleting an element will not reduce the array size it will create an empty place there
var myarr = [10, 20, 30, 40];
console.log("printing the array=" + myarr);
delete myarr[1];
console.log("printing the array again=" + myarr);
console.log("printing the deleted element of array=" + myarr[1]);

//deleting the property of object
var myObj = {
      prop1: 10,
      prop2: 20,
      prop3: "Hara",
      prop4: true,
      prop5: undefined,
      prop6: null
};
console.log("printing the obj prop=" + myObj.prop1);
console.log("printing the obj prop=" + myObj["prop1"]);
delete myObj["prop1"];
delete myObj.prop2;
console.log("printing the obj prop again=" + myObj.prop1);

var obj = {
      prop: "123"
}
var obj2 = obj;
console.log(obj.prop)
console.log(obj2.prop)

obj.prop = 234;
console.log(obj2.prop);
console.log(obj.prop);


var v = "hello";
var x = 10;
if (typeof v === Number) {
      console.log(v + " a number");
} else {
      console.log(v + "Not a number");
}


if (typeof x === Number) {
      console.log(x + " a number");
} else {
      console.log(x + "Not a number");
}



var c = x + v;
console.log("c:" + c) //type coertion