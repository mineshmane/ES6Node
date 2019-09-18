var readline = require('readline-sync');
const os = require('os');
class Person {
    constructor(firstname, lastname, address, mobile, ) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.address = address;
        this.mobile = mobile;
    }
    get getfirstName() {
        return firstname;
    }
    set setfirstName(firstname) {
        this.firstname = firstname;
    }
    walk() {
        console.log(this.firstname + ' is in Brigelbaz.');
    }
    get getlastName() {
        return lastname;
    }
    set setlastName(lastname) {
        this.lastname = lastname;
    }
    get getAddress() {
        return address;
    }
    set setAddress(address) {
        this.address = address;
    }
    get getMobile() {
        return mobile;
    }
    set setMobile(mobile) {
        this.mobile = mobile;
    }
}

class Programmer extends Person {
    constructor(firstname, lastname, address, mobile, programmingLanguage) {
        super(firstname, lastname, address, mobile);
        this.programmingLanguage = programmingLanguage;
    }
    writeCode() {
        console.log(this.firstname + ' is coding in ' + this.programmingLanguage + '.');
        console.log(this.lastname + ' is coding in ' + this.address + '.');
        console.log(this.mobile + ' is coding in .');
    }
}
let Arra = [];
let programObject = new Programmer();
let fname = readline.question('Enter first name ');
let lname = readline.question('enter last name ')
let addr = readline.question('eneter address ')
let mob = readline.question('enter mobile number ')
let lang = readline.question('Enetr programming language ')
//setter methods 
programObject.programmingLanguage = lang
programObject.setfirstName = fname;
programObject.setlastName = lname;
programObject.setAddress = addr;
programObject.setMobile = mob;
programObject.walk();

console.log(" prints data ========== ");
//getter method prining 
console.log(" my Name is ", programObject.firstname, ' ', programObject.lastname,
    ' Im working at ', programObject.address, ' my mobile number ', programObject.mobile
    , ' as devoploper and technology is  ', programObject.programmingLanguage);



// console.log(add);

Arra.push(programObject)
programObject.writeCode();

console.log(" array printing ", Arra);
console.log(__dirname);
console.log(__filename);
os.type()