var string = 'Hello World. How are you doing?';
 // split() looks for spaces in a string and returns the first 3 splits that it finds. 
var splits = string.split(' ', 3);   

console.log(splits)
// ["Hello", "World.", "How"]
var splits = string.split(' ')

console.log(splits)
// ["Hello", "World.", "How", "are", "you", "doing?"]