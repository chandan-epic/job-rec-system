const express = require('express');
const router = express.Router(); 
const User=require('../models/Job');


// calculating similarity
const calculateSimilarity = (userSkills, jobSkills) => {
    const userSkillsSet = new Set(userSkills);
    const jobSkillsSet = new Set(jobSkills);
    
    const intersection = [...userSkillsSet].filter(skill => jobSkillsSet.has(skill));
    return intersection.length / jobSkillsSet.size;
};

// Recommendation function--(main one)
const recommendJobs = (userProfile, jobs) => {
    console.log(jobs);
    console.log("in recommendJobs method");
    const recommendedJobs = jobs.map(job => {
        const similarity = calculateSimilarity(userProfile.skills, job.required_skills);
        return { ...job._doc, similarity };
    }).filter(job => job.similarity > 0.3)
      .sort((a, b) => b.similarity - a.similarity);

    return recommendedJobs;
};

// route for job recommendations
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
        
        if (jobs.length === 0) {
            return res.status(404).json({ message: "No matching jobs found for your profile." });
        }


        const recommendations = recommendJobs(userProfile, jobs);
        console.log(recommendations);
        if (recommendations.length === 0) {
            return res.status(404).json({ message: "No highly relevant jobs found based on your skills." });
        }
        
        res.json(recommendations);
    } catch (error) {
        console.error('Error fetching recommendations:', error);
        res.status(500).json({ message: 'Error fetching recommendations' });
    }
});

module.exports = router;
