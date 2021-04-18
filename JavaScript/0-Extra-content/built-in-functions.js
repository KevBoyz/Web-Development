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
arr.pop() // Del last array element


console.log(arr)


console.log(arr.indexOf(2))  // return index of specified element
console.log(arr3.lastIndexOf(5)) // Resturn index of last element that specified
console.log(arr.join(' - ')) //Convert array to string 

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

let mod = arr.map(   // Read all elements in array and modify then as you want
    function(elem) {
        if (typeof elem == 'number') {return elem * 2}
        else {return elem}
           
    }
)
console.log(mod)

let some = arr.some(  // Read all elements in array, if your condition is true, return true
    function(elem) {
        return (elem == 2) // == 2 exists in array?
    }
)
console.log(some)

console.log(arr.reverse()) // Reverse the array
arr.reverse()
let reduce = arr.reduce(  // Run all elements, do operation and save state
    function (v1, v2, ind, arr) {
        return v1 + v2
    }
)
console.log(reduce)

console.log(arr.shift())  //Remove first element and return then
console.log(arr.unshift(-1)) //Add -1 to ind[0] of array
console.log(arr.slice(2, 4)) // Cut the array (start, end)
console.log(arr.sort())  // Orgnize the array in alphabetical and numerical order