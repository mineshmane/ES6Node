
var person = {
    firstname: 'Minesh',
    lastname: 'Mane',
    getPersonName: function () {//this function is called by binding function 
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var personName = function (snack, hobby) {
    console.log(this.getPersonName() + ' I choose you!');
    console.log(this.getPersonName() + ' loves ' + snack + ' and ' + hobby);
};

var logPerson = personName.bind(person); // creates new object and binds person. 'this' of person === person now

logPerson('Vadasambar', 'Music'); // minesh mane  loves wadadsambar and Music