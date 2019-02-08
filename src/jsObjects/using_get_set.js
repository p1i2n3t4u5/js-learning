var accessorObj = {
    let: name = 'Amit',

    get name() {
      return name;
    },
    set name(s){
        name =   s;
    }
  };

  let objProperties = {
      a: 5,
     
  };

module.exports = {
    obj: accessorObj,
    objProperties: objProperties,


}