// Task1: initiate app and run server at 3000

const express=require('express');
var app=express();

const morgan=require('morgan');  
app.use(morgan('dev'));

require('dotenv').config();  
const PORT=process.env.PORT 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));


// Task2: create mongoDB connection 
require('./db/mongodb')

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below

const employeerouter=require('./routes/employee');
app.use('/api/employeelist',employeerouter)




//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});


app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})

