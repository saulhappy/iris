const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route   GET api/profile/me
// @desc    GET current user profile
// @access  Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["firstName", "avatar"]);

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
  [auth, [check("about", "About field is required").not().isEmpty()]],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const {
      about,
      neighborhood,
      openForRequests,
      helpWith,
      youtube,
      twitter,
      instagram,
      linkedin,
      facebook,
    } = req.body;

    // Build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    if (neighborhood) profileFields.neighborhood = neighborhood;
    if (neighborhood) profileFields.neighborhood = neighborhood;
    if (neighborhood) profileFields.neighborhood = neighborhood;
    if (neighborhood) profileFields.neighborhood = neighborhood;
    if (neighborhood) profileFields.neighborhood = neighborhood;
    if (neighborhood) profileFields.neighborhood = neighborhood;
    if (neighborhood) profileFields.neighborhood = neighborhood;
    if (neighborhood) profileFields.neighborhood = neighborhood;
  }
);

module.exports = router;
