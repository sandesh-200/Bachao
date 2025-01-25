import React from "react"
import { ShieldCheck, Twitter, Facebook, Instagram, MapPin, Mail, Phone } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            <ShieldCheck className="mr-2 w-8 h-8 text-blue-300" />
            <h3 className="text-2xl font-bold">DisasterWatch</h3>
          </div>
          <p className="text-sm text-gray-400">Empowering communities through disaster response and relief efforts.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-300">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-300 transition-colors">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/alerts" className="hover:text-blue-300 transition-colors">
                Alerts
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-blue-300 transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/reports" className="hover:text-blue-300 transition-colors">
                Reports
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-300">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <MapPin className="mr-2 w-4 h-4 text-blue-300" />
              <span className="text-gray-400">Global Headquarters</span>
            </li>
            <li className="flex items-center">
              <Phone className="mr-2 w-4 h-4 text-blue-300" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center">
              <Mail className="mr-2 w-4 h-4 text-blue-300" />
              <span className="text-gray-400">support@disasterwatch.org</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4 text-blue-300">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DisasterWatch. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer

