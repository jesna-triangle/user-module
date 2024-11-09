const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const userRoutes = require('../user-module/src/userRoute');

// dotenv.config();

const app = express();
app.use(express.json());


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) { 
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

connectDB();


app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
