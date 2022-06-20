const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Nid:{
        type:Number,
        required:true
    },
    Mobile:{
        type:Number,
        required:true
    },
    Address:{
        type:String,
        required:true,
    },
    BranceName:{
        type:String,
        required:true
    },
    Transaction:[
        {
            type:Schema.Types.ObjectId,
            ref:'transaction'
        }
    ]

})


const memberModel = mongoose.model('member',MemberSchema);
module.exports = memberModel;