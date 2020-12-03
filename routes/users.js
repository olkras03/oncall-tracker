const express = require('express');
const router = express.Router();
const User = require('../models/User');

//Submits a user
router.post('/', async (req, res) => {
    const user = new User({
        firstName: req.body.firstName
    });
    try {
        const savedUser = await user.save()
        res.status(200).json(savedUser);
        }
    catch (err) {
        res.json({ message: err });
        }
});
//Gets back all the users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({ message: err });
    }
});

//Selects specific user by id
router.get('/:postId', async (req, res) => {
    try {
        const specificUser = await User.findById(req.params.postId);
        res.json(specificUser);
    } catch (err) {
        res.json({ message: err });
    }
});

//Delete Post
router.delete('/:postId', async (req, res) => {
    try {
        const removedUser = await User.remove({_id: req.params.postId });
        res.json(removedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne( { _id: req.params.postId }, 
        { $set: { firstName: req.body.firstName }});
        res.json(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;