⚙️Job Recommendation Backend: A service for recommending jobs based on user profiles (skills, experience, preferences) using MongoDB and Express.js.
Features:
Job recommendations based on user skills and preferences
MongoDB integration for data storage
Express.js-based REST API
Setup Instructions:
Clone the Repository:

git clone https://github.com/your-username/job-rec-backend.git
cd job-rec-backend
Install dependencies:

Navigate to the project folder and run:
npm install
Environment Setup:

Create a .env file in the root directory with:
MONGO_USERNAME=<Your MongoDB username>
MONGO_PASSWD=<Your MongoDB password>
MONGO_CLUSTER=<Your cluster name>
MONGO_DBNAME=<Your DB name>
MongoDB Configuration:

Set up a MongoDB cluster on MongoDB Atlas.
Whitelist your IP in the cluster’s network settings.
Add a database user in the MongoDB Atlas dashboard.
![App Screenshot](images/img.png)


Run the application: node app.js
Default server runs on port 5000:
Output: Server running on port 5000 and MongoDB connected
Test the API:

🚀Use tools like Postman or cURL to test the API.
Make a POST request to /api/jobs/recommendations with the following example body:
{
  "skills": ["JavaScript", "Node.js"],
  "experience_level": "mid",
  "preferences": {
    "locations": ["remote", "New York"],
    "job_type": "full-time"
  }
}

![App Screenshot](images/image2.png)
![App Screenshot](images/image.png)