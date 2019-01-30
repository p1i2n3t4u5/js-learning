// For More Info: https://medium.freecodecamp.org/javascript-inheritance-and-the-prototype-chain-d4298619bdae

module.exports= {
    withOutProtoType: function(){
        // ES5
        // BASE CLASS
        function Animal (name, energy) {
            this.name = name
            this.energy = energy
        }
        Animal.prototype.eat = function (amount) {
            console.log(`${this.name} is eating.`)
            this.energy += amount
        }
        Animal.prototype.sleep = function (length) {
            console.log(`${this.name} is sleeping.`)
            this.energy += length
        }
        Animal.prototype.play = function (length) {
            console.log(`${this.name} is playing.`)
            this.energy -= length
        }
        const leo = new Animal('Leo', 7)

        // CHILD CLASS for specific animals
        function Dog (name, energy, breed) {
            this.name = name
            this.energy = energy
            this.breed = breed
          }
          Dog.prototype.eat = function (amount) {
            console.log(`${this.name} is eating.`)
            this.energy += amount
          }
          Dog.prototype.sleep = function (length) {
            console.log(`${this.name} is sleeping.`)
            this.energy += length
          }
          Dog.prototype.play = function (length) {
            console.log(`${this.name} is playing.`)
            this.energy -= length
          }
          Dog.prototype.bark = function () {
            console.log('Woof-Woof!')
            this.energy -= .1
          }
          const charlie = new Dog('Charlie', 10, 'Goldendoodle');

          return {leo,charlie};

        //   If we wanted to create another animal, say a Cat, 
        //   at this point we’d again have to create a Cat class, 
        //   duplicate all the common logic located in the Animal class to it
        //   This is waste


        //   LETS DO SOME OTHER WAY AROUND 
    },

    // Another Approach
    // What are some things we know about the Dog constructor function above?

    // First, we know it takes 3 arguments, name, energy, and breed.

    // Second, we know it’s going to be called with the new keyword so we’ll have a this object.

    // And third, we know we need to utilize the Animal function so that any instance of dog will have a name,
    //  energy level, and be able to eat, sleep, and play.

    // It’s the third one that’s the tricky one. The way you “utilize” a function is by calling it. 
    // So we know that inside of Dog, we want to call Animal. What we need to figure out though is how we can 
    // invoke Animal in the context of Dog. 

    withUseOfPrototype: function(){
        // ES5
        // BASE CLASS
        function Animal (name, energy) {
            this.name = name
            this.energy = energy
        }
        Animal.prototype.eat = function (amount) {
            console.log(`${this.name} is eating.`)
            this.energy += amount
        }
        Animal.prototype.sleep = function (length) {
            console.log(`${this.name} is sleeping.`)
            this.energy += length
        }
        Animal.prototype.play = function (length) {
            console.log(`${this.name} is playing.`)
            this.energy -= length
        }
        const leo = new Animal('Leo', 7);

        function Dog (name, energy, breed) {
            Animal.call(this, name, energy)
            this.breed = breed
          }

        //   Object.create allows you to create an object which will delegate to another object on failed lookups.
        //   So in our case, the object we want to create is going to be Dog’s prototype and the object we want to
        //   delegate to on failed lookups is Animal.prototype.
          Dog.prototype = Object.create(Animal.prototype);


          const charlie = new Dog('Charlie', 10, 'Goldendoodle');
          Dog.prototype.constructor = Dog;
          charlie.name // Charlie
          charlie.energy // 10
          charlie.breed // Goldendoodle

          return {leo,charlie};
    }
}