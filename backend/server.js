import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import disasterRoutes from './routes/disasters.js';
import resourceRoutes from './routes/resources.js';

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

// Routes
app.use('/api/disasters', disasterRoutes);
app.use('/api/resources', resourceRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Disaster Management Backend is Running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});