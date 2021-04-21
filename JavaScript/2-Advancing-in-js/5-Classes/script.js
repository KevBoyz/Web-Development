// The class syntax

'use strict'
class Person {
    constructor(name, age) {
        this.name = name.toUpperCase();
        this.age = age
    }

    static validAge(age) { //Static Methods are used to create ultilitary methods to aplicaton
        if (age >= 18) {
            return true
        } else {
            return false
        }
    }
    

    year() {
        return new Date().getFullYear() - this.age
    }
    greeting() {
        return `Hello, my name is ${this.name}. I have ${this.age} years`
    }
    this(){
        return console.log(this)
    }
}

 let kevin = new Person('kevin', 14)
 console.log(kevin.greeting())

 kevin.name = 'Shevash'
 console.log(kevin.name)
 console.log(kevin.year())
 kevin.this()
console.log(Person.validAge(kevin.age))

// Extending the class

class Admin extends Person {
    ban() {
        return console.log('Banned!')
    }
}

let gustavo = new Admin('Gustavo', 40)
gustavo.ban()
console.log(gustavo.greeting())