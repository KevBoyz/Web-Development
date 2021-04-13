// Simple object exemple

const person = {
    name: 'Undefined',
    age: 14,
    bio: function() {
        console.log(`Hello my name is ${this.name}, I have ${this.age} years`)
    },                              //'this' == object name (person),
    farewell: function() { console.log("Bye everybody!")}
}
person.name = 'Kevin'
person.bio()
person.farewell()

//the code above look like a sniper q.b

// Instert value in object ;

person.nationality = 'brazilian'
console.log(`I'm ${person.nationality}`)



