const fs = require('fs');

reading = () => {


    return new Promise((resolve, reject) => {

        fs.readFile('/home/admin1/gitclone/CoreNodejs/week1/Bloking-NonBloking/dataNon.txt', (err, data) => {
            console.log("logghgggggg");
            
            if (err) {
                console.log(" errr");

                reject(err);
            } else {

                 resolve(data)
            }
            // console.log(data);
            // console.log(data.toString());
        });
    })
        .then(data => {

            console.log(data.toString());
            return data
            console.log(data.toString());

        })
        .catch(err => {

        })
}


moreWork = async () => {
    let data = await reading();
    console.log(" more work is  ", data.toString());

}
moreWork(); // will run before console.log