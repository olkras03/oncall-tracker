const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');


// @route GET api/auth
// @desc Get user by token
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// @route Post api/auth
// @desc Authenticate user & get token
// @access Public

router.post(
    '/',
    check('email', 'Please include a valid email').isEmail(),
    check(
        'password',
        'Password is required'
    ).exists(),
    async (req, res) => {
        console.log('******request_body', req.body);
        console.log('******request_header', req.headers);
        const errors = validationResult(req);
        console.log('*******', errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        console.log('111111body', req.body);
        try {
            let user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] })
            }
            console.log('111111user', user);

            // Compare user and password using method bcrypt.compare

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                res.status(400).json({ errors: [{ msg: 'Invalid credentials' }] })
            }

            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                });
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error')
        }
    });

module.exports = router;