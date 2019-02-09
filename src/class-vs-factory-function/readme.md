# Class VS Factory Function

## ECMAScript 2015 (aka ES6) comes with the class syntax, so now we have two competing patterns for creating objects. In order to compare them, I’ll create the same object definition (TodoModel) as a class, and then as a factory function.


Encapsulation
The first thing we notice is that all members, fields, and methods of a class object are public.

```var todoModel = new TodoModel(); ```
```console.log(todoModel.todos);     //[] ```
```console.log(todoModel.lastChange) //null ```
```todoModel.addToPrivateList();     //addToPrivateList ```

The lack of encapsulation may create security problems. Take the example of a global object that can be modified directly from the Developer Console.

When using factory function, only the methods we expose are public, everything else is encapsulated.

```var todoModel = TodoModel();```
```console.log(todoModel.todos);     //undefined```
```console.log(todoModel.lastChange) //undefined ```
```todoModel.addToPrivateList();     //taskModel.addToPrivateList ```
                                   
                                   
                                   this
this losing context problems are still there when using class. For example, this is losing context in nested functions. It is not only annoying during coding, but it’s also a constant source of bugs.

```

class TodoModel {
    constructor(){
        this.todos = [];
    }
    
    reload(){ 
        setTimeout(function log() { 
           console.log(this.todos);    //undefined
        }, 0);
    }
}
todoModel.reload();                   //undefined

```
