import * as express from "express";
import {
  importDataRouter
} from "./importdata.service";

const express = require('express');
const app: express.Application = express();
const cors = require('cors');

var corsOptions = {
  origin: 'localhost:2222',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use("/api/import", importDataRouter);
app.use(cors(corsOptions))

// app.listen(2222, () => {
//   console.log('Server started!');
// });

app.route('/api/cats/:name').get((req, res) => {
  const requestedCatName = req.params['name'];
  res.send({
    name: requestedCatName
  });
});


export { app };