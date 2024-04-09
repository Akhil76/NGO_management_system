const asynchandler = require('express-async-handler');
const stuffModel = require('../models/stuffModel');
const branceModel = require('../models/BranceModel');



const stuffCreate = asynchandler(async (req, res) => {
    try {

        const {
            Name,
            UserName,
            Password,
            Role,
            Post,
            BranceName,
            BranceId,
            Mobile,
            Email,
            Picture
        } = req.body;


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
            { _id: BranceId },
            {
                $push: { Stuff_Id: newStuff._id }
            }
        );
        res.status(200).json({
            message: "Admin is created successfully.",
            newStuff,
            pushId,
        });
    } catch (error) {
        res.status(401).json({
            error: "Server error occurred!"
        })
    }
})


module.exports = stuffCreate;