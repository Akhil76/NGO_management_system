const asynchandler = require('express-async-handler');
const stuffModel = require('../models/stuff');



const adminCreate = asynchandler(async(req,res)=>{
    try{
        const UserName = "Akhil";
        const Password="akhil1234";
        const Role = "admin";
        const Post = "MD"


        const adminData = new adminModel({
            UserName,
            Password,
            Role,
            Post
        })

        const newAdmin = await adminData.save();
        res.status(200).json({
            message:"Admin is created successfully.",
            newAdmin
        })

    }catch(error){
        res.status(401).json({
            error:"Server error occurred!"
        })
    }
})


module.exports = adminCreate;