import mongoose from 'mongoose';

const fundingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'NPR'
  },
  disasterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Disaster',
    required: true
  },
  donor: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: String
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  paymentMethod: {
    type: String,
    required: true,
    enum: ['Bank Transfer', 'Mobile Payment', 'Credit Card', 'Other']
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

// Update the updatedAt timestamp before saving
fundingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Funding = mongoose.model('Funding', fundingSchema);

export default Funding;
