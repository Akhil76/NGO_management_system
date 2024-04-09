const asynchandler = require('express-async-handler');
const branceModel = require('../models/BranceModel');



const branceCreate = asynchandler(async (req, res) => {

    try {
        const {
            BranceName,
            Address,
            BranceBalance
        } = req.body;

        branceData = await new branceModel({
            BranceName,
            Address,
            BranceBalance
        })

        const newBrance = await branceData.save();
        res.status(200).json({
            message: "Brance is created successfully.",
            newBrance
        })

    } catch (error) {
        res.status(401).json({
            error: "Server error occurred!"
        })
    }
})
const allBrances = asynchandler(async (req, res) => {
    try {
        const allBrances = await branceModel.find();
        res.status(200).json(allBrances);
    } catch (error) {
        res.status(401).json({
            error: "Server error occurred!"
        })
    }
})
const singleBrance = asynchandler(async (req, res) => {
    try {
        const branceId = req.params.id;
        const singleBrance = await branceModel.find({_id:branceId});
        res.status(200).json(singleBrance);
    } catch (error) {
        res.status(401).json({
            error: "Server error occurred!"
        })
    }
})

module.exports = { branceCreate, allBrances,singleBrance };