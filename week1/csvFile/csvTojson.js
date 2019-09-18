const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");

try {

    CSVToJSON().fromFile("./source.csv").then(source => {
        source.push({
            "number": "34890",
            "title": "Fortnite",
            "hardware": "Nintendo Switch",
            "price": "00.00"
        });
        console.log(" csv to json ===============>\n ", source);
        let data = JSON.stringify(source)
        console.log(" object to json data ", data);
        FileSystem.writeFileSync("./destination.json", data);

        let csv = JSONToCSV(source, { fields: ["number", "title", "hardware", "price"] });
        console.log("json to  csv file===>\n ", csv);

        FileSystem.writeFileSync("./destination.csv", csv);
    });
    // writeFile(filePath, data) {

    //     FileSystem.writeFile(filePath, data, function (err) {
    //       if (err) {
    //         return console.log(err);
    //       }

    //     });
    //   },


} catch (error) {

}
