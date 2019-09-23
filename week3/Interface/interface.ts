interface IPerson {
   firstName: string,
   lastName: string,
   profile: string,
   experience: any,
   getInfo: () => string
}

var customer: IPerson = {
   firstName: "Tom",
   lastName: "Hanks",
   profile: "devops",
   experience: 5,
   getInfo: (): string => { return "Hi there" }
}

console.log("Customer Object ")
console.log(customer.firstName)
console.log(customer.lastName)
console.log(customer.getInfo())

var employee: IPerson = {

   firstName: "Jim",
   lastName: "Blakes",
   profile: "tester",
   experience: 7,
   getInfo: (): string => {
      return "Hello!!!" + employee
   }
}

console.log("Employee  Object ")
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.experience);
console.log(employee.profile);
console.log(employee.getInfo());



