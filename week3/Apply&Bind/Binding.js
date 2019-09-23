function boilWater() { };
let generalMeal = "pasta";


let fancyDinner = {
    useOven: function () { }
}

let dessert = {
    bakeCake: function (duration, type, name) {

        console.log(name, " your cake  ", type, " will be ready in ", duration);

    }
}

let cookout = {
    drink: "soda",
    grill: function (duration, meat, name) {
        console.log("Thanks " + name + "! Your " + meat + "will be ready in " + duration + "minutes. with" + this.drink);
    }

}

// cookout.grill("steak");
// "I am going to fire up the grill to cook steak with soda to drink!"

// cookout.grill.call(fancyDinner, "steak");
// "I am going to fire up the grill to cook steak with wine to drink!"


let cookBurger = cookout.grill.bind(cookout, 15, "burger");
console.log(" call method calling ");

// let callBurger = cookout.grill.call(cookout, 15, "burger")

// callBurger();
let cookChicken = cookout.grill.bind(cookout, 20, "chicken");
let cookSteak = cookout.grill.bind(cookout, 10, "steak");

let dessertCake = dessert.bakeCake.bind(dessert, 45, "Stroberry");
dessertCake("Priyanka");

cookBurger("Minesh")
// Thanks Jack! Your burger will be ready in 15 minutes. 

cookSteak("mahesh")
// Thanks Jill! Your steak will be ready in 10 minutes. 

cookChicken("Ganapat")
// Thanks David! Your chicken will be ready in 20 minutes.



let coockout = {
    mealOrders: ["chicken", "burger", "burger", "steak", "chicken"],
    grill: function() {
      let args = Array.prototype.slice.call (arguments,2);
      console.log(args);
      
      console.log("apply I am going to cook :" + this.mealOrders);
    } 
  }


coockout.grill.apply(coockout, this.mealOrders);
// "I am going to cook: chicken, burger, burger, steak, chicken