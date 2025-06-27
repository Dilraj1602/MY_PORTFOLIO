
# 🛠️ Running and Connecting the Backend and Frontend

This guide will help you set up, run, and connect your Express API backend with your React frontend application.

---

## 📌 1. Backend Setup (Express API)

### ✅ Step 1: Clone the Repository

Clone your backend repository or navigate to your existing backend project folder:

```bash
git clone <repository-url>
cd <backend-folder>
```

### ✅ Step 2: Install Dependencies

Install all required packages for your Express API:

```bash
npm install
```

### ✅ Step 3: Set Up the Database Connection

Ensure your database connection is correctly configured. For MongoDB, include your MongoDB URI in `config/database.js`.

Example `config/database.js` setup:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('your-mongodb-uri', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

module.exports = connectDB;
```

### ✅ Step 4: Run the Backend Server

Start the backend server:

```bash
node server.js
```

Or use **Nodemon** for automatic restarts during development:

Install nodemon (if not already installed):

```bash
npm install --save-dev nodemon
```

Update your `package.json` scripts section:

```json
"scripts": {
  "start": "nodemon server.js"
}
```

Then run the server with:

```bash
npm run start
```

Your backend will now be running at **http://localhost:4000**.

---

## 📌 2. Frontend Setup (React)

### ✅ Step 1: Clone the Repository

Clone your frontend repository or navigate to your existing frontend project folder:

```bash
git clone <repository-url>
cd <frontend-folder>
```

### ✅ Step 2: Install Dependencies

Install all required packages for your React application:

```bash
npm install
```

### ✅ Step 3: Set Up Environment Variables (Optional)

If your React app uses environment variables (e.g., API base URL), create a `.env` file in your project root.

Example `.env` file:

```env
REACT_APP_API_URL=http://localhost:4000
```

### ✅ Step 4: Connect Frontend to Backend

In your React components (e.g., `Form.js`), use the environment variable for the API URL:

```javascript
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000';
```

### ✅ Step 5: Run the React App

Start the React development server:

```bash
npm start
```

Your frontend will now be running at **http://localhost:3000**.

---

## 🌐 Live Portfolio

Check out the live version of the portfolio: [My Portfolio](https://dil-raj-portfolio.onrender.com/)

---

🎉 **Now both your backend and frontend should be connected and running successfully!**
