//import
const express = require('express')
//const members = require('./Members')

//initialize express
const app = express()


const members = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      status: 'active'
    },
    {
      id: 2,
      name: 'Bob Williams',
      email: 'bob@gmail.com',
      status: 'inactive'
    },
    {
      id: 3,
      name: 'Shannon Jackson',
      email: 'shannon@gmail.com',
      status: 'active'
    }
  ];
  
//create middleware
const logger =(req,res,next)=>{
    console.log("hello");
   // console.log(`${req.protocol}://${req.get('host')},${req.originalUrl}`);
    next();
}

//initialize middleware
app.use(logger);


app.get('/api/members',function(req,res){
    res.json(members)

});


//listen
app.listen(5000);