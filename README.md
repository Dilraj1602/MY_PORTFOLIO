# 🚀 My Portfolio - Full Stack Developer Portfolio

A modern, responsive portfolio website built with React, Tailwind CSS, and Node.js. Features a clean design with smooth animations, contact form functionality, and a comprehensive showcase of projects and skills.

## ✨ Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Components**: Dynamic project showcase and skills section
- **Contact Form**: Functional contact form with email integration
- **Smooth Animations**: Enhanced user experience with CSS animations
- **Dark/Light Theme**: Modern theme implementation
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern JavaScript library for building user interfaces
- **Tailwind CSS 3.2** - Utility-first CSS framework for rapid UI development
- **React Router DOM** - Client-side routing for single-page applications
- **React Icons** - Popular icon library for React
- **React Hot Toast** - Beautiful notifications for React
- **Vanilla Tilt** - Smooth 3D tilt effect for interactive elements
- **Typed.js** - Typing animation library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling for Node.js
- **SendGrid** - Email service for contact form functionality
- **CORS** - Cross-origin resource sharing middleware
- **Nodemon** - Development tool for automatic server restarts

## 📁 Project Structure

```
MY_PORTFOLIO/
├── Frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── Components/      # React components
│   │   ├── assests/         # Images and media files
│   │   ├── App.jsx          # Main application component
│   │   └── index.js         # Application entry point
│   ├── package.json         # Frontend dependencies
│   └── tailwind.config.js   # Tailwind CSS configuration
├── Backend/                 # Node.js backend API
│   ├── config/             # Database configuration
│   ├── models/             # MongoDB schemas
│   ├── router/             # API routes
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
└── README.md               # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB database (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd MY_PORTFOLIO
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd Frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../Backend
   npm install
   ```

### Environment Setup

1. **Backend Environment Variables**
   
   Create a `.env` file in the `Backend` directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   SENDGRID_API_KEY=your_sendgrid_api_key
   PORT=4000
   ```

2. **Frontend Environment Variables**
   
   Create a `.env` file in the `Frontend` directory:
   ```env
   REACT_APP_API_URL=http://localhost:4000
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd Backend
   npm start
   ```
   The backend will run on `http://localhost:4000`

2. **Start the Frontend Development Server**
   ```bash
   cd Frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser** and navigate to `http://localhost:3000`

## 📱 Available Scripts

### Frontend Scripts
```bash
npm start          # Start development server
npm run build      # Build for production
npm run eject      # Eject from Create React App
```

### Backend Scripts
```bash
npm start          # Start server with nodemon
npm run dev        # Start development server
```

## 🌐 Live Demo

Visit the live portfolio: **[My Portfolio](https://dil-raj-portfolio.onrender.com/)**

## 📸 Screenshots

[Add screenshots of your portfolio here]

## 🔧 Configuration

### Tailwind CSS Configuration

The project uses Tailwind CSS for styling. You can customize the design by modifying `Frontend/tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom theme extensions
    },
  },
  plugins: [],
}
```

### Database Configuration

Update the MongoDB connection in `Backend/config/database.js`:

```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## 📧 Contact Form Setup

The contact form uses SendGrid for email delivery. To set up:

1. Create a SendGrid account
2. Generate an API key
3. Add the API key to your backend environment variables
4. Update the email template in `Backend/template.js`

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Build the project:
   ```bash
   cd Frontend
   npm run build
   ```

2. Deploy the `build` folder to your preferred hosting service

### Backend Deployment (Render/Railway)

1. Set environment variables on your hosting platform
2. Deploy the `Backend` folder
3. Update the frontend API URL to point to your deployed backend

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Dil Raj**
- GitHub: [@your-github-username](https://github.com/your-github-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- Portfolio: [Live Portfolio](https://dil-raj-portfolio.onrender.com/)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [React Icons](https://react-icons.github.io/react-icons/) - Popular icon library
- [SendGrid](https://sendgrid.com/) - Email delivery service

---

⭐ **If you found this project helpful, please give it a star!**
