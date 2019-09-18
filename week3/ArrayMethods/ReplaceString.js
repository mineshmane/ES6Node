
const string = 'My friend has a 🐑. I want a 🐑 too!';
console.log(string);

var replaceString = string.replace(/🐑/gi, '🦄');
//=> 'My friend has a 🦄. I want a 🦄 too!'
console.log(" replca of string :==>: ", replaceString);

const string2 = 'e851e2fa-4f00-4609-9dd2-9b3794c59619'

console.log("only one and first apearance will replace  :=>\n", string2.replace('-', ''))
// -> e851e2fa4f00-4609-9dd2-9b3794c59619

const string3 = 'e851e2fa-4f00-4609-9dd2-9b3794c59619'

console.log(" all apearamnce of that string replacede ==>\n", string3.replace(/-/g, ''))
// -> e851e2fa4f0046099dd29b3794c5961