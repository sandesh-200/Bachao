import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
try {
  await connectDB();
} catch (error) {
  console.error('Failed to connect to the database:', error.message);
  process.exit(1);
}

// Basic Route
app.get('/', (req, res) => {
  res.send('Disaster Management Backend is Running');
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});