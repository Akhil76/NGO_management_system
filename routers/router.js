const express = require('express');
const router = express.Router();
const stuffCreate = require('../controllers/struffController');
const branceCreate = require('../controllers/branceController');
const memberCreate = require('../controllers/memberController');


router.get('/createstuff',stuffCreate);
router.get('/createbrance',branceCreate);
router.get('/createmember',memberCreate);


module.exports = router;