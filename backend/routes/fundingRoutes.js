import express from 'express';
import { body } from 'express-validator';
import {
  createFunding,
  getAllFundings,
  getFundingById,
  updateFunding,
  deleteFunding,
  getFundingsByDisaster
} from '../controllers/fundingController.js';

const router = express.Router();

// Validation middleware
const fundingValidation = [
  body('title').notEmpty().trim().withMessage('Title is required'),
  body('description').notEmpty().trim().withMessage('Description is required'),
  body('amount').isNumeric().withMessage('Amount must be a number').custom(value => value >= 0),
  body('disasterId').notEmpty().withMessage('Disaster ID is required'),
  body('donor.name').notEmpty().trim().withMessage('Donor name is required'),
  body('donor.email').isEmail().withMessage('Valid donor email is required'),
  body('paymentMethod').isIn(['Bank Transfer', 'Mobile Payment', 'Credit Card', 'Other'])
    .withMessage('Invalid payment method')
];

// Routes
router.post('/', fundingValidation, createFunding);
router.get('/', getAllFundings);
router.get('/:id', getFundingById);
router.put('/:id', fundingValidation, updateFunding);
router.delete('/:id', deleteFunding);
router.get('/disaster/:disasterId', getFundingsByDisaster);

export default router;
