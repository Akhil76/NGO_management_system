const asynchandler = require('express-async-handler');
const memberModel = require('../models/memberModel');



const memberCreate = asynchandler(async(req,res)=>{

    try{
        const Name =""
        const Father = "";
        const Mother="";
        const Nid = "";
        const Mobile = "";
        const Address = "";
        const BranceName = "";
        const Picture ="";

        const memberData = new memberCreate({
            Name,
            Father,
            Mother,
            Nid,
            Mobile,
            Address,
            BranceName,
            Picture
        })

        const newMember = await memberData.save();
        res.status(200).json({
            message:"Member is created successfully.",
            newMember
        })

    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})


module.exports = memberCreate;