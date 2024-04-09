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
const allstuffs = asynchandler(async (req, res) => {
    try {
        const allstuffs = await stuffModel.find();
        res.status(200).json(allstuffs);

    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});
const singleStuff = asynchandler(async (req, res) => {
    try {
        const stuffId = req.params.id;
        const singleStuff = await stuffModel.find({_id:stuffId});
        res.status(200).json(singleStuff);

    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});

module.exports = {stuffCreate,allstuffs,singleStuff};