// Regular Expressions - Special Characters_pt1 - Character classes



// The big letters do invert process
// ( \x != \X ) 

let text = '~!?;xA1bx;´¨&`-2bCc3 D_-=*/-+^{}}[]()%$ #@dE5eFf4Gg⤏☣☠☺∾∜☳㊮㊑'

console.log('d', text.match(/\d/g).sort()) //| \d == 0-9 (lating numbers)
console.log('D', text.toLowerCase().match(/\D/g).sort())

console.log('w', text.match(/\w/g)) //| w == All simple alphanumeric characters, including sublime (_)
console.log('W', text.match(/\W/g))

console.log('s', text.match(/\s/g)) //| s == White space characters, including space
console.log('S', text.match(/\S/g))

console.log('b', text.match(/\b/g)) // b == backspace ( )

// locating the 'A1bx' 

console.log(text.match(/\w\d\w\w/)[0])