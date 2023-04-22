const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');


router.post('/login', authMiddleware.validateLogin,authController.login);

router.post('/signup', authMiddleware.validateSignup,authController.signup);