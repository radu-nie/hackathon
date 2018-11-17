const fileStream = require("fs");
const csv = require("csv");
const csvParse = require("csv-parse");
var http = require('http');

function IndexDetails(details) {
  this.ftseIndexCode = details.ftseIndexCode;
  this.indexName = details.indexName;
  this.indexValueUSD = details.indexValuesUDS;
  this.indexValueGBP = details.indexValueGBP;
  this.indexValueEuro = details.indexValueEuro;
  this.indexValueYen = details.indexValueYen;
  this.indexValueLocal = details.indexValueLocal;
  this.indexTotalReturnUSD = details.indexTotalReturnUSD;
  this.indexTotalReturnGBP = "";
  this.indexTotalReturnEuro = "";
  this.indexTotalReturnYen = "";
  this.indexTotalReturnLocal = "";
  this.indexMarketCapUSD = "";
  this.indexMarketCapBGP = "";
  this.indexMarketCapEuro = "";
  this.indexMarketCapYen = "";
  this.indexMarketCapLocal = "";
  this.dividendYeild = "";
}

var csvData = [];
var columnsNo = 19;
var csvPath = "../../assets/datasources/ETValues-2006.csv";
fileStream.createReadStream(csvPath)
  .pipe(csvParse())
  .on('data', (data) => {
    console.log(data);
    csvData = data;
  })
  .on('end', () => {
    console.log(csvData);
    // [
    //   { NAME: 'Daffy Duck', AGE: 24 },
    //   { NAME: 'Bugs Bunny', AGE: 22 }
    // ]
  });

var server = http.createServer(function (req, resp) {
  resp.writeHead(200, {
    'content-type': 'application/json'
  });
  resp.end(JSON.stringify(csvData));
});

server.listen(2222);
