const express = require('express');
const router = express.Router();
const {stuffCreate,allstuffs,singleStuff} = require('../controllers/struffController');
const {branceCreate,allBrances,singleBrance} = require('../controllers/branceController');
const {memberCreate,allmembers,singleMember} = require('../controllers/memberController');
const loneMaking = require('../controllers/loneController');
const {transactionCreate,allTransactions} = require('../controllers/transactionController');
const {mainBalance,displayMainBalance} = require('../controllers/mainBalanceController');

router.post('/addmainbalance',mainBalance);
router.get('/mainbalance',displayMainBalance);
router.post('/createstuff',stuffCreate);
router.get('/allstuffs',allstuffs);
router.get('/singlestuff/:id',singleStuff);
router.post('/createbrance',branceCreate);
router.get('/allbrances',allBrances);
router.get('/singlebrance/:id',singleBrance);
router.post('/createmember',memberCreate);
router.get('/allmembers',allmembers);
router.get('/singlemember/:accountno',singleMember);
router.post('/lonemaking',loneMaking);
router.post('/createtransaction',transactionCreate);
router.get('/displaytransactions',allTransactions);


module.exports = router;