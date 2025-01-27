# Landing-Page
 A one-page landing site built using Node.js, MongoDB, SCSS, and the MVC pattern. The project includes an admin login on the same page, allowing for real-time updates to text, colors, and images without a separate CMS panel.

## Prerequisites

Before you start, ensure you have the following installed on your machine:

1. **MongoDB Community Server**  
   [Download MongoDB Community Edition](https://www.mongodb.com/try/download/community)  
   - After installation, make sure MongoDB is running on your system.  

2. **MongoDB Compass** (Optional)  
   [Download MongoDB Compass](https://www.mongodb.com/try/download/compass)  
   - Use this GUI to visualize and manage your MongoDB database.

3. **Node.js and npm**  
   [Download Node.js](https://nodejs.org/en/download)  
   - Install the latest LTS version for best compatibility.

4. **Node Version Manager (NVM)**  
   [Download NVM for Windows](https://github.com/coreybutler/nvm-windows)  
   - Use this to manage multiple Node.js versions if needed.

5. **GitHub Desktop**  
   [Download GitHub Desktop](https://desktop.github.com/download/)  
   - For cloning and managing repositories easily.

## Getting Started

### 1. Clone the Repository
Use GitHub Desktop or the terminal to clone the repository:
git clone https://github.com/MarcelCronje/Landing-Page.git
cd Landing-Page

### 2. Install Dependencies
Run the following command to install the required packages:
npm install

### 3. Create the .env File
Inside the root folder of the project, create a new .env file and add the following environment variables:
MONGO_URI=mongodb://localhost:27017/landing-page
JWT_SECRET=your_jwt_secret

### 4. Add a MongoDB Connection
.Open MongoDB Compass.
.Click Connect, then select Create a New Connection.
.Enter the following connection string
mongodb://localhost:27017/landing-page
.Click Connect to create and manage your database.

### 5. Start the Development Server
To run the project in development mode, use:
npm run dev
This will:
Compile your SCSS files into CSS.
Start the server with nodemon for automatic restarts on code changes.

### Development Commands

Compile SCSS:
npm run sass
Compiles all SCSS files from src/scss into public/css.

Start Dev Server:
npm run dev
Starts the server with automatic restarts on file changes.

### Built With

Node.js - Backend framework.
MongoDB - Database for storing project data.
Express - Web framework for Node.js.
SCSS - CSS preprocessor for styling.
EJS - Templating engine for dynamic views.

### Troubleshooting

If you encounter issues:

Ensure MongoDB is running locally.
Double-check your .env file for correct configurations.
Run npm install if dependencies are missing.
For additional support, contact Marcel.

# Collaboration Guidelines

# Branches
Main Branch: main (Production-ready code)

# Personal Branches:
marcel-dev: Marcel's development branch.
Morne-dev: Morne's development branch.

# Best Practices

# Commit Often
Make small, descriptive commits to make merging easier.
Example: feat: add admin login functionality or fix: correct color picker bug.

# Pull Regularly
Always pull the latest changes from main or other branches before starting work.
Avoid conflicts by keeping your branch up-to-date.

# Communicate
Let the other collaborator know which branch you're working on.
Coordinate before merging changes into main.

# Workflow
Work on your assigned branch (marcel-dev or Morne-dev).
Test your changes locally before pushing them.
Once a feature is complete and tested, create a pull request to merge into main.