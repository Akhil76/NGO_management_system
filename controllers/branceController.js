const asynchandler = require('express-async-handler');
const balanceModel = require('../models/BalanceModel');



const branceCreate = asynchandler(async(req,res)=>{

    try{
        const BranceName =""
        const Address = "";
        const Stuff_Id="";
        const Member_Id = "";
        const Post = "";
        const Mobile = "";

        const branceData = new branceCreate({
            BranceName,
            Address,
            Stuff_Id,
            Member_Id,
            Post,
            Mobile,
            Email,
            Picture
        })

        const newBrance = await branceData.save();
        res.status(200).json({
            message:"Brance is created successfully.",
            newBrance
        })

    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})


module.exports = branceCreate;