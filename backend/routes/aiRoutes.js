// backend/routes/aiRoutes.js

const express = require('express');
const router = express.Router();
const { detectAnomalies } = require('../controllers/ai.controller');

// Route to detect anomalies in the blockchain
router.get('/detect-anomalies', detectAnomalies);

module.exports = router;
