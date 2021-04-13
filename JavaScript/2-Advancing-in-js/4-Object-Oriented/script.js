// how code constructor functions, and how to create object instances

//Object constructor

function createPerson(name) {
    const obj = {}
    obj.name = name
    obj.greeting = function() {console.log(`Hello, my name is ${name}`)}
    return obj
}

//Sample tests
let kevin = createPerson('Kevin')
const person = createPerson('Person') 

kevin.greeting()
person.greeting()

//Simplified Function

function Person(name) {
    this.name = name
    this.greeting = function() {console.log(`Hello, I'm in other function. -${name}`)}
}

//Testing

kevin = new Person('Kevin')
kevin.greeting()

//Complete user object

function masterUser(first, last, age, gender, interests) {
    this.name = {first : first, last: last}
    this.age = age
    this.gender = gender
    this.interests = interests
    this.bio = function() {
        console.log(`${this.name.first} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}.`);
      }
}

// ->
let person1 = masterUser('Bob', 'Smith', 32, 'male', ['music', 'skiing']) //Creating objet istance
person1.bio()