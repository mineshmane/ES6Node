var number = [1, 3, 6, 8, 11];
cards = [];

findnumber = (number) => {
    var lucky = number.filter((numbers) => {
        return numbers > 7;
    });
    console.log(" luckty ", lucky);
}


this.cards = findnumber(number);

// var lucky = numbers.filter(function (number) {
//     return number > 7;
// });
// console.log(" luckty ", lucky);

