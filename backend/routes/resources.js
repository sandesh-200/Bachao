import express from 'express';
import {
  getAllResources,
  getAvailableResources,
  getResourceById,
  createResource,
  updateResource,
  deleteResource,
  getResourcesByType,
  getLowStockResources
} from '../controllers/resourceController.js';

const router = express.Router();

// Get all resources
router.get('/', getAllResources);

// Get available resources
router.get('/available', getAvailableResources);

// Get low stock resources
router.get('/low-stock', getLowStockResources);

// Get resources by type
router.get('/type/:type', getResourcesByType);

// Get resource by ID
router.get('/:id', getResourceById);

// Create new resource
router.post('/', createResource);

// Update resource
router.patch('/:id', updateResource);

// Delete resource
router.delete('/:id', deleteResource);

export default router;
