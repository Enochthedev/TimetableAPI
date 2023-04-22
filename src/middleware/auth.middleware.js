const z = require('zod');

// Define schema for login
const loginSchema = z.object({
    email: z.string().nonempty('Email is required.'),
    password: z.string().nonempty('Password is required.'),
});

// Validation middleware for login
const validateLogin = (req, res, next) => {
    try {
        loginSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ errors: [{ message: error.message }] });
    }
};

// Define schema for signup
const signupSchema = z.object({
        firstName: z.string().nonempty('First name is required.'),
        lastName: z.string().nonempty('Last name is required.'),
        email: z.string().nonempty('Email is required.').email('Email must be valid.'),
        password: z.string().nonempty('Password is required.').min(8, 'Password must be at least 8 characters.'),
        faculty: z.string().nonempty('Faculty is required.'),
        department: z.string().nonempty('Department is required.'),
        role: z.string().nonempty('Role is required.'),
});

// Validation middleware for signup
const validateSignup = (req, res, next) => {
    try {
        signupSchema.parse(req.body);
        next();
    } catch (error) {
        res.status(400).json({ errors: [{ message: error.message }] });
    }
};

module.exports = {
    validateLogin,
    validateSignup,
};
