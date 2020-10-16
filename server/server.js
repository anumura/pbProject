const { static } = require("express");
const express=require("express");
const cors=require("cors");
const app=express();
const port= 3001;

app.use(cors());
// app.use('/',express.static('public'));

  const budget=require('./budget.json');

app.get('/hello',(req,res)=>{
    res.send("Hello World");
});

 app.get('/budget',(req,res)=>{
     res.json(budget);
 });

app.listen(port,()=>{
console.log(`API is Serving at http://localhost:${port}`)
});