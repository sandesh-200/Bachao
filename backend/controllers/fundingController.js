import Funding from '../models/funding.js';
import { validationResult } from 'express-validator';

// Create a new funding
export const createFunding = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const funding = new Funding(req.body);
    await funding.save();
    res.status(201).json(funding);
  } catch (error) {
    res.status(500).json({ message: 'Error creating funding', error: error.message });
  }
};

// Get all fundings
export const getAllFundings = async (req, res) => {
  try {
    const fundings = await Funding.find().populate('disasterId');
    res.json(fundings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fundings', error: error.message });
  }
};

// Get funding by ID
export const getFundingById = async (req, res) => {
  try {
    const funding = await Funding.findById(req.params.id).populate('disasterId');
    if (!funding) {
      return res.status(404).json({ message: 'Funding not found' });
    }
    res.json(funding);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching funding', error: error.message });
  }
};

// Update funding
export const updateFunding = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const funding = await Funding.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!funding) {
      return res.status(404).json({ message: 'Funding not found' });
    }
    
    res.json(funding);
  } catch (error) {
    res.status(500).json({ message: 'Error updating funding', error: error.message });
  }
};

// Delete funding
export const deleteFunding = async (req, res) => {
  try {
    const funding = await Funding.findByIdAndDelete(req.params.id);
    if (!funding) {
      return res.status(404).json({ message: 'Funding not found' });
    }
    res.json({ message: 'Funding deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting funding', error: error.message });
  }
};

// Get fundings by disaster ID
export const getFundingsByDisaster = async (req, res) => {
  try {
    const fundings = await Funding.find({ disasterId: req.params.disasterId })
      .populate('disasterId');
    res.json(fundings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching fundings', error: error.message });
  }
};
