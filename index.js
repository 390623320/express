var express = require("express");
var app = express();
var logger = require('morgan');
var router = require('./router/router');
var TimeStamepLogger = function(req,res,next){
    console.log("Time:" + new Date().toLocaleString())
    next();
}
app.listen("8081",()=>{
    console.log("NODE服务器启动:localhost:8080")
});
app.use(TimeStamepLogger)
app.use(router);
app.use(logger('dev'));
app.use('/static',express.static(__dirname + '/src'));
