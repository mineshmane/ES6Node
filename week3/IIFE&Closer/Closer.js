function makeFunc() {
    var name = 5;
    function displayName() {
        console.log(name);
        return name + 95
    }
    return displayName;
}

var myFunc = makeFunc();
// myFunc();
console.log(" return is getting ", myFunc());
