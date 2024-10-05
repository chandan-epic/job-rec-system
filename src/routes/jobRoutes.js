const express = require('express');
const router = express.Router();
const Job = require('../models/Job'); // Adjust the path if necessary
const User=require('../models/Job')
console.log(Job);
// Function to calculate similarity
const calculateSimilarity = (userSkills, jobSkills) => {
    const userSkillsSet = new Set(userSkills);
    const jobSkillsSet = new Set(jobSkills);
    
    const intersection = [...userSkillsSet].filter(skill => jobSkillsSet.has(skill));
    return intersection.length / jobSkillsSet.size; // Normalized score
};

// Recommendation function
const recommendJobs = (userProfile, jobs) => {
    console.log(jobs);
    console.log("in rec job method")
    const recommendedJobs = jobs.map(job => {
        const similarity = calculateSimilarity(userProfile.skills, job.required_skills);
        return { ...job._doc, similarity };
    }).filter(job => job.similarity > 0.1) // Adjust threshold
      .sort((a, b) => b.similarity - a.similarity);

    return recommendedJobs;
};

// New route for job recommendations
router.post('/recommendations', async (req, res) => {
    console.log("in rec route");
    const userData = req.body;

    try {
        const userProfile = {
            skills: userData.skills,
            experience_level: userData.experience_level,
            preferences: userData.preferences,
        };
        console.log("userProfile:",userProfile);
        
        const jobs = await User.find({
            required_skills: { $in: userProfile.skills },
            experience_level: userProfile.experience_level,
            location: { $in: userProfile.preferences.locations },
            job_type: userProfile.preferences.job_type
        });
        console.log(jobs.job_type);
        const recommendations = recommendJobs(userProfile, jobs);
        
        res.json(recommendations);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).json({ message: 'Error fetching recommendations' });
    }
});

module.exports = router;
