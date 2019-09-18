// interface Component {
//     w: number;
//     h: number;
//     enableEvents(enable: boolean): void;
// }

// interface Button extends Component {
//     label: string;
// }

// //implementing extended interface
// class RadioButton implements Button {
//     h: number;
//     label: string;
//     w: number;
//     private enable: boolean;

//     constructor(h: number, w: number, label: string) {
//         this.h = h;
//         this.w = w;
//         this.label = label;
//     }

//     enableEvents(enable: boolean): void {
//         this.enable = enable;
//     }
// }

// let radioButton: Button = new RadioButton(100, 20, "test");
// radioButton.enableEvents(true)
// console.log(radioButton);


interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);