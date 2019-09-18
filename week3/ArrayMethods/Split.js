
var string = 'Hello World. How are you doing?';

var splits = string.split(' ', 3);    // split() looks for spaces in a string and returns the first 3 splits that it finds. 

console.log(splits)
// ["Hello", "World.", "How"]
var splits = string.split(' ')

console.log(splits)
// ["Hello", "World.", "How", "are", "you", "doing?"]