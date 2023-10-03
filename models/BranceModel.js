const mongoose = require('mongoose');



const branceSchema = new mongoose.Schema({

    BranceName:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Date: { 
        type:Date,
        default:new Date()
    }
})

const branceModel = mongoose.model('brance',branceSchema);
module.exports=branceModel;