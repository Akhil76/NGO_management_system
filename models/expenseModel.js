const mongoose = require('mongoose');



const expenseSchema = new mongoose.Schema({
    Purpose:{
        type:String,
        required:true
    },
    Description:{
        type:String,
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