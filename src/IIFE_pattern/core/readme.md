OK. We’ve successfully separated our app into its own files. Does that means we’ve successfully implemented modules? No. Absolutely not. Literally all we’ve done is separate where the code lives.

The only way to create a new scope in JavaScript is with a function. All the variables we declared that aren’t in a function are just living on the global object. You can see this by logging the window object in the console. You’ll notice we can access, and worse, change addUsers, users, getUsers, addUserToDOM.

That’s essentially our entire app. We’ve done nothing to separate our code into modules, all we’ve done is separate it by physical location. If you’re new to JavaScript, this may be a surprise to you but it was probably your first intuition for how to implement modules in JavaScript.

So if file separation doesn’t give us modules, what does? Remember the advantages to modules — reusability, composability, leverage, isolation, organization. Is there a native feature of JavaScript we could use to create our own “modules” that would give us the same benefits? What about a regular old function? When you think of the benefits of a function, they align nicely to the benefits of modules. So how would this work? What if instead of having our entire app live in the global namespace, we instead expose a single object, we’ll call it APP.

We can then put all the methods our app needs to run under the APP, which will prevent us from polluting the global namespace. We could then wrap everything else in a function to keep it enclosed from the rest of the app.

## Let look to new way betterCodeWithoutIIFE.js

Now if you look at the window object, instead of it having all the important pieces of our app, it just has APP and our wrapper functions, usersWrapper and domWrapper. More important, none of our important code (like users) can be modified since they’re no longer on the global namespace.

Let’s see if we can take this a step further. Is there a way to get rid of our wrapper functions? Notice that we’re defining and then immediately invoking them. The only reason we gave them a name was so we could immediately invoke them. Is there a way to immediately invoke an anonymous function so we wouldn’t have to give them a name? Turns out there is and it even has a fancy name — Immediately Invoked Function Expression or IIFE for short.


IIFE
Here’s what it looks like.

``` (function () { console.log('Pronounced IF-EE') })() ```


Notice it’s just an anonymous function expression that we’ve wrapped in parens ().
Then, just like any other function, in order to invoke it, we add another pair of parens to the end of it.

## Lets Look the ultimate version of the code: 
``` IIFE.js ```
[IIFE]()