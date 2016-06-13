var fs = require('fs');

function pwd () {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}

function date () {
  process.stdout.write(new Date().toString());
  process.stdout.write('\nprompt > ');
}

function ls () {
  fs.readdir('.', function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      process.stdout.write(file.toString() + '\n');
    });
    process.stdout.write('\nprompt > ');
  });
}


module.exports = {
  pwd: pwd,
  date: date,
  ls: ls
};





