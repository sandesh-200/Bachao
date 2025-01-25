import express from 'express';
import {
  getAllDisasters,
  getActiveDisasters,
  getDisasterById,
  createDisaster,
  updateDisaster,
  deleteDisaster,
  getDisastersByType,
  getDisastersBySeverity
} from '../controllers/disasterController.js';

const router = express.Router();

// Get all disasters
router.get('/', getAllDisasters);

// Get active disasters
router.get('/active', getActiveDisasters);

// Get disasters by type
router.get('/type/:type', getDisastersByType);

// Get disasters by severity
router.get('/severity/:severity', getDisastersBySeverity);

// Get disaster by ID
router.get('/:id', getDisasterById);

// Create new disaster
router.post('/', createDisaster);

// Update disaster
router.patch('/:id', updateDisaster);

// Delete disaster
router.delete('/:id', deleteDisaster);

export default router;
