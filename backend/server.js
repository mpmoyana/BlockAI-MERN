// backend/server.js

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const blockRoutes = require('./routes/blockRoutes');
const authRoutes = require('./routes/authRoutes'); // Import auth routes

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Blockchain & AI MERN Project Server is running');
});

// Blockchain routes
app.use('/api/blockchain', blockRoutes);

// Authentication routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
