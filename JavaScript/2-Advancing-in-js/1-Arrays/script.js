let numbers = [2, 1, 4, 3, 5]
numbers.push(6)

console.log(numbers.sort())
//console.log(numbers.length) //In js length is one atribute and don't need '()'

// for (let c = 0;c <= numbers.length;c++) {
//     console.log(numbers[c])
// }
let c = 0
for (c in numbers) {
    console.log(numbers[c])
}
console.log(numbers.indexOf(4)) //Position of value in array
console.log(numbers.indexOf(0)) //Value not found