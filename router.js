function route(handle, pathname, response, request) {
  console.log('about to route a request for ' + pathname);
  if(typeof handle[pathname] === 'function') {
    handle[pathname](response, request);
  } else {
    console.log('No request found for ' + pathname);
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('404 not found');
    response.end();
  }
}

exports.route = route;
