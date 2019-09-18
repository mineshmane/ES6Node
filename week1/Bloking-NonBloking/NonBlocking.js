const fs = require('fs');
fs.readFile('/home/admin1/gitclone/CoreNodejs/firstWeek/Bloking-NonBloking/dataNon.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
    console.log(data.toString()); 
});

moreWork = () => {
    console.log(" more work ");

}
moreWork(); // will run before console.log