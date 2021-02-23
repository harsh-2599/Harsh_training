var express = require('express')
var mongoose = require('mongoose')
var req = require('request')
var schema = require('../model/employeeSchema.js')
var router = express.Router()

var {addEmployee,readEmployee,readParticularEmployee,updateEmployee,deleteEmployee} = require('../controller/employeeController.js')

router.post('/add',addEmployee);
router.get('/read',readEmployee);
router.get('/readparticular',readParticularEmployee);
router.get('/update',updateEmployee);
router.get('/delete',deleteEmployee);
module.exports = router