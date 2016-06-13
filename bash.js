var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {

  var cmd = data.toString().trim();

  commands[cmd]();

  // setTimeout(function() {
  //   process.stdout.write('\nprompt > ');
  // }, 0);
});


