// 2 Ways to Merge Arrays 

const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

console.log(cars); // ['🚗', '🚙'];
console.log(trucks); // ['🚚', '🚛'];
// Method 1: Concat 
const combined1 = [].concat(cars, trucks);

// Method 2: Spread
const combined2 = [...cars, ...trucks];

// Result
// [ '🚗', '🚙', '🚚', '🚛' ]
console.log("concat method ", combined1);
console.log("spread method ", combined2);
// const cars = ['🚗', '🚙'];
// const trucks = ['🚚', '🚛'];

const combined = cars.concat(trucks);
// [ '🚗', '🚙', '🚚', '🚛' ]

console.log("Merge in one rray without genrating another array", combined);
