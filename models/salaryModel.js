const mongoose = require('mongoose');



const expenseSchema = new mongoose.Schema({
    Stuff_id:{
        type:String,
        required:true
    },
    SalaryAmount:{
        type:Number,
        required:true
    },
    Month:{
        type:String,
        enum:["January","February","March","April","May","June","July","August","September","October","November","December"]
    },
    Year:{
        type:Number,
        required:true
    },
    Brance:{
        type:String,
        required:true
    },
    Date: { 
        type:Date,
        default:new Date()
    }
})

const expenseModel = mongoose.model('expense',expenseSchema);
module.exports=expenseModel;