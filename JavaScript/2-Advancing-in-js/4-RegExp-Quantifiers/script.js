console.log('teeeeeeeestiing'.match(/te*sti*ng/)[0]) // Matches the preceding item "x" 0 or more times
console.log('pPyytthhoonN'.match(/p+y+t+h+o+n+/i)[0]) // Matches the preceding item "x" 1 or more times

console.log('angel'.match(/f?e?el?/i)[0]) // Matches the preceding item "x" 0 or 1 time

console.log('0XxXxXxX0'.match(/x{7}/i)[0]) // x{n} n = number of x's in string
console.log('Github, Githuub, Githuuub'.match(/Githu{2,}b/i)[0]) // x{n,} == minimum ocorrences of x
console.log('Fourrrr, fiveeeee'.match(/(four{5,9})|(five{4,5})/i)[0]) //x{mx,mn} == max, minimum

// Example: find all word that ends with our

let text = 'He asked his neighbour a favour.'
const regex = /\w+o+u+r+\b/gi

console.table(text.match(regex))