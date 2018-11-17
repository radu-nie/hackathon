const fileStream = require("fs");
const csvParse = require("csv-parse");

export class CsvService {
    paths = [];

    recordsPerYear = [];

    constructor() {
        for (var i = 2006; i < 2018; i++) {
            this.paths.push("../../assets/datasources/ETValues-" + i + ".csv");
        }
    };

    async LoadDataAsync() {

        for (var fileCounter = 0; fileCounter < this.paths.length; fileCounter++) {
            let path = this.paths[fileCounter];
            let fileRecords = [];
            let reading = await this.ReadFromFileAsync(path);
            return reading;
        }
    }

    private ReadFromFileAsync(filePath) {

        return new Promise(function (resolve, reject) {
            const fileRecords = [];

            fileStream.createReadStream(filePath)
                .pipe(csvParse({ delimiter: ';' }))
                .on('data', fileRecords.push)
                .on('end', () => {
                    resolve(fileRecords);
                });
        });
    }
}