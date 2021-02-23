var express = require('express')
var mongoose = require('mongoose')
var req = require('request')
var app = express()
var employee = require('./route/employeeRoute.js')
var {addEmployee} = require('./controller/employeeController.js')

mongoose.connect('mongodb://localhost:27017/Employee',{useNewUrlParser : true, useUnifiedTopology: true}, (error, success) => {
    if(error){
        console.log("Error connecting to Db : ", e);
    } else {
        app.listen(3000,()=>
        console.log("Connected successfully")
    );
}
});

// var conn = mongoose.connection

// conn.on("connection",()=> {
//     // app.listen(3000,()=>
//     console.log("Connected successfully")
//     });

// conn.on("error",console.error.bind(console, 'connection error:'));

app.use('/',employee);
// conn.on("disconnection",()=> console.log("Disconnected successfully"));

