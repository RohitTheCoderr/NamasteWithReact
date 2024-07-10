const mongoose = require('mongoose')
const express=require("express")
const app=express();
const uri ="mongodb://127.0.0.1:27017/";
mongoose.connect(uri)
const db=mongoose.connection

db.on('open',(err)=>
{
    if(err){
    console.log('error goted');
    }
    else{
        console.log(' connection successfully')
    }
})
app.listen(6453,()=>
{
    console.log("port number is running ....")
})




// const hbs =require('hbs')

// app.set('view engine', 'hbs')

// app.get('/' ,function(req, res){
//     res.render('./hbsFolder/home')
// })
// app.listen(3002)

