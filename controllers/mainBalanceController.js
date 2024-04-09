const asynchandler = require('express-async-handler');
const balanceModel = require('../models/BalanceModel');


const mainBalance = asynchandler(async(req,res)=>{

    try{
        const MainBalance = req.body;
        const balanceData = await new balanceModel({
            MainBalance
        })

        const newBalance = await balanceData.save();
        res.status(200).json({
            message:"MainBalance is added successfully.",
            newBalance
        });

    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})

const displayMainBalance = asynchandler(async (req, res) => {
    try {
        const mainBalance = await balanceModel.find();
        res.status(200).json(mainBalance);
    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});
module.exports = {mainBalance,displayMainBalance};