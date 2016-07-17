function route(handle, pathname) {
  console.log('about to route a request for ' + pathname);
  if(typeof handle[pathname] === 'function') {
    return handle[pathname]();
  } else {
    console.log('No request found for ' + pathname);
    return '404 Not Found';
  }
}

exports.route = route;
