import Disaster from '../models/disaster.js';

// Get all disasters
export const getAllDisasters = async (req, res) => {
  try {
    const disasters = await Disaster.find().sort({ createdAt: -1 });
    res.json(disasters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get active disasters
export const getActiveDisasters = async (req, res) => {
  try {
    const disasters = await Disaster.find({ status: 'Active' }).sort({ createdAt: -1 });
    res.json(disasters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get disaster by ID
export const getDisasterById = async (req, res) => {
  try {
    const disaster = await Disaster.findById(req.params.id);
    if (!disaster) {
      return res.status(404).json({ message: 'Disaster not found' });
    }
    res.json(disaster);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new disaster
export const createDisaster = async (req, res) => {
  const disaster = new Disaster({
    ...req.body,
    createdAt: new Date(),
    updatedAt: new Date()
  });

  try {
    const newDisaster = await disaster.save();
    res.status(201).json(newDisaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update disaster
export const updateDisaster = async (req, res) => {
  try {
    const disaster = await Disaster.findById(req.params.id);
    if (!disaster) {
      return res.status(404).json({ message: 'Disaster not found' });
    }

    Object.keys(req.body).forEach(key => {
      disaster[key] = req.body[key];
    });
    disaster.updatedAt = new Date();

    const updatedDisaster = await disaster.save();
    res.json(updatedDisaster);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete disaster
export const deleteDisaster = async (req, res) => {
  try {
    const disaster = await Disaster.findById(req.params.id);
    if (!disaster) {
      return res.status(404).json({ message: 'Disaster not found' });
    }
    await disaster.deleteOne();
    res.json({ message: 'Disaster deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get disasters by type
export const getDisastersByType = async (req, res) => {
  try {
    const disasters = await Disaster.find({ type: req.params.type }).sort({ createdAt: -1 });
    res.json(disasters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get disasters by severity
export const getDisastersBySeverity = async (req, res) => {
  try {
    const disasters = await Disaster.find({ severity: req.params.severity }).sort({ createdAt: -1 });
    res.json(disasters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
