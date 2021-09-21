var http = require('http');
var os = require("os");
var fs = require('fs')

var COUNTER_PATH = process.env.COUNTER_PATH || '/app/storage'

var hostname = os.hostname();
var MSG = process.env.RESPONSE || 'Hello World!';

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  var msg = MSG;

  if (request.url === "/counter") {
    count = 0;
    try {
      count = parseInt(fs.readFileSync(COUNTER_PATH + '/counter.txt', 'utf8'), 10);
    } catch (e) {
      console.error(e);
    }

    count++;

    try {
      fs.writeFileSync(COUNTER_PATH + '/counter.txt', '' + count, 'utf8');
    } catch (e) {
      console.error(e);
    }

    msg = "Counter: " + count;
  }

  response.writeHead(200);
  response.end(msg + '\nPowered by ' + hostname + '\n');
};

var www = http.createServer(handleRequest);
www.listen(8080);
