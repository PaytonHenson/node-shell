process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {

  var cmd = data.toString().trim();

  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
  }

  else if (cmd === 'date') {
    process.stdout.write(new Date().toString());
  }

  else if (cmd === 'ls') {
    process.stdout.write('Working!');
  }

  process.stdout.write('\nprompt > ');
});


