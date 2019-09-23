var user = {
    firstname: 'Rahul',
    lastname: 'Mane',
    getUser: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        console.log(" called get user");

        return fullname;
    }
};

var Curricular = function (sal, position) {
    console.log("userBook called");

    return this.getUser() + 's Sallary is ' + sal + ' and ' + position;
};

//call and apply method are used for same purpose 
//call() expects all parameters to be passed in individually
let dev = Curricular.call(user, 10000, 'Devops'); //Rahul Manes Sallary is 10000 and Devops

console.log(dev);

//apply method uses array of arguments
// apply() expects an array of all of our parameters
var data = Curricular.apply(user, [20000, 'Devloper']); // Rahul Manes Sallary is 20000 and Devloper
console.log(data);
