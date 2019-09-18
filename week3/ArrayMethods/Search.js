search = (key, inputArray) => {
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].name === key) {
            return inputArray[i];
        }
    }
}

let array = [
    { name: "Krunal", value: "Engineer", other: "Author" },
    { name: "Ankit", value: "MCA", other: "Author" },
    { name: "minesh", value: "B-Tek", other: "Author" },
    { name: "Ankit", value: "MCA", other: "Author" },

    { name: "Kunal", value: "Engineer", other: "Author" },
    { name: "Aniket", value: "MCA", other: "Author" }
];

let resultObject = search("Kunal", array);
console.log(resultObject);


/* using find method getting finded values 
    

*/

const fruits = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const getFruit = fruits.find(fruit => {
    return fruit.name === 'apples'
});

console.log("  furits ", getFruit);