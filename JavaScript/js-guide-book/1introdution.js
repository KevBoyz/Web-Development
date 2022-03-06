let x = '250'
console.log(x * 2, typeof(x)) // x = 12a will return NaN

if (x == '500'){
    console.log('what')
} else if (x * 2 == 500){
    console.log('Integer string ;)', x[0])
} else{
    console.log('I really don\' kwnon what happends here')
}
console.log(x.slice(1, 3))
console.log(x.substring(0))

let arr = ['one', 'two', 'three']
console.log(arr[0], arr[1])

for (let x in arr){  // for in loop
    console.log(arr[x])
}

for (let i = 0; i <= 10; i = i + 2){
    console.log(i)
}

const person = {
    name: 'Kevin',
    sex: 'male'
}
console.log(person.name + ', ' + person.sex)