const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const branceSchema = new mongoose.Schema({

    BranceName:{
        type:String,
        required:true
    },
    BranceBalance: {
        type: Number,
        required: true
    },
    Address:{
        type:String,
        required:true
    },
    Stuff_Id: [
        {
        type:Schema.Types.ObjectId,
        ref: 'stuff'   
        }
    ],
    Member_Id:[
        {
        type:Schema.Types.ObjectId,
        ref:'member'
        }
    ],
    Date: { 
        type:Date,
        default:new Date()
    }
});

const branceModel = mongoose.model('brance',branceSchema);
module.exports=branceModel;