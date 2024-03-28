const asynchandler = require('express-async-handler');
const stuffModel = require('../models/stuffModel');



const stuffCreate = asynchandler(async(req,res)=>{
    try{
        const Name ="Akhil Kumar Paul"
        const UserName = "Akhil";
        const Password="akhil1234";
        const Role = "admin";
        const Post = "MD";
        const BranceName ="Koya";
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
        res.status(200).json({
            message:"Admin is created successfully.",
            newStuff
        })

    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})


module.exports = stuffCreate;