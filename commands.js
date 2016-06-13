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
    // process.stdout.write('\nprompt > ');
  });
}

function echo(){
  var args = [].slice.call(arguments).slice(1);
  process.stdout.write(args.join(' '));
  process.stdout.write('\nprompt > ');
}

function cat(){
  var args = arguments.length;
  for (var i = 1; i < arguments.length; i++){
  fs.readFile(arguments[i], function(err, data){
    if (err) throw err;
    process.stdout.write(data.toString());
    // if (i == args - 1){
    //   process.stdout.write('\nprompt > ');
    // }
  });
  }
  setTimeout(function(){ process.stdout.write('\nprompt > ')}, 1000);
}

function head(){
  fs.readFile(arguments[1], function(err, data){
    if (err) throw err;

    var heads = data.toString().split('\n');
    for (var i = 0; i < 10; i++){
      process.stdout.write(heads[i] + '\n');
    }
    // process.stdout.write('\nprompt > ');
  })
}

function tail(){
  fs.readFile(arguments[1], function(err, data){
    if (err) throw err;

    var heads = data.toString().split('\n');
    var arr = [];
    for (var i = heads.length - 1; i > heads.length - 11; i--){
      arr.unshift(heads[i]);
    }
    process.stdout.write(arr.join('\n'));
    process.stdout.write('\nprompt > ');
  })
}

function sort(){
  fs.readFile(arguments[1], function(err, data){
    if (err) throw err;
    process.stdout.write(data.toString().split('\n').sort().join('\n'));
    process.stdout.write('\nprompt > ');
  });
}

module.exports = {
  sort: sort,
  tail: tail,
  head: head,
  cat: cat,
  echo: echo,
  pwd: pwd,
  date: date,
  ls: ls
};
