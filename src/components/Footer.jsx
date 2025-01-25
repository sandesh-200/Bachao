import React from 'react';
import { 
  ShieldCheck, 
  Twitter, 
  Facebook, 
  Instagram, 
  MapPin, 
  Mail, 
  Phone 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <ShieldCheck className="mr-2 w-8 h-8" />
            <h3 className="text-2xl font-bold">Bachao</h3>
          </div>
          <p className="text-sm text-blue-100">
            Empowering communities through disaster response and relief efforts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/donation" className="hover:text-blue-200">Donation</Link></li>
            {/* <li><Link to="" className="hover:text-blue-200">Emergency Response</Link></li> */}
            <li><Link to="/about" className="hover:text-blue-200">About Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MapPin className="mr-2 w-4 h-4" />
              Biratnagar, Nepal
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 w-4 h-4" />
              +91 123 456 7890
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 w-4 h-4" />
              support@bachao.org
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-200">
              <Twitter />
            </a>
            <a href="#" className="hover:text-blue-200">
              <Facebook />
            </a>
            <a href="#" className="hover:text-blue-200">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-blue-700 py-4 text-center text-sm">
        © 2024 Bachao. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;