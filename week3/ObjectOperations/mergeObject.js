const object1 = {
    name: 'Flavio'
}

const object2 = {
    age: 35
}

const object3 = { ...object1, ...object2 }
console.log(object1)
console.log(object2);

console.log(object3);
