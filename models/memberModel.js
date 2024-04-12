const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new mongoose.Schema({
    AccountNo:{
        type:Number,
        required:true
    },
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
    SavingsBalance:{
        type:Number,
        default:0
    },
    LoneBalance:{
        type:Number,
        default:0
    },
    Lone:[
        {
            LoneAmount:{
                type:Number,
                },
            LoneType:{
                type:String,
                enum:["Daily","Weekly","Monthly"]
            },
            Duraton:{
                type:String
            },
            Interest:{
                type:Number
            },
            Date: { 
                type:Date,
                default:new Date()
                },
            status:{
                type:String,
                enum:["Running","Paid"],
                default:"Running"
            },
            TotalAmount:{
                type:Number
            },
            Comment:{
                type:String
            }
        }
    ],
    Transaction:[
        {
            type:Schema.Types.ObjectId,
            ref:'transaction'
        }
    ],
});


const memberModel = mongoose.model('member',MemberSchema);
module.exports = memberModel;