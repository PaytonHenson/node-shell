var commands = require('./commands');

var done = function (output) {
  process.stdout.write(output);
  process.stdout.write('prompt > ');
};




process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {

  var cmd = data.toString().trim();
  var args = cmd.split(' ');
  args.push(done);

  commands[args[0]].apply(null, args);


});




