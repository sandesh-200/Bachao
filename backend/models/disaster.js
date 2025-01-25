import mongoose from 'mongoose';

const disasterSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['Earthquake', 'Flood', 'Landslide', 'Fire', 'Other']
  },
  location: {
    type: String,
    required: true
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  severity: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High', 'Critical']
  },
  description: {
    type: String,
    required: true
  },
  affectedAreas: [{
    type: String
  }],
  casualties: {
    injured: { type: Number, default: 0 },
    deceased: { type: Number, default: 0 },
    missing: { type: Number, default: 0 }
  },
  resourcesNeeded: [{
    type: String
  }],
  status: {
    type: String,
    required: true,
    enum: ['Active', 'Contained', 'Resolved'],
    default: 'Active'
  },
  reportedBy: {
    name: String,
    contact: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Disaster = mongoose.model('Disaster', disasterSchema);
export default Disaster;
