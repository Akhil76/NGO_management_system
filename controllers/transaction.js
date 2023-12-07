const asynchandler = require('express-async-handler');
const transactionModel = require('../models/transactionModel');



const transactionCreate = asynchandler(async(req,res)=>{

    try{
        const MemberId =""
        const StuffId = "";
        const Saving="";
        const Withdraw = "";
        const Installment = "";
        const LoneBalance = "";

        const transactionData = new transactionCreate({
            MemberId,
            StuffId,
            Saving,
            Withdraw,
            Installment,
            LoneBalance,
        })

        const newTransaction = await transactionData.save();
        res.status(200).json({
            message:"Transaction is created successfully.",
            newTransaction
        })

    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})


module.exports = transactionCreate;