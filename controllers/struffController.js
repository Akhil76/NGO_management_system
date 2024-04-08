const asynchandler = require('express-async-handler');
const stuffModel = require('../models/stuffModel');
const branceModel = require('../models/BranceModel');



const stuffCreate = asynchandler(async(req,res)=>{
    try{
        const Name ="Akhil Kumar Paul"
        const UserName = "Akhil";
        const Password="akhil1234";
        const Role = "admin";
        const Post = "MD";
        const BranceName ="Koya";
        const BranceId ="660f963b7a47d0d933982cd4";
        const Mobile = "01754444444";
        const Email = "akhil@gmail.com";
        const Picture = "";


        const stuffData = await new stuffModel({
            Name,
            UserName,
            Password,
            Role,
            Post,
            BranceName,
            Mobile,
            Email,
            Picture
        })

        const newStuff = await stuffData.save();
        const pushId = await branceModel.findOneAndUpdate(
            { _id: BranceId},
            {
                $push:{ Stuff_Id:newStuff._id}
            }
        );
        res.status(200).json({
            message:"Admin is created successfully.",
            newStuff,
            pushId,
        });
    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})


module.exports = stuffCreate;