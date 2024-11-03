const express = require('express');
const router = express.Router();
const { createBlock, getBlockchain } = require('../controllers/block.controller');

router.post('/create', createBlock);

router.get('/', getBlockchain);


module.exports = router;