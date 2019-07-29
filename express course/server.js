//import
const express = require('express')
//const path = require('path')

//initialize
const app = express()

//route
app.get('/',function(req,res){
    res.send("<h2>HELLO<h2>");
 //   res.sendFile(path.join(__dirname,'public','public.html'));
})

//listen
app.listen(5000);