var express = require('express')
var mongoose = require('mongoose')
var req = require('request')
var employeeSchema = require('../model/employeeSchema.js')
var employeeModel = mongoose.model('Employees',employeeSchema)

var addEmployee = async function(req, res){
    var employee = new employeeModel ({
    name : 'Dhruv Gandhi',
    email : 'abc@gmail.com',
    hourlyRate : 11,
    totalHour : 13
});
    employee.save(function(err,data){
        if(err){
            throw error;
        }
        else{
            console.log(data);
            console.log("Record added");
            res.status(200).json({data: data})
        }
    })
}
    
var readEmployee = async function(req,res){
    employeeModel.find({},(err,data) => {
        if(err){
            throw err;
        } 
        else{
            console.log("Displaying Data");
            console.log(data);
            res.status(200).json({data: data})
            console.log("Done Displaying");
        }
    })

}

var readParticularEmployee = async function(req,res){
    // employeeModel.find({name: 'Harsh Reddiar'},(err,data) => {
        employeeModel.find({hourlyRate : {$gt:12}},(err,data) => {
        if(err){
            throw err;
        } 
        else{
            console.log("Displaying Data");
            console.log(data);
            res.status(200).json({data: data})
            console.log("Done Displaying");
        }
    })
}

var updateEmployee = async function(req,res){
        employeeModel.findOneAndUpdate({name : 'Dhruv Gandhi'},{name : 'Tanha Bhandari'},(err,data)=>{
            if(err){
                throw err;
            }
            else{
                console.log("Updating..");
                console.log(data);
                res.status(200).json({data : data})
                console.log("Done updating..");
            }
        })
}

var deleteEmployee = async function(req,res){
    employeeModel.findOneAndDelete({name : 'Tanha Bhandari'},(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Deleting..');
            console.log(data);
            res.status(200).json({data:data})
            console.log("Deleted");
        }
    })
}


module.exports = {addEmployee,readEmployee,readParticularEmployee,updateEmployee,deleteEmployee}