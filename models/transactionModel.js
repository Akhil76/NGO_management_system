const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const transactionSchema = new mongoose.Schema({
    MemberId:{
        type:Schema.Types.ObjectId,
        ref:'member',
        required:true
    },
    StuffId:{
        type:Schema.Types.ObjectId,
        ref:'stuff',
        required:true
    },
    Saving:{
        type:Number
    },
    Withdraw:{
        type:Number
    },
    Installment:{
        type:Number
    },
    LoneBalance:{
        type:Number
    },
    Date: { 
        type:Date,
        default:new Date()
    }
});

const transactionModel = mongoose.model('transaction',transactionSchema);
module.exports = transactionModel;