import React, { useState } from 'react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Label } from '../components/ui/label';
import { 
  UserCircle, 
  Smartphone, 
  Mail, 
  ShieldCheck 
} from 'lucide-react';

const RegistrationForm = () => {
  const [stage, setStage] = useState('registration');
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    otp: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendOTP = (e) => {
    e.preventDefault();
    // Simulated OTP send logic
    if (formData.number) {
      console.log('OTP sent to', formData.number);
      setStage('verify-otp');
    }
  };

  const handleVerifyOTP = (e) => {
    e.preventDefault();
    // Simulated OTP verification logic
    if (formData.otp === '123456') {
      console.log('User Registered:', formData);
      setStage('success');
    } else {
      alert('Invalid OTP');
    }
  };

  const renderContent = () => {
    switch(stage) {
      case 'registration':
        return (
          <>
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
                <Smartphone className="mr-2 text-gray-500" />
                Phone Number
              </Label>
              <Input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="border-gray-300 focus:ring-2 focus:ring-blue-300"
                required
              />
            </div>
            <div>
              <Label className="flex items-center mb-2">
                <Mail className="mr-2 text-gray-500" />
                Email (Optional)
              </Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="border-gray-300 focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <Button 
              onClick={handleSendOTP} 
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Send OTP
            </Button>
          </>
        );
      
      case 'verify-otp':
        return (
          <>
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">Verify OTP</h3>
              <p className="text-sm text-gray-600">
                Enter the 6-digit code sent to {formData.number}
              </p>
            </div>
            <div>
              <Label className="flex items-center mb-2">
                <ShieldCheck className="mr-2 text-gray-500" />
                OTP
              </Label>
              <Input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                placeholder="Enter 6-digit OTP"
                maxLength="6"
                className="border-gray-300 focus:ring-2 focus:ring-blue-300 text-center tracking-[0.5em]"
                required
              />
            </div>
            <Button 
              onClick={handleVerifyOTP} 
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
            >
              Verify OTP
            </Button>
            <div className="text-center mt-2">
              <button 
                type="button" 
                onClick={() => setStage('registration')}
                className="text-sm text-blue-600 hover:underline"
              >
                Resend OTP
              </button>
            </div>
          </>
        );
      
      case 'success':
        return (
          <div className="text-center">
            <ShieldCheck className="mx-auto mb-4 w-16 h-16 text-green-500" />
            <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
            <p className="text-gray-600">You can now access your account</p>
            <Button 
              className="mt-4 w-full bg-green-500 hover:bg-green-600"
            >
              Continue to Dashboard
            </Button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white">
          <h2 className="text-2xl font-bold flex items-center">
            <UserCircle className="mr-3" />
            User Registration
          </h2>
        </div>
        <form className="p-6 space-y-4">
          {renderContent()}
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;