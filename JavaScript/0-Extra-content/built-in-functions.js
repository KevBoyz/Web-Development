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

// Array Methods

console.log('-- Array Methods --')

let arr1 = [1, 2, 3]
let arr2 = ['a', 'b', 'c']
let arr3 = [5, 5]

let arr = arr1.concat(arr2) // Concat arr1 and arr2

console.log(arr)

console.log(arr.every(      // Return true if all elements in array have equal type, else, false
    function verifyElements(elem, ind, obj) {
        return typeof elem == 'number'
    }
))

console.log(arr.filter(     // Make filtration of elements
    function verifyElements(elem, ind, obj) {
        return typeof elem == 'string'
    }
))

let data = ''
arr.forEach(                // Execute the process for element in arry
    function display(elem, ind) {
        data += `arr[${ind}] = ${elem}\n`    
    }
)

console.log(data)

let s = 0
let arraySum = arr3.forEach( // Sum of itens exemple
    function sum(elem, ind) {
        if (arr.length == ind+1) {return s}
        else {s += elem}
    }
)
console.log(s)

console.log(arr.indexOf(2))  // return index of specified element



