//import
const express = require('express')
const members = require('./Members')

//initialize express
const app = express()


  
//create middleware
const logger =(req,res,next)=>{
    console.log("hello");
   // console.log(`${req.protocol}://${req.get('host')},${req.originalUrl}`);
    next();
}

//initialize middleware
app.use(logger);


app.get('/api/members/:id',(req,res)=>{
  res.json(members.filter(member => member.id === parseInt(req.params.id )));

});



//listen
app.listen(5000);