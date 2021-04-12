const text = 'You\'ve known this?' // (') in string with scape (\)
console.log(text)

// Methods

console.log(text.length)  //length of string
console.log(text[text.length - 1]) //last character of string

console.log(text.indexOf('known')) //substring position; 2
console.log(text.indexOf('lol')) //index not found; -1

//Exemple

if (text.indexOf('this') === -1) {
    console.log(`The word (this) is in position ${text.indexOf('this')}`)
} else {
    console.log('the word was not found')
}

//Chaging case

console.log(`${text.toLowerCase()}`) //Lower the string case
console.log(`${text.toUpperCase()}`) //Upper the string case

console.log(text.replace('You\'ve', 'You')) //Replace ('You\'ve') by 'You'

