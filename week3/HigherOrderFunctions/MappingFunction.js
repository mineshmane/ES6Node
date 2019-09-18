// var grades = [
//     {name: 'John', grade: 8, sex: 'M'},
//     {name: 'Sarah', grade: 12, sex: 'F'},
//     {name: 'Bob', grade: 16, sex: 'M'},
//     {name: 'Johnny', grade: 2, sex: 'M'},
//     {name: 'Ethan', grade: 4, sex: 'M'},
//     {name: 'Paula', grade: 18, sex: 'F'},
//     {name: 'Donald', grade: 5, sex: 'M'},
//     {name: 'Jennifer', grade: 13, sex: 'F'},
//     {name: 'Courtney', grade: 15, sex: 'F'},
//     {name: 'Jane', grade: 9, sex: 'F'}
// ]

// let isBoy = student => student.sex === 'M'

// let isGirl = student => student.sex === 'F'

// let getBoys = grades => (
//     grades.filter(isBoy)
// )

// let getGirls = grades => (
//     grades.filter(isGirl)
// )

// let average = grades => (
//     grades.reduce((acc, curr) => (
//         acc + curr.grade
//     ), 0) / grades.length
// )

// let maxGrade = grades => (
//     Math.max(...grades.map(student => student.grade))
// )

// let minGrade = grades => (
//     Math.min(...grades.map(student => student.grade))
// )

const Person = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 },
];
const FullAge = [];
for (let i = 0; i < Person.length; i++) {
    if (Person[i].age >= 18) {
        FullAge.push(Person[i]);
    }
}
console.log("without filter function ===", FullAge);


const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 },
];
const fullAge = persons.filter(person => person.age >= 18);
console.log(" with filter function ", fullAge);

const BirthYear = [1975, 1997, 2002, 1995, 1985];
const Ages = BirthYear.map(year => 2018 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log("ages with higher Map function  ", Ages);

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
    let age = 2018 - birthYear[i];
    ages.push(age);
}
// prints [ 43, 21, 16, 23, 33 ]
console.log("function without higherFunction", ages)
// const birthYear = [1975, 1997, 2002, 1995, 1985];
// const ages = birthYear.map(year => 2018 - year);
// // prints [ 43, 21, 16, 23, 33 ]
// console.log(ages);
