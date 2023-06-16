const mongoose=require('mongoose')
const employeeSchema=mongoose.Schema({
name:String,
location:String,
position:String,
salary:Number
})

const employeeModal=mongoose.model('Employee',employeeSchema)
module.exports=employeeModal