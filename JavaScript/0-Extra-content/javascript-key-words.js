// Variables in javascript

// To read to coments and code you need to know about the scope in javascript.

 
// var = 'this value don't repect scope, any variable declareted with var will be global scope'
// let = 'exists just in local scope'
// const = 'look like let, but the value can't be changed'

// the 'this' key-word references a object. The key-word can indetify the object in context of execution when a method is invocated

// the 'use-strict' makes your code more rigdh, not toreling error. It is very good because with this you can evit bugs in future

// Javascript use hoisting sistem that make the functions and variables will daclareted first in your code. In the exmple I call the function before declarete her on code

// Exemple

const kevin =  new Person('Kevin', 14)
function Person(name, age) {
    'use strict';
    this.name = name
    this.age = age
    this.greeting = function() {
        console.log(`Hello, I'm ${this.name}, I have ${this.age}`)
    }
}
kevin.greeting()