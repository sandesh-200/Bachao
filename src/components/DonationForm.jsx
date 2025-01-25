import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

const DonationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    location: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Donation submission logic
    console.log('Donation Submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Disaster Relief Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label>Full Name</Label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
          />
        </div>
        <div>
          <Label>Email Address</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div>
          <Label>Donation Amount (₹)</Label>
          <Input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter donation amount"
            min="100"
            required
          />
        </div>
        <div>
          <Label>Disaster Location</Label>
          <Select 
            name="location" 
            onValueChange={(value) => setFormData(prev => ({...prev, location: value}))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Disaster Location" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="mumbai">Mumbai Floods</SelectItem>
              <SelectItem value="chennai">Chennai Cyclone</SelectItem>
              <SelectItem value="delhi">Delhi Air Quality</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Payment Method</Label>
          <Select 
            name="paymentMethod"
            onValueChange={(value) => setFormData(prev => ({...prev, paymentMethod: value}))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Payment Method" />
            </SelectTrigger>
            <SelectContent className="bg-white" >
              <SelectItem value="esewa">esewa</SelectItem>
              <SelectItem value="khalti">Khalti</SelectItem>
              <SelectItem value="bank">bank</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full">
          Donate Now
        </Button>
      </form>
    </div>
  );
};

export default DonationForm;