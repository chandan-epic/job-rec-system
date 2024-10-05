const express = require('express');
const mongoose = require('mongoose');
const connectDB=require('./src/db/mongo');
const userRoutes = require('./src/routes/userRoutes');
const jobRoutes = require('./src/routes/jobRoutes'); // Import the new job routes

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();
console.log("hel;lo")
// Use user and job routes
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes); // Use the job routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
