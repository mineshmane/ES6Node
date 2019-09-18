const xmlJson = require('xml2json');
const fileSyream = require('fs')


ConvertxmlToJson = () => {
    try {

        let xml = fileSyream.readFileSync('./data.xml', 'utf8');
        // console.log(xml);

        // xml to json
        let jsonFormat = xmlJson.toJson(xml);
        console.log("to json -> %s", jsonFormat);

        // let jsonObject = JSON.stringify(jsonFormat);
        // console.log(" json object ", jsonObject);


        // json to xml
         xmlFormat = xmlJson.toXml(jsonFormat);
        console.log("back to xml -> %s", xmlFormat)
        // this.JsonToxml(jsonFormat);

        fileSyream.writeFileSync('./data.json', jsonFormat);


        // fileSyream.writeFile('./data.json', jsonFormat, function (err) {
        //     if (err) {
        //         return console.log(err);
        //     }

        // });

    } catch (error) {

    }

}

JsonToxml = (jsonFormat) => {
    try {
console.log(" next ");

        // json to xml
        xmlFromat = xmlJson.toXml(jsonFormat);
        console.log("back to xml -> %s", xmlFormat)

    } catch (error) {

    }

};



ConvertxmlToJson();

