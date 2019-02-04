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