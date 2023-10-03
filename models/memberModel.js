const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Father:{
        type:String,
        required:true
    },
    Mother:{
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
    Picture:{
        type:String
    },
    Lone:[
        {
            LoneAmount:{
                type:String
                },
            LoneType:{
                type:String
            },
            Duraton:{
                type:String
            },
            Interest:{
                type:String
            },
            Date: { 
                type:Date,
                default:new Date()
                },
            status:{
                type:String,
                enum:["Running","Paid"]
            },
            TotalAmount:{
                type:Number
            }
        }
    ],
    Transaction:[
        {
            type:Schema.Types.ObjectId,
            ref:'transaction'
        }
    ],
    

})


const memberModel = mongoose.model('member',MemberSchema);
module.exports = memberModel;