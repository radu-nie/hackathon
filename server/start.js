// Transpile all code following this line with babel and use 'env' (aka ES6) preset.



import {
  app
} from "./app";
import * as http from "http";

const server = http.createServer(app);

server.listen(2222);
server.on('error', onError);
server.on('listening', onListening);

function onListening() {
  console.log('listening');
}

require('babel-register')({
  presets: ['env']
})

// Import the rest of our application.
module.exports = require('./app.ts')
