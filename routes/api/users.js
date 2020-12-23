const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/User');
const { check, validationResult } = require('express-validator');

// @route Post api/users

router.post(
    '/',
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check(
            'password',
            'Please enter a password with 6 or more characters'
        ).isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body; //destructuring
        //see if user exists
        try {
            let user = await User.findOne({ email });
            if (user) {
                res.status(400).json({ errors: [{ msg: 'User already exists' }] })
            }

            //Get user's gravatar

            const avatar = normalize(
                gravatar.url(email, {
                    s: '200', //size
                    r: 'pg', //raiting
                    d: 'mm' //default image
                }),
                { forceHttps: true }
            );

            user = new User({
                name,
                email,
                password,
                avatar
            })
            //Encrypt password
            const salt = await bcrypt.genSalt(10);

            user.password = await bcrypt.hash(password, salt);

            await user.save()

            // Return jsonwebtoken

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




// router.post('/', async (req, res) => {

//Gets back all the users
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// //Selects specific user by id
// router.get('/:postId', async (req, res) => {
//     try {
//         const specificUser = await User.findById(req.params.postId);
//         res.json(specificUser);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// //Delete Post
// router.delete('/:postId', async (req, res) => {
//     try {
//         const removedUser = await User.remove({ _id: req.params.postId });
//         res.json(removedUser);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

// router.patch('/:postId', async (req, res) => {
//     try {
//         const updatedUser = await User.updateOne({ _id: req.params.postId },
//             { $set: { firstName: req.body.firstName } });
//         res.json(updatedUser);
//     } catch (err) {
//         res.json({ message: err });
//     }
// });

module.exports = router;
