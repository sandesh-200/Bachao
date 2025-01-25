import Resource from '../models/resource.js';

// Get all resources
export const getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find().sort({ lastUpdated: -1 });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get available resources
export const getAvailableResources = async (req, res) => {
  try {
    const resources = await Resource.find({ status: 'Available' });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get resource by ID
export const getResourceById = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    res.json(resource);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new resource
export const createResource = async (req, res) => {
  const resource = new Resource({
    ...req.body,
    lastUpdated: new Date()
  });

  try {
    const newResource = await resource.save();
    res.status(201).json(newResource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update resource
export const updateResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }

    Object.keys(req.body).forEach(key => {
      resource[key] = req.body[key];
    });
    resource.lastUpdated = new Date();

    const updatedResource = await resource.save();
    res.json(updatedResource);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete resource
export const deleteResource = async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ message: 'Resource not found' });
    }
    await resource.deleteOne();
    res.json({ message: 'Resource deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get resources by type
export const getResourcesByType = async (req, res) => {
  try {
    const resources = await Resource.find({ type: req.params.type }).sort({ lastUpdated: -1 });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get low stock resources
export const getLowStockResources = async (req, res) => {
  try {
    const resources = await Resource.find({ status: 'Low' }).sort({ lastUpdated: -1 });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
