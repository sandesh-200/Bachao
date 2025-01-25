import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');

// Load environment variables from the root directory
dotenv.config({ path: join(rootDir, '.env') });

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in environment variables');
    }

    // Clean up the MongoDB URI by properly encoding special characters
    const uri = process.env.MONGO_URI.replace('@', '%40');
    console.log('Attempting to connect to MongoDB...');
    
    const conn = await mongoose.connect(uri);
    console.log('MongoDB Connected Successfully');
    return conn;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
