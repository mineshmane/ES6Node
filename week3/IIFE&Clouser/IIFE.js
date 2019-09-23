!function () {
    console.log("Hello from IIFE!");
}();
// Shows the alert "Hello from IIFE!"
(function () {
    console.log("I am not an IIFE yet!");
}());
(function () {
    console.log("I am not an third part IIFE yet!");
})();


// Valid IIFE
(function initGameIIFE() {
    // All your magical code to initalize the game!
}());

// Following two are invalid IIFE examples
!function nonWorkingIIFE() {
    // Now you know why you need those parentheses around me!
    // Without those parentheses, I am a function definition, not an expression.
    // You will get a syntax error!
    console.log(" not incvalid");

}();

!function () {
    // You will get a syntax error here as well!
    console.log(" thirsd");

}();


(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    // var lives;
    var weapons;


    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        var lives = 5;
        weapons = 10;
        console.log(lives);
        console.log(weapons);


    }

    console.log(weapons);
    // console.log(lives);//it will not works 

}());
// console.log(lives);// ti will not works outside  inside variable not zaccssesbble outside
var result = (function () {
    return "From IIFE";
}());
console.log(result); // "From IIFE"

//with parameter calling IIFI
(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 5));