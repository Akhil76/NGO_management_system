const asynchandler = require('express-async-handler');
const transactionModel = require('../models/transactionModel');
const memberModel = require('../models/memberModel');
const balanceModel = require('../models/BalanceModel')
const stuffModel = require('../models/stuffModel');



const transactionCreate = asynchandler(async(req,res)=>{

    try{
        const {
        MemberId,
        StuffId,
        StuffName,
        Saving,
        Withdraw,
        Installment
        }=req.body
        
        const member = await memberModel.findById({_id:MemberId});
        const previousLoneBalance = member.LoneBalance;
        const previousSavingsBalance = member.SavingsBalance;

        const balance = await balanceModel.findOne();
        const balanceId = balance._id;
        const preMainBalance = balance.MainBalance;
        
       
        let savingsBalance = previousSavingsBalance;
        let loneBalance = previousLoneBalance;
        let mainBalance = preMainBalance;
        
        if (Saving) {
            savingsBalance +=Saving;
            mainBalance += Saving;
            console.log(mainBalance);
        } 
        if (Withdraw) {
            savingsBalance -= Withdraw;
            mainBalance -= Withdraw;
        }
      
        if (Installment) {
       
           loneBalance -= Installment;
           mainBalance += Installment;
        }
        const transactionData = await new transactionModel({
            MemberId,
            StuffId,
            StuffName,
            Saving,
            Withdraw,
            Installment,
        })

        const newTransaction = await transactionData.save();
        // push transaction into memberDB 
        const pushTransMember = await memberModel.findOneAndUpdate(
            {_id:transactionData.MemberId},
            {
                $push:{Transaction:newTransaction._id}
            }
        );
        // push transaction into stuffDB
        const pushTransStuff = await stuffModel.findOneAndUpdate(
            {_id:transactionData.StuffId},
            {
                $push:{Transaction:newTransaction._id}
            }
        );
        const updateBalance = await memberModel.findByIdAndUpdate(
            {_id:MemberId},
            {SavingsBalance:savingsBalance,LoneBalance:loneBalance},
            {new:true}
        );
    
        const updateMainBalance = await balanceModel.findByIdAndUpdate(
            {_id:balanceId},
            {MainBalance:mainBalance},
            {new:true}
            );
        res.status(200).json({
            message:"Transaction is created successfully.",
            newTransaction,
            updateBalance,
            pushTransMember,
            pushTransStuff,
            updateMainBalance
        })

    }catch(error){
        console.log(error);
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})

const allTransactions = asynchandler(async(req,res)=>{
    try{
       const allTransactions = await transactionModel.find();
       res.status(200).json(allTransactions);
    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})

module.exports = {transactionCreate,allTransactions};