import express from 'express';
import {
  createContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';

const router = express.Router();

// Public routes
router.post('/', createContact);

// Admin routes (these should be protected with authentication middleware)
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.patch('/:id/status', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
