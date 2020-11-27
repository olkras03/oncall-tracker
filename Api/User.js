const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const router = express.Router();

router.post('/', async (req,res) => {
    const { firstName } = req.body;
    let user = {};
    user.firstName = firstName;
    let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

module.exports = router;