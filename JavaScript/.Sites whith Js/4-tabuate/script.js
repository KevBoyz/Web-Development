let button = document.getElementById('button')
let select = document.getElementById('display')

button.addEventListener('click', calculate)

function calculate() {
    let ntxt = document.getElementById('n')
    if (ntxt.value.length == 0) {window.alert('Type a number please');return} 
    else {let n = Number(ntxt.value)}

    let  c = 1
    while (c <= 10) {
        let option = document.createElement('option')
        option.text = `${n.value} x ${c} = ${n.value*c}`
        select.appendChild(option)
        c++
    }
}