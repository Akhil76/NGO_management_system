const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const transactionSchema = new mongoose.Schema({
    MemberId:{
        type:Schema.Types.ObjectId,
        ref:'member',
        required:true
    },
    Saving:{
        type:Number
    },
    Withdraw:{

    },
    Installment:{
        type:Number
    },
    LoneBalance:{
        type:Number
    }
});

const transactionModel = mongoose.model('transaction',transactionSchema);
module.exports = transactionModel;