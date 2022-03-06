let display = document.getElementById('display')
let button = document.getElementById('button')
let c = 0

button.addEventListener('click', looping)

function looping() {
    let start = Number(document.getElementById('start').value)
    let end = Number(document.getElementById('end').value)
    let pass = Number(document.getElementById('pass').value)
    
    for (c = start; c <= end;c += pass) {
        display.innerHTML += `${c} \u{1f449}`
    }
    display.innerText += `\u{1F3C1}`
}
