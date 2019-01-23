var val1 = 15;
var val2 = "15";


module.exports = {

    tripleEqual: function (val1, val2) {
        if (val1 === val2) {
            return "two objects are equal";
        } else {
            return "Not equal";
        }
    },
    doubleEqual: function (val1, val2) {
        if (val1 == val2) {
            return "two objects are equal";
        } else {
            return " Not equal";
        }
    }
}

