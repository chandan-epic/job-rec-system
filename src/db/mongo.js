require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWD}@job-rec-cluster.6gu60.mongodb.net/?retryWrites=true&w=majority&appName=job-rec-cluster`);
    console.log("gfdtyf");
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error);
    process.exit(1);
  }
};

// connectDB();

module.exports = connectDB;
