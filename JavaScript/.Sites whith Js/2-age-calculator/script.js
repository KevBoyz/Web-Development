let display = document.getElementById('display')

function calculate() {
    let fullYear = new Date().getFullYear()
    let year = Number(document.getElementById('year').value)
    let calc = fullYear - year 
    display.innerText = `Você tem ${calc} anos`
}