const asynchandler = require('express-async-handler');
const memberModel = require('../models/memberModel');



const loneMaking = asynchandler(async(req,res)=>{

    try{
        const MemberId="6606a4320847a95ee68c4dd2";
        const LoneAmount = "10000";
        const LoneType = "Weekly";
        const Duraton ="6months";
        const Interest = "1200";
        const TotalAmount = "12200";

        const loneData=({
           
            LoneAmount,
            LoneType,
            Duraton,
            Interest,
            TotalAmount

        })
        console.log(loneData)
        const pushdata = await memberModel.updateOne(
            { _id: MemberId},
            {
                $push:{ Lone:loneData}
            }
        );

        res.status(200).json({
            push: pushdata,
            message: "Lone is done successfully."
        });
    }catch(error){
        console.log(error);
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})




module.exports = loneMaking;