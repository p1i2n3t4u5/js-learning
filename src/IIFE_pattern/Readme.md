# JAVASCRIPT modules IIFE

First Of all Why we Need Module 

## Reusability
Take a look at the diagram above one more time. Notice how many of the same pieces are being used throughout the watch. Through highly intelligent design decisions centered on modularity, they’re able to re-use the same components throughout different aspects of the watch design. This ability to re-use pieces simplifies the manufacturing process and, I’m assuming, increases profit.

## Composability
The diagram is a beautiful illustration of composability. By establishing clear boundaries for each individual component, they’re able to compose each piece together to create a fully functioning watch out of tiny, focused pieces.

## Leverage
Think about the manufacturing process. This company isn’t making watches, it’s making individual components that together form a watch. They could create those pieces in house, they could outsource them and leverage other manufacturing plants, it doesn’t matter. The most important thing is that each pieces comes together in the end to form a watch — where those pieces were created is irrelevant.

## Isolation
Understanding the whole system is difficult. Because the watch is composed of small, focused pieces, each of those pieces can be thought about, built and or repaired in isolation. This isolation allows multiple people to work individually on the watch while not bottle-necking each other. Also if one of the pieces breaks, instead of replacing the whole watch, you just have to replace the individual piece that broke.

## Organization
Organization is a byproduct of each individual piece having a clear boundary for how it interacts with other pieces. With this modularity, organization naturally occurs without much thought.

We’ve seen the obvious benefits of modularity when it comes to every day items like a watch, but what about software? Turns out, it’s the same idea with the same benefits. Just how the watch was designed, we should design our software separated into different pieces where each piece has a specific purpose and clear boundaries for how it interacts with other pieces. In software, these pieces are called modules. At this point a module might not sound too different from something like a function or a React component. So what exactly would a module encompass?

Each module has three parts — dependencies (also called imports), code, and exports.

``` imports ```
``` code ```
``` exports ```


##  Dependencies (Imports)
When one module needs another module, it can import that module as a dependency. For example, whenever you want to create a React component, you need to import the react module. If you want to use a library like lodash, you’d need import the lodash module.

##  Code
After you’ve established what dependencies your module needs, the next part is the actual code of the module.

##  Exports
Exports are the “interface” to the module. Whatever you export from a module will be available to whoever imports that module.