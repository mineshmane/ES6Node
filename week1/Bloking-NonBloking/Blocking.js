const fs = require('fs');
reading = () => {
    const data = fs.readFileSync('/home/admin1/gitclone/CoreNodejs/week1/Bloking-NonBloking/data.txt'); // blocks here until file is read
    console.log(data);
    console.log(data.toString());
}
moreWork = () => {
    console.log(" more work ");
    // i = "minesh"
    reading();
    console.log(" prtinted ", i);

}

moreWork(); // will run after console.log