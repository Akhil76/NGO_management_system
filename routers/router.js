const express = require('express');
const router = express.Router();
const stuffCreate = require('../controllers/struffController');
const branceCreate = require('../controllers/branceController');
const {memberCreate,allmembers,singleMember} = require('../controllers/memberController');
const loneMaking = require('../controllers/loneController');

router.get('/createstuff',stuffCreate);
router.get('/createbrance',branceCreate);
router.get('/createmember',memberCreate);
router.get('/allmembers',allmembers);
router.get('/singlemember/:accountno',singleMember);
router.get('/lonemaking',loneMaking);


module.exports = router;