const asynchandler = require('express-async-handler');
const stuffModel = require('../models/stuff');



const stuffCreate = asynchandler(async(req,res)=>{
    try{
        const Name ="Akhil Kumar Paul"
        const UserName = "Akhil";
        const Password="akhil1234";
        const Role = "admin";
        const Post = "MD";
        const Mobile = "";
        Email = "";
        Picture = "";


        const stuffData = new stuffModel({
            Name,
            UserName,
            Password,
            Role,
            Post,
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