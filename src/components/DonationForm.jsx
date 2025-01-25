// import React, { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from '@/components/ui/select';

// const DonationForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     amount: '',
//     location: '',
//     paymentMethod: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Donation submission logic
//     console.log('Donation Submitted:', formData);
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 border rounded-lg">
//       <h2 className="text-xl font-bold mb-4">Disaster Relief Donation</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <Label>Full Name</Label>
//           <Input
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Full Name"
//             required
//           />
//         </div>
//         <div>
//           <Label>Email Address</Label>
//           <Input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="your.email@example.com"
//             required
//           />
//         </div>
//         <div>
//           <Label>Donation Amount (₹)</Label>
//           <Input
//             type="number"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             placeholder="Enter donation amount"
//             min="100"
//             required
//           />
//         </div>
//         <div>
//           <Label>Disaster Location</Label>
//           <Select 
//             name="location" 
//             onValueChange={(value) => setFormData(prev => ({...prev, location: value}))}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="Select Disaster Location" />
//             </SelectTrigger>
//             <SelectContent className="bg-white">
//               <SelectItem value="mumbai">Mumbai Floods</SelectItem>
//               <SelectItem value="chennai">Chennai Cyclone</SelectItem>
//               <SelectItem value="delhi">Delhi Air Quality</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div>
//           <Label>Payment Method</Label>
//           <Select 
//             name="paymentMethod"
//             onValueChange={(value) => setFormData(prev => ({...prev, paymentMethod: value}))}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="Select Payment Method" />
//             </SelectTrigger>
//             <SelectContent className="bg-white" >
//               <SelectItem value="esewa">esewa</SelectItem>
//               <SelectItem value="khalti">Khalti</SelectItem>
//               <SelectItem value="bank">bank</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <Button type="submit" className="w-full">
//           Donate Now
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default DonationForm;

import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/select';
import { 
  CreditCard, 
  UserCircle, 
  MapPin, 
  DollarSign, 
  Mail 
} from 'lucide-react';

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
    console.log('Donation Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center">
            <CreditCard className="mr-3" />
            Disaster Relief Donation
          </h2>
          <p className="text-sm text-blue-100 mt-2">
            Your contribution can make a significant difference
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <Label className="flex items-center mb-2">
              <UserCircle className="mr-2 text-gray-500" />
              Full Name
            </Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="border-gray-300 focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <Label className="flex items-center mb-2">
              <Mail className="mr-2 text-gray-500" />
              Email Address
            </Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="border-gray-300 focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <Label className="flex items-center mb-2">
              <DollarSign className="mr-2 text-gray-500" />
              Donation Amount (₹)
            </Label>
            <Input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              placeholder="Enter donation amount"
              min="100"
              className="border-gray-300 focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <Label className="flex items-center mb-2">
              <MapPin className="mr-2 text-gray-500" />
              Disaster Location
            </Label>
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
            <Label className="flex items-center mb-2">
              <CreditCard className="mr-2 text-gray-500" />
              Payment Method
            </Label>
            <Select 
              name="paymentMethod"
              onValueChange={(value) => setFormData(prev => ({...prev, paymentMethod: value}))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Payment Method" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="esewa">Esewa</SelectItem>
                <SelectItem value="khalti">Khalti</SelectItem>
                <SelectItem value="bank">Bank Transfer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
          >
            Donate Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DonationForm;