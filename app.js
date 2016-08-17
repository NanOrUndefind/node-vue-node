var express = require('express');
var routerArr =  require('./public/router');
var app = express();
console.log();
// import login from './public/controller/login.js'

express.static('./')


let len = routerArr.length-1;
for (;len >= 0; len--) {
  let b = routerArr[len].split('^');
  let c = b[1].split('=>');
  app[b[0]](c[0],eval(c[1]));
}

var server = app.listen(3333, function() {
    console.log('Listening on port %d');
});
