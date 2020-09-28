var express = require("express");
var router = express.Router();
router.get('/',(req,res)=>{
    res.send("ni");
});
router.get('/form',(req,res)=>{  //GET:query
    console.log(req.query)
    res.send("ni");
});
router.post('/form',(req,res)=>{ //POST:body
    console.log(req.body)
    res.send("ni");
});

module.exports = router;