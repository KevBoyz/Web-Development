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
    else if (/@/.test(email) == false) {
        window.alert('Error: (@) not found in <email>')}
    else if (/\w@\w/.test(email) == false) {
        window.alert('Error: Invalid email, unspect sytax: exemple@example.com')}
    else if (/\./.test(email) == false) {
        window.alert('Error: (.) not found in <email>')}
    else if (/\b/.test(email) == true) {
        window.alert('Error: the <email> cannot have backspaces')}
}
