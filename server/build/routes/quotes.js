"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/quotesController');
const Quote = require('../models/quote');
router.get('/', controller.all);
router.get('/generate', controller.generate);
router.get('/random-quote', controller.getRandomQuote);
module.exports = router;
