var commands = require('./commands');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {

  var cmd = data.toString().trim();
  var args = cmd.split(' ');

  commands[args[0]].apply(null, args);

  setTimeout(function(){ process.stdout.write('\nprompt > ')}, 1000);


});


