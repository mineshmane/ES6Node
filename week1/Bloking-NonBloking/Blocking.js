const fs = require('fs');
const data = fs.readFileSync('/home/admin1/gitclone/CoreNodejs/week1/Bloking-NonBloking/data.txt'); // blocks here until file is read
console.log(data);
console.log(data.toString());
var i = 10;

moreWork = () => {
    console.log(" more work ");
    // i = "minesh"
    console.log(" prtinted ", i);

}

moreWork(); // will run after console.log