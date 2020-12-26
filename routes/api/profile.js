const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');


const Profile = require('../../models/Profile');
const User = require('../../models/User');
const { compare } = require('bcryptjs');

// @route GET api/profile/me
// @desc get current users profile
// @access Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate('user',
      ['name', 'avatar']);

    if ('profile') {
      return res.status(400).json({ msg: 'There is no profile for this user' })
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route GET api/profile
// @desc Create or update user profile
// @access Private

router.post('/', [auth, [
  check('status', 'Status is required')
    .not()
    .isEmpty(),
  check('skills', 'Skills is required').not()
    .isEmpty()
]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      })
    }

    const {
      company,
      status,
      skills
    } = req.body;

    // Build profile obkect

    const profileFields = {};
    profileFields.user = req.user.id;
    if (company) profileFields.company = company;
    if (status) profileFields.status = status;
    if (skills) {
      profileFields.skills = skills.split(',').map(skill => skill.trim());
    }

    try {
      let profile = await Profile.findOne({ user: req.user.id })

      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      //Create
      profile = new Profile(profileFields);
      await profile.save();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error')
    }
  });

module.exports = router;