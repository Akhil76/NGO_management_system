const mongoose = require('mongoose');



const balanceSchema = new mongoose.Schema({
    
    MainBalance:{
        type:Number,
    },
    Date: { 
        type:Date,
        default:new Date()
    }
})

const balanceModel = mongoose.model('balance',balanceSchema);
module.exports=balanceModel;