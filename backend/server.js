import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import disasterRoutes from './routes/disasters.js';
import contactRoutes from './routes/contacts.js';
import fundingRoutes from './routes/fundingRoutes.js';
import authRoutes from './routes/auth.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import http from 'http';
import { initSocket } from './socket.js';

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);

// CORS Configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Middleware
app.use(express.json());

// Initialize Socket.io (must be after middleware setup)
const io = initSocket(server);
console.log('Socket.io initialized');

// Connect to Database
try {
  await connectDB();
  console.log('Database connected successfully');
} catch (error) {
  console.error('Failed to connect to the database:', error.message);
  process.exit(1);
}

// Routes
app.use('/api/disasters', disasterRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/fundings', fundingRoutes);
app.use('/api/auth', authRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Disaster Management Backend is Running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Handle preflight requests
app.options('*', cors());

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Socket.io ready for connections`);
});