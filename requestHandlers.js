function start() {
  console.log('request handler \'start\' was called.');
  return 'Hello Start';
}

function upload() {
  console.log('request handler \'upload\' was called.');
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
