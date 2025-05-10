const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const threatController = require('../controllers/threatController');
const authMiddleware = require('../middleware/auth');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/threats', authMiddleware, threatController.getThreats);
router.post('/threats', authMiddleware, threatController.createThreat);

module.exports = router;