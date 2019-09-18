const months = ['January', 'February', 'March', 'April', ' May']

// With splice
months.splice(1, 2) // remove three elements starting at index 1 elemts 2 
console.log(months) // ['January', 'May']

// Without splice
const monthsSliced = [...months.slice(0), ...months.slice(4)]//it will return 4th postion elements ,and 0th postion 1elemt

console.log(monthsSliced) // ['January', 'May']