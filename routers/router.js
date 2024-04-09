const express = require('express');
const router = express.Router();
const stuffCreate = require('../controllers/struffController');
const {branceCreate,allBrances} = require('../controllers/branceController');
const {memberCreate,allmembers,singleMember} = require('../controllers/memberController');
const loneMaking = require('../controllers/loneController');
const {transactionCreate,allTransactions} = require('../controllers/transactionController');
const mainBalance = require('../controllers/mainBalanceController');

router.post('/addmainbalance',mainBalance);
router.post('/createstuff',stuffCreate);
router.post('/createbrance',branceCreate);
router.get('/allbrances',allBrances);
router.post('/createmember',memberCreate);
router.get('/allmembers',allmembers);
router.get('/singlemember/:accountno',singleMember);
router.post('/lonemaking',loneMaking);
router.post('/createtransaction',transactionCreate);
router.get('/displaytransactions',allTransactions);


module.exports = router;