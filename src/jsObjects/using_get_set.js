var accessorObj = {
    let: name = 'Amit',

    get name() {
      return name;
    },
    set name(s){
        name =   s;
    }
  };

module.exports = {
    obj: accessorObj,
}