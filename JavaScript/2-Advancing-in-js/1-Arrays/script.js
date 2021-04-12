let numbers = [2, 1, 4, 3, 5]

console.log(numbers.sort())
//console.log(numbers.length) //In js length is one atribute and don't need '()'

// for (let c = 0;c <= numbers.length;c++) {
//     console.log(numbers[c])
// }
for (let c in numbers) {
    console.log(numbers[c])
}

//Array Methods

console.log(numbers.indexOf(4)) //Position of value in array
console.log(numbers.indexOf(0)) //Value not found; -1

// Convert string to array

const txt = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle'
let array = txt.split(',')
console.log(array[1])

// Convert array to string

array = ['Rocket','Flash','Bella','Slugger']
console.log(array.toString())

numbers.push(6) //Insert 6 (value) to last of array
console.log(numbers)
numbers.pop() //Remove last array item
console.log(numbers)

