#JavaScript objects pack more things than their terse and concise syntax would naturally exhibit. Creating and using objects in JavaScript is so easy, effortless, and so flexible that a lot of developers never realize that there is more to it.

We are going to uncover some of the hidden layers and understand the intricacies of JavaScript objects. After reading this article, you should be able to answer the following questions —

How to make a property undeletable?
What are accessor properties and what are their features?
How to make a property immutable or hidden?
Why some properties do not appear in for-in loops or Object.keys and some do?
How to “protect” objects from modification?
How to make sense of code such as

### Accessor Properties
They can also be understood as getters and setters of other languages such as C# or Python. An accessor property is a combination of two functions: the get and the set function.

Why would anybody use accessor properties if normal data properties exist? There are often cases where you need to log the property access or maintain a history of all the values that the property has had. Accessor properties give us the full power of a function with the ease of use of object properties. You can read more about accessor usage here.

### Object Property Descriptors
At first glance, it might look like there is a one-to-one mapping between keys and values of an object. However, that’s not entirely true.

#### Property Attributes
Every key of an object contains a set of property attributes that define the characteristics of the value associated with the key. They can also be thought of as meta-data describing the key-value pair. In short, attributes are used to define and explain the state of object properties.

#### The set of property attributes is called the property descriptor.

In total, there are six property attributes. They are —

``` [[Value]] ```
``` [[Get]] ```
``` [[Set]] ```
``` [[Writable]] ```
``` [[Enumerable]] ```
``` [[Configurable]] ```

Why have we wrapped the attribute names in [[]]? Double square brackets mark internal properties used by the ECMA specifications. These are properties that JS programmer cannot touch directly from within the code. To manipulate internal properties, we’d need to use methods provided to us by the language.

### Protecting Objects
There are often cases where we don’t want anyone to tamper with our objects. Given the flexibility of JavaScript, it’s really easy to mistakenly re-assign properties of objects that we are not meant to touch. There are three major ways of protecting objects in JavaScript.

#### Object.preventExtensions
The Object.preventExtensions method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It takes an object and makes it non-extensible.

You can check whether an object is non-extensible or not by using Object.isExtensible. If it returns true, you can add more properties to the object.

####  Object.seal
The seal method seals an object. It means —

It prevents new properties from being added just like Object.preventExtensions.
It marks all existing properties as non-configurable.
Values of present properties can still be changed as long as they are writable.
In short, it prevents adding and/or removing properties.
You can use Object.isSealed to test whether an object has been sealed or not.

#### Object.freeze
freeze is the maximum protection any object can have in JavaScript. It —

seals the object using Object.seal
It also prevents modifying any existing properties at all.
It also prevents the descriptors from being changed as the object is already sealed.
