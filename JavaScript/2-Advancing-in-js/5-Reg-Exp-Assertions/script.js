console.log('Any (^):', 'Any'.match(/^a/i)[0]) // (^) matches the first character of input
console.log('Eat ($):', 'Eat'.match(/t$/i)[0]) // ($) matches the last character of input

console.log('E x e m p l e (/b):', 'E x e m p l e'.match(/\be|\bx|\be|\bm|\bp|\bl|\be/i)[0]) // (\b) matches the front character of words
console.log('Moon (/B)', 'Moon (/B): '.match(/\Bon/gi)[0]) // Matches a non-word boundary. This is a position where the previous and next character are of the same type: Either both must be words, or both must be non-words, for example between two letters or between two spaces. The beginning and end of a string are considered non-words. Same as the matched word boundary, the matched non-word boundary is also not included in the match.

// Other assertions

console.log('KevBoyz (?=x):','KevBoyz'.match(/kev(?=boyz)/i)[0]) // Maches "x" only if "x" is followed by "y"
console.log('KevBoyz (?!x):','Kev'.match(/kev(?!boyz)/i)[0]) //  Matches "x" only if "x" is not followed by "y"

console.log('KevBoyz (?<=y)x:','KevBoyz'.match(/(?<=kev)boyz/i)[0]) 