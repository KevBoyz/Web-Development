//Integeer, Boolean, Float

//toString()
//valueOf()



// Numeric Methods

console.log('-- Numeric Methods --')
let n = 10
let n1 = 1.93273523

console.log(n.toString() + '?') // Converts value to strings
console.log(n.valueOf())        // Return numbers value
console.log(n.toExponential())  // Forces to dispay in exponential notation

console.log(n1.toFixed(2))      // Formats float value
console.log(n1.toPrecision(5))  // Defines how many total digits 

//String Methods

console.log('-- String Methods --')

let text = 'String exemple'

console.log(text.charAt(5))     // Return the character of specified position
console.log(text.concat('.'))   // Concat string with parameter
console.log(text.indexOf('exe'))// Return the position of substring (-1 = not found)
console.log(text.length)        // Return the length of string
console.log(text.replace('exemple', 'test')) // Replace substring

console.log(text.toLowerCase()) // Lowerd string