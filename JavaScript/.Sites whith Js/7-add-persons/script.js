const button = document.querySelector('#button')
const display = document.querySelector('#display')

button.addEventListener('click', istancier)

class Person {
    constructor(name, age) {
        this.name = name
        this.age =  age
    }
    bio() {
        return `${this.name} has ${this.age} years old`
    }
    this() {
        return console.log(this)
    }
}
function istancier() {
    const name = document.getElementById('name').value
    const age = Number(document.getElementById('age').value)
    const person = new Person(name, age)
    display.innerHTML += person.bio()+'<br>'
    person.this()
}

// Only instace