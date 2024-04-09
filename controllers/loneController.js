const asynchandler = require('express-async-handler');
const memberModel = require('../models/memberModel');



const loneMaking = asynchandler(async (req, res) => {

    try {
        const {
            MemberId,
            LoneAmount,
            LoneType,
            Duraton,
            Interest,
            TotalAmount
        } = req.body;


        const loneData = ({
            LoneAmount,
            LoneType,
            Duraton,
            Interest,
            TotalAmount
        });
        console.log(loneData)
        const pushdata = await memberModel.updateOne(
            { _id: MemberId },
            {
                $push: { Lone: loneData }
            }
        );
        const loneBalance = await memberModel.findByIdAndUpdate(
            { _id: MemberId },
            { LoneBalance: TotalAmount },
            { new: true }
        )
        res.status(200).json({
            loneBalance: loneBalance,
            push: pushdata,
            message: "Lone is done successfully."
        });
    } catch (error) {
        console.log(error);
        res.status(401).json({
            error: "Server error occurred!"
        })
    }
})




module.exports = loneMaking;