const asynchandler = require('express-async-handler');
const memberModel = require('../models/memberModel');
const branceModel = require('../models/BranceModel');



const memberCreate = asynchandler(async (req, res) => {

    try {
        const {
            Name,
            Father,
            Mother,
            Nid,
            Mobile,
            Address,
            BranceName,
            BranceId,
            Picture 
        } = req.body;

        const allMembers = await memberModel.find();
        const memberNo = allMembers.length;

        const memberData = await new memberModel({
            AccountNo: memberNo + 1,
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
        const pushId = await branceModel.findOneAndUpdate(
            { _id: BranceId },
            {
                $push: { Member_Id: newMember._id }
            }
        );
        res.status(200).json({
            message: "Member is created successfully.",
            newMember,
            pushId
        })

    } catch (error) {
        res.status(401).json({
            error: "Server error occurred!"
        })
    }
})

const allmembers = asynchandler(async (req, res) => {
    try {
        const members = await memberModel.find();
        res.status(200).json(members);

    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});
const singleMember = asynchandler(async (req, res) => {
    try {
        const accountNo = req.params.accountno;
        const member = await memberModel.find({ AccountNo: accountNo });
        res.status(200).json(member);
    } catch (error) {
        res.status(500).json({
            error: "Server side error occurred!"
        })
    }
});
module.exports = { memberCreate, allmembers, singleMember };