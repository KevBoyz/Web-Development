// Searching set of characters

const set = `xYzKkEViNnXyZ`
let re = /kevin/i // the flag 'i'(insensitve) make re ignore uppers and lowers characters

if (re.test(set) === true) {
    console.log('process done')
} else {console.error('process failed, no word _kevin_ in string')}

console.log()

//the re object

let text = '12345SToP LOSiNG YoUr TiMe12345'
re = /(stop losing |stop |lose )(your time)/i // () makes string divided in grups, | == 'or'
let found = re.exec(text)

// testing (found)

if (found){ // if found != null, null == not found set
    console.log(found)
     //for (let c = 0;c <= 2;c++) {console.log(found[c])}
    console.log(found[0]) // Full set
    console.log(found[1]) // Grup 1
    console.log(found[2]) // Grup 2
    console.log()

    console.log(found.input) //return the input
    console.log(found.index) //return the index of set appears in string
} else {console.error('Value not found')}

// using string methods with regex

console.log(found[0].toLowerCase().replace('time', 'money')) // Replacing words

console.log()

text = 'js js js jS Js #js#'
re = /js/gi // 'g' is the global flag, her search for all ocorrences in string

console.log(text.match(re))

let s = 0 
for (c in text.match(re)) {s += 1} //Sum
console.log(s)