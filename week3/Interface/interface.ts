interface IPerson {
   firstName: string,
   lastName: string,
   profile: string,
   sayHi: () => string
}

var customer: IPerson = {
   firstName: "Tom",
   lastName: "Hanks",
   profile: "devops",
   sayHi: (): string => { return "Hi there" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.sayHi())

var employee: IPerson = {
   firstName: "Jim",
   lastName: "Blakes",
   profile: "tester",
   sayHi: (): string => { return "Hello!!!" }
}

console.log("Employee  Object ")
console.log(employee.firstName);
console.log(employee.lastName);
