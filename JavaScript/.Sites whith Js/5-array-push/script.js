 let nlist = document.getElementById('nlist')
let button = document.getElementById('button')
let button2 = document.getElementById('button2')
let n = Number(document.getElementById('n').value)
let result = document.getElementById('result')
let s = 0
let numbers = []

button.addEventListener('click', validate)
button2.addEventListener('click', analize)

function validate() {
    n = Number(document.getElementById('n').value)
    if (numbers.length == 0) {push(n);return}
    else if (n >= 1 && 100 > n) { 
        if (numbers.indexOf(n) === -1) {
            push(n)
        } else {
            window.alert('The valid is invalid or already exists in array')
        }
    } else {
        window.alert('The value is invalid or already exists in array ')
    }
    result.innerHTML = ''
}

function push(n) {
    numbers.push(n)
    let opt = document.createElement('option')
    opt.text =`${n} has inserted`
    nlist.appendChild(opt)
    n.value = ''
}

function bigger() {
    let bg = 0
    for (let c in numbers) {
        if (c == 0) {bg = numbers[c];c++}
        else {
            if (numbers[c] > bg) {
                bg = numbers[c]
            }
        }
    }
    return bg
}

function small() {
    numbers.sort
    return numbers[0]
}

function calculate(med=false) {
    c = 0
    s = 0
    for (c in numbers) {
        s += numbers[c]
    }
    return s
}
    

function analize() {
    if (numbers.length == 0) {window.alert('The array is empty');return}
    else {
        result.innerHTML = ''
        result.innerHTML = `The array has ${numbers.length} values<br>`
        result.innerHTML += `The biggest value is ${bigger()}<br>`
        result.innerHTML += `And the smaller is ${small()}<br>`
        result.innerHTML += `The sun of all values is ${calculate()}<br>`
        result.innerHTML += `And the medium of then is ${calculate()/numbers.length}<br>`

    }
}