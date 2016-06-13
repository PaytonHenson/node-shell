var fs = require('fs');

var request = require('request');

function pwd () {
  process.stdout.write(process.cwd());
  process.stdout.write('\nprompt > ');
}

function date () {
  process.stdout.write(new Date().toString());
  process.stdout.write('\nprompt > ');
}

function ls () {

  var done = arguments[arguments.length - 1];

  var output = '';

  fs.readdir('.', function (err, files) {
    if (err) throw err;
    files.forEach(function (file) {
      output += file.toString() + '\n';
    });
    done(output);
  });
}

function echo (){
  var args = [].slice.call(arguments).slice(1);
  process.stdout.write(args.join(' '));
  process.stdout.write('\nprompt > ');
}

function cat (){
  var done = arguments[arguments.length - 1];

  var output = '';

  for (var i = 1; i < arguments.length - 1; i++){
  fs.readFile(arguments[i], function(err, data){
    if (err) throw err;

    output += data.toString();

    done(output);

  });
  }
}

function head(){
  fs.readFile(arguments[1], function(err, data){
    if (err) throw err;

    var heads = data.toString().split('\n');
    for (var i = 0; i < 10; i++){
      process.stdout.write(heads[i] + '\n');
    }
    process.stdout.write('\nprompt > ');
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

function curl () {
  request(arguments[1], function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(body);
    }
  });
}

module.exports = {
  curl: curl,
  sort: sort,
  tail: tail,
  head: head,
  cat: cat,
  echo: echo,
  pwd: pwd,
  date: date,
  ls: ls
};
