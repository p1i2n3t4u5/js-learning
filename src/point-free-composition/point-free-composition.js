let commonFunc = (function(){
    function capitalizeNames(person){
        return {
         firstName : capitalize(person.firstName),
         lastName : capitalize(person.lastName)
        }
      }
      function capitalize(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      }
      function computeFullName(person){
        return person.firstName + " " + person.lastName;
      }
      function shorterName(name){
        return name.substring(0, 8);
      }

      return {
        capitalizeNames: capitalizeNames,
        computeFullName: computeFullName,
        shorterName: shorterName

      }
})(); 


let v1 = (function (){
function toFullNameForViewV1(person){
    let newPerson = commonFunc.capitalizeNames(person);
    let fullName = commonFunc.computeFullName(newPerson);
    return commonFunc.shorterName(fullName);
  }
  

  return {
    toFullNameForViewV1: toFullNameForViewV1
  };

})();

let v2 = (function(){

    function pipe(...functions){ 
        return function(value){
         return functions.reduce(composeLeftToRight, value);
        }
      }
      function composeLeftToRight(computedValue, fn){
        return fn(computedValue);
      }

      let toFullNameForViewV2 = pipe(
        commonFunc.capitalizeNames,
        commonFunc.computeFullName,
        commonFunc.shorterName,
      );

      return {
        toFullNameForViewV2: toFullNameForViewV2
      };

})();


  module.exports = {
    toFullNameForViewV1: v1.toFullNameForViewV1,
    toFullNameForViewV2: v2.toFullNameForViewV2,
  }