const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'mango', quantity: 5 },
    { name: 'jackfruit', quantity: 2 },
    { name: 'pinapple', quantity: 0 },
    { name: 'papai', quantity: 5 },
    { name: 'apple', quantity: 2 },
    { name: 'banana', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

isCherries=(fruit)=> {


    return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries));
  // { name: 'cherries', quantity: 5 }