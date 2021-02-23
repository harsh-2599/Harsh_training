var express = require('express')
var mongoose = require('mongoose')

var employeeSchema =new mongoose.Schema({
    name : String,
    email : String,
    hourlyRate : Number,
    totalHour : Number,
    //salary : Number,
})

// employeeSchema.methods.totalSalary = function(){
//     return this.hourlyRate * this.totalHour ;
// }

module.exports = employeeSchema