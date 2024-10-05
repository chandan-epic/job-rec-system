const express = require('express');
const mongoose = require('mongoose');
const connectDB=require('./src/db/mongo');
const jobRoutes = require('./src/routes/jobRoutes');

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// route
app.use('/api/jobs', jobRoutes); // must hit this route with json data.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
