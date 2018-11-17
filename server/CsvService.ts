export class CsvService {
    fileStream = require("fs");
    csvParse = require("csv-parse");
    paths = [];

    recordsPerYear = [];

    constructor() {
        for (var i = 2006; i < 2018; i++) {
            this.paths.push("../../assets/datasources/ETValues-" + i + ".csv");
        }
    };

    public loadData() {

        for (var fileCounter = 0; fileCounter < this.paths.length; fileCounter++) {
            let path = this.paths[fileCounter];
            this.readFromFile(path);
        }

    }

    private readFromFile(filePath) {
        this.fileStream.createReadStream(filePath)
            .pipe(this.csvParse())
            .on('data', (data) => {
                console.log(data);
                //csvData = data;
            })
            .on('end', () => {
                //console.log(csvData);
                // [
                //   { NAME: 'Daffy Duck', AGE: 24 },
                //   { NAME: 'Bugs Bunny', AGE: 22 }
                // ]
            });
    }

}