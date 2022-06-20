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
    Lone:{
        type:Number,
    },
    Installment:{
        type:Number
    },
    Balance:{
        type:SVGAnimatedNumber
    }
});

const transactionModel = mongoose.model('transaction',transactionSchema);
module.exports = transactionModel;