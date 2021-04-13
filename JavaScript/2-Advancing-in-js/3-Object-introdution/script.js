// Simple object exemple

const person = {
    name: 'Kevin',
    age: 14,
    bio: function() {
        console.log(`Hello my name is ${this.name}, I have ${this.age} years`); // 'this' == object name (person)
    } 
}
person.bio()