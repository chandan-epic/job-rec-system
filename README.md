Job Recommendation Backend
A backend service for recommending jobs based on user profiles (skills, experience, and preferences). The service uses MongoDB to store and retrieve job data and matches it to user profiles through skill-based similarity scoring.

Features
Job recommendations based on user skills and preferences
MongoDB integration for data storage
Express.js-based REST API


Setup Instructions

1. Clone the Repository
-git clone https://github.com/your-username/job-rec-backend.git
cd job-rec-backend

2.Install dependencies
Navigate to the project folder and install the required Node.js packages:
npm install

3. Environment Setup
Create a .env file in the root directory of your project. Add the following content to configure MongoDB connection:
MONGO_USERNAME=<Your MongoDB username>
MONGO_PASSWD=<Your MongoDB password>
MONGO_CLUSTER=<Your cluster name>
MONGO_DBNAME=<Your DB name>

4.MongoDB Configuration
Set up a MongoDB cluster on MongoDB Atlas.
Ensure your IP is whitelisted in the cluster’s network access settings.
Add a database user in the MongoDB Atlas dashboard.

5. Run the Application
node app.js
By default, the server will run on port 5000. You should see output indicating a successful connection to MongoDB:
Server running on port 5000
MongoDB connected

6. Test the API
You can test the API using tools like Postman or cURL. To get job recommendations for a user profile, make a POST request to the following endpoint:
POST /api/jobs/recommendations

Request Body Example:
{
  "skills": ["JavaScript", "Node.js"],
  "experience_level": "mid",
  "preferences": {
    "locations": ["remote", "New York"],
    "job_type": "full-time"
  }
}

7. Sample Job Posting (MongoDB Data)
Insert sample job data into your MongoDB database in the jobs collection.
{
  "job_id": 1,
  "job_title": "Software Engineer",
  "company": "TechCorp",
  "required_skills": ["JavaScript", "Node.js", "React"],
  "location": "remote",
  "job_type": "full-time",
  "experience_level": "mid"
}

![App Screenshot](images/image2.png)
![App Screenshot](images/image.png)

