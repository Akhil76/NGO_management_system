const asynchandler = require('express-async-handler');
const balanceModel = require('../models/BalanceModel');


const mainBalance = asynchandler(async(req,res)=>{

    try{
        const MainBalance="50000"
        const balanceData = await new balanceModel({
            MainBalance
        })

        const newBalance = await balanceData.save();
        res.status(200).json({
            message:"MainBalance is added successfully.",
            newBalance
        })

    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})


module.exports = mainBalance;