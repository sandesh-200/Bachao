import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Medical', 'Food', 'Water', 'Shelter', 'Clothing', 'Other']
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Available', 'Low', 'Depleted'],
    default: 'Available'
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const Resource = mongoose.model('Resource', resourceSchema);
export default Resource;
