yaml = require('js-yaml');
fs = require('fs');


convertYamlToJson = () => {
    try {
        //read file 
        let file = fs.readFileSync('./data.yml', 'utf8')
        console.log(" read file ", file);

        // converting into json Object 
        let jsonObject = yaml.safeLoad(file);
        console.log(jsonObject);

        let stringified = JSON.stringify(jsonObject)

        console.log(" data in stringyfied===========> \n", stringified);

        fs.writeFile('./data.json', stringified, function (err) {
            if (err) {
                return console.log(err);
            }

        });



    } catch (e) {
        console.log(e);
    }

};

convertYamlToJson();