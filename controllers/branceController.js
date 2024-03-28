const asynchandler = require('express-async-handler');
const branceModel = require('../models/BranceModel');



const branceCreate = asynchandler(async(req,res)=>{

    try{
        const BranceName ="Koya";
        const Address = "Kaya Bazar";
        const branceData = await new branceModel({
            BranceName,
            Address,
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