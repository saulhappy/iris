const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");
const Post = require("../../models/Post");

// @route   GET api/profile/me
// @desc    GET current user profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["firstName", "lastName", "avatar"]);

    if (!profile) {
      return res.status(400).json({ msg: "This user has no profile." });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/profile/me
// @desc    Create or update a user profile
// @access  Private

router.post(
  "/",
  [auth, [check("email", "Email field is required").not().isEmpty()]],
  [auth, [check("city", "City field is required").not().isEmpty()]],
  [auth, [check("state", "State field is required").not().isEmpty()]],
  [auth, [check("zip", "Zip Code field is required").not().isEmpty()]],
  [auth, [check("about", "About field is required").not().isEmpty()]],
  [
    auth,
    [
      check("openForRequests", "Open For Requests field is required")
        .not()
        .isEmpty(),
    ],
  ],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      email,
      city,
      state,
      zip,
      about,
      openForRequests,
      helpWith,
      personalSite,
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
    } = req.body;

    // Build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if (email) profileFields.email = email;
    if (city) profileFields.city = city;
    if (state) profileFields.state = state;
    if (zip) profileFields.zip = zip;
    if (about) profileFields.about = about;
    if (openForRequests) profileFields.openForRequests = openForRequests;
    if (helpWith) {
      profileFields.helpWith = helpWith.split(",");
    }
    // Build social object
    profileFields.social = {};
    if (personalSite) profileFields.social.personalSite = personalSite;
    if (youtube) profileFields.social.youtube = youtube;
    if (twitter) profileFields.social.twitter = twitter;
    if (instagram) profileFields.social.instagram = instagram;
    if (linkedin) profileFields.social.linkedin = linkedin;
    if (facebook) profileFields.social.facebook = facebook;

    // get a profile from Mongo
    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //update profile if profile found.
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }
      // if profile not found, create new profile.
      profile = new Profile(profileFields);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route   GET api/profile
// @desc    Get all profiles
// @access  Public

router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().populate("user", [
      "firstName",
      "lastName",
      "email",
      "city",
      "state",
      "zip",
      "avatar",
    ]);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user id
// @access  Public

router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", [
      "firstName",
      "lastName",
      "email",
      "city",
      "state",
      "zip",
      "avatar",
    ]);

    // if no profile, send no profile found message.
    if (!profile)
      return res.status(400).json({ msg: "Iris profile not found." });
    // else, send the profile
    res.json(profile);
  } catch (err) {
    // Check if the ID is valid
    const valid = mongoose.Types.ObjectId.isValid(req.params.user_id);
    if (!valid) {
      return res.status(400).json({ msg: "Profile not found" });
    }
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/profile
// @desc    Delete profile, user and posts
// @access  Private

router.delete("/", auth, async (req, res) => {
  try {
    // remove user's posts
    await Post.deleteMany({ user: req.user.id });

    //Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });

    //Remove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
