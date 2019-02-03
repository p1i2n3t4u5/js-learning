module.exports = {

    // Does not change the array
    sliceCheck: function(arr){
        let newar = arr.slice(0,1);
        return newar;
    },

    // Change the array
    spliceCheck: function(arr){
        let newar = arr.splice(0,1);
        return newar;
    },
    
    // Return String
    splitCheck: function(s){
        return s.split('');
    },


}