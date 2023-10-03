const mongoose = require('mongoose');



const stuffSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
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
    },
    Mobile:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
    },
    Picture:{
        type:String
    }
})

const stuffModel = mongoose.model('stuff',stuffSchema);
module.exports=stuffModel;