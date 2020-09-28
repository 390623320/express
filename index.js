var express = require("express");
var app = express();
var logger = require('morgan');
var router = require('./router/router');
var bodyParser = require('body-parser')
var TimeStamepLogger = function(req,res,next){
    console.log("Time:" + new Date().toLocaleString())
    next();
}
app.listen("8081",()=>{
    console.log("NODE服务器启动:localhost:8080")
});
app.use(bodyParser.urlencoded({extended:false})); //解析Post-body
app.use(bodyParser.json());//将body转换为JSON格式
app.use('/static',express.static(__dirname + '/src'));
app.use(router);
app.use(TimeStamepLogger)
app.use(logger('dev'));


