const fs = require('fs');
//reading file by sync method 
let filePath = "/home/admin1/gitclone/CoreNodejs/firstWeek/jsonfiles/data.json"

readFileAndWrite = () => {
    try {


        let file = fs.readFileSync(filePath, "utf8");
        let len = file.length
        console.log(" data in byte file ", len);
        let kb = len / 1024;
        console.log("in kb data  ", kb);
        let mb = kb / 1024;
        console.log(" mb in data", mb);
        if (mb < 100) {


            let ob2 = JSON.parse(file);

            console.log(" data in object form =======>\n", ob2);
            console.log(" data in object form person =======>\n", ob2.person);
            let rice = ob2.person
            console.log(" printing each object from json file using for loop");
            ob2.person.push({
                "firstName": "Chandrayn",
                "lastName": "Vikram",
                "address": { "city": "shriharikota", "zip": 345678 },
                "mobile": "545454545454"
            });
            console.log(" data in object form person =======>\n", ob2.person);
            for (let i in rice) {
                // console.log(rice[i]);
                console.log("firstname :" + rice[i].firstName + "kg");
                console.log("lastname:" + rice[i].lastName);
                console.log("addresss :" + rice[i].address.city);
                console.log("addresss :" + rice[i].address.zip);
                console.log("mobile number:" + rice[i].mobile);


            }

            //JSON.stringify to convert objects into JSON.
            let stringform = JSON.stringify(ob2)

            console.log(" json format method :====> \n", stringform);
            writeFile(filePath, stringform);

        } else {
            console.log('file size is greater than 100 mb');

        }
    }

    //JSON.parse to convert JSON  into an object.
    catch (error) {

    }
}

writeFile = (filePath, data) => {
    console.log(" calling write method");

    fs.writeFile(filePath, data, function (err) {
        if (err) {
            return console.log(err);
        }

    });
},


    readFileAndWrite();







