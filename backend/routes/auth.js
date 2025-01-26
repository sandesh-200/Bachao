import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    // Check if user already exists
    let user = await User.findOne({ phone });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate OTP
    const otp = generateOTP();
    const otpExpiry = new Date();
    otpExpiry.setMinutes(otpExpiry.getMinutes() + 10); // OTP valid for 10 minutes

    // Create new user
    user = new User({
      name,
      phone,
      email,
      otp: {
        code: otp,
        expiresAt: otpExpiry
      }
    });

    await user.save();

    // For development, send OTP in response
    console.log('Development OTP:', otp);
    res.json({ 
      message: 'OTP sent successfully',
      // Remove this in production
      otp: otp 
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration' });
  }
});

// Verify OTP route
router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp } = req.body;

    // Find user by phone
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if OTP exists and is valid
    if (!user.otp || !user.otp.code) {
      return res.status(400).json({ message: 'No OTP was sent' });
    }

    // Check if OTP has expired
    if (user.otp.expiresAt < new Date()) {
      return res.status(400).json({ message: 'OTP has expired' });
    }

    // Verify OTP
    if (user.otp.code !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    // Mark user as verified
    user.isVerified = true;
    user.otp = undefined; // Clear OTP after successful verification
    await user.save();

    res.json({ message: 'OTP verified successfully' });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({ message: 'Server error during OTP verification' });
  }
});

export default router;
