const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Job = require('../models/Job');

// Route to get job recommendations based on user profile
router.post('/user', async (req, res) => {
  try {
    const userProfile = req.body;
    const { skills, experience_level, preferences } = userProfile;

    // Find matching jobs from the database
    const matchedJobs = await Job.find({
      required_skills: { $in: skills },
      experience_level: experience_level,
      location: { $in: preferences.locations },
      job_type: preferences.job_type
    });

    res.json(matchedJobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job recommendations', error });
  }
});

module.exports = router;
