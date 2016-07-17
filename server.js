var http = require('http');
var url = require('url');

function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('request for ' + pathname + ' received');

    route(pathname);

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('hello world');
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log('server has started');
}

exports.start = start;


// http.createServer(function(request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.write('hello world');
//   response.end();
// }).listen(8888);

// var http = require('http');

// var server = createServer();
// server.listen(8888);


// PASS FUNCTIONS AROUND
// function say(word) {
//   console.log(word);
// }
//
// function execute(someFunction, value) {
//   someFunction(value);
// }
//
// execute(say, 'Hello');
