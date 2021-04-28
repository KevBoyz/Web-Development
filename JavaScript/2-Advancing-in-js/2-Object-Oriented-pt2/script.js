// Object() Constructor

let person = new Object() //Stores empity object in variable, method used to generic objects

//Adding properties and methods

person.name = 'Kevin'
person.greeting = function() {console.log(`Hello, I\'m Kevin... Again`)}

//Testing Object

person.greeting()

//Using Create() method

let person2 = Object.create(person)  

person2.name = 'Invasor'
person2.greeting = function() {console.log(`Now your code is my!`)}

person2.greeting()