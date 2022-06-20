const mongoose = require('mongoose');



const adminSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    },
    Post:{
        type:String
    }
})

const adminModel = mongoose.model('admin',adminSchema);
module.exports=adminModel;