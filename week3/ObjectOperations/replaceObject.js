var str = 'x-x_';
console.log(" str ");

var retArr = [];
console.log(" array ", retArr);

str.replace(/(x_*)|(-)/g, function (match, para, para2) {
    if (para) {
        retArr.push({ on: true, length: para.length });
    }
    if (para2) {
        retArr.push({ on: false, length: 1 });
    }
});

console.log(retArr);
var re = /apples/gi;
var str = 'Apples are round, and apples are juicy.';
var newstr = str.replace(re, 'oranges');
console.log(newstr);  //



console.log(retArr);
var re = /apples/gi;
var str = 'oranges are round, and apples are juicy.';
var newstr = str.replace('oranges', 'apples');
console.log(newstr, " tripple ");  //