let date =  new Date().getFullYear()

function newPerson(name, age, sex, email) {
    person = {}
    person.name = name
    person.age = age
    person.sex = sex
    person.email = email
    return person
}

function clear(name='entrada') {
    var entradas = document.querySelectorAll("input[name='"+name+"']");
    [].map.call(entradas, entrada => entrada.value = '');
  }

function sexDefine() {
    let rsex = document.getElementsByName('radsex')
    if (rsex[0].checked) {
        return 'Male'
    } else if (rsex[1].checked) {
        return 'Female'
    }
}

const button = document.getElementById('button')

function showData() {
    let display = document.getElementById('display')
    display.innerHTML = `Name: ${person.name}<br>`
    display.innerHTML += `Age: ${person.age}<br>`
    display.innerHTML += `Genere: ${person.sex}<br>`
    display.innerHTML += `Email: ${person.email}<br>`
}

function capture() {
    let name = document.getElementById('name').value
    let age = Number(document.getElementById('age').value)
    let email = document.getElementById('email').value
    if (name === ' ' || name.length <= 0) {window.alert('Invalid name!');return}
    if (age > 200 || age <= 0) {window.alert('Invalid Age!');return}
    if (email === ' ' || email.length <= 0) {window.alert('Invalid email!');return}
    else{newPerson(name, age, sexDefine(), email);clear();showData()
    }
}