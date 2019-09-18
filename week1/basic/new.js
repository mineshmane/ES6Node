class someClass {
    constructor() {
        this.name = "Name"
    }

    testfunction = () => {
        return function () { return this }

    }

    testArrow = () => {
        return () => this.name;
    }
}

var obj = new someClass();

console.log(obj.name)
console.log(obj.testRegular()());
console.log(obj.testArrow()());