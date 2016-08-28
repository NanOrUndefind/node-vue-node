var express = require('express');
//解析路由文件之后的模块
var analysis = require('./analysis/analysis.js');
var app = express();
var engines = require('consolidate');


app.set('views', __dirname + '/public/view');
app.engine('html', engines.swig);
app.set('view engine', 'html');
console.log( __dirname);
app.use(express.static(__dirname));
analysis(app)

var server = app.listen(5555, function() {
    console.log('Listening on port %d');
});
