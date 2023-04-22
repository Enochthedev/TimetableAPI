const { body, validationResult } = require('express-validator');

// Validation middleware for login
const validateLogin = [
    body('username')
        .notEmpty().withMessage('Username is required.')
        .isString().withMessage('Username must be a string.'),
    body('password')
        .notEmpty().withMessage('Password is required.')
        .isString().withMessage('Password must be a string.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Validation middleware for signup
const validateSignup = [
    body('firstName')
        .notEmpty().withMessage('First name is required.')
        .isString().withMessage('First name must be a string.'),
    body('lastName')
        .notEmpty().withMessage('Last name is required.')
        .isString().withMessage('Last name must be a string.'),
    body('email')
        .notEmpty().withMessage('Email is required.')
        .isEmail().withMessage('Email must be valid.'),
    body('password')
        .notEmpty().withMessage('Password is required.')
        .isLength({ min: 8 }).withMessage('Password must be at least 8 characters.'),
    body('faculty')
        .notEmpty().withMessage('Faculty is required.')
        .isString().withMessage('Faculty must be a string.'),
    body('department')
        .notEmpty().withMessage('Department is required.')
        .isString().withMessage('Department must be a string.'),
    body('role')
        .notEmpty().withMessage('Role is required.')
        .isString().withMessage('Role must be a string.'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = {
    validateLogin,
    validateSignup
};
