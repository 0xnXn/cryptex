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
const found = members.some(member => member.id === parseInt(req.params.id ));
if (found)
{
  res.json(members.filter(member => member.id === parseInt(req.params.id )));

}
else{
    res.status(400).json({msg:`no members found at ${req.params.id}`});

}
});



//listen
app.listen(5000);