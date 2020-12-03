const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/User');
const router = express.Router();

router.post('/', async (req,res) => {
    const { firstName } = req.body;
    let user = {};
    user.firstName = firstName;
    let userModel = new User(user);
  await userModel.save().then(document => {
    res.json({ state: true, msg: "data inserted successully", document: userModel })
    .catch(err => {
      res.send(err);
      });
  });e
});

router.get('/', function (req, res) {
  User.find().then(documents => {
  res.json({status:200,message:'Users data fetched successfully',Userdata: documents});
  });
  });

module.exports = router;