class Person {
    constructor (name, email, phone, password){
        this.name = name
        this.email = email
        this.phone = phone
        this.password = password
    }
    login() {
        window.alert('You logged in system sucessfuly! thank you to test this login page. One object has created with your data, check the console to view it')
        console.log(this)
    }
}

const button = document.querySelector('#button')
const display = document.getElementById('display')

button.addEventListener('click', get)

function get() {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('number').value
    const passw = document.getElementById('password').value
    RegExp(name, email, phone, passw)
}

function RegExp(name, email, phone, passw) {
    if (/\d/.test(name) === true ) {
        window.alert('Invalid user name, remove the numeric characters.');}
    else if (name.length > 20) {
        window.alert('Your name is too big!, the max of characters is 20')}
    else if (/@/.test(email) === false) {
        window.alert('Error: (@) not found in <email>')}
    else if (/\w@\w/.test(email) === false) {
        window.alert('Error: Invalid email, unspect sytax: exemple@example.com')}
    else if (/\./.test(email) === false) {
        window.alert('Error: (.) not found in <email>')}
    else if (/\s/.test(email) === true) {
        window.alert('Error: the <email> cannot have backspaces')}
    else if (/\d\d-\d\d\d\d-\d\d\d\d/.test(phone) === false) {
        window.alert('Error: cannot read <phone>, the expect syntax is ##-####-####')}
    // else if (/\w/.test(phone) === true) {
    //     window.alert('Error: the <phone> cannot have letters');console.log(phone.match(/\w/)[0])}
    else if (/\s/.test(phone) == true) {
        window.alert('Error: the <phone> cannot have backspaces')}
    else if (passw.length < 6) {
        window.alert('Error: the <password> need have 6 characters (minimum)')}
    else {
        const person = new Person(name, email, phone, passw)
        person.login()
    }
}

