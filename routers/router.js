const express = require('express');
const router = express.Router();
const adminCreate = require('../controllers/adminController');


router.get('/createadmin',adminCreate);


module.exports = router;