import React from "react";
import { Bell, Menu, Search, User } from 'lucide-react';
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import logo from '../assets/logoo.png'
import '@fontsource/quicksand'
import DisasterAlert from "./DisasterAlert";

const Navbar = () => {

  return (
    <nav className="bg-gray-900 text-white p-4 font-quicksand h-15 flex">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="items-center">
          <Link to='/' className=" flex -space-x-2.5 items-center">
            <img src={logo} alt="logo" height='60px' width='60px' className="object-cover pt-2 "/>
            <span className="text-xl font-bold">Bachaoo</span>
          </Link>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/" className="hover:text-gray-300 text-lg">Home</Link>
          <Link to="/alerts" className="hover:text-gray-300 text-lg ">Alerts</Link>
          <Link to="/resources" className="hover:text-gray-300 text-lg ">Resources</Link>
          <Link to="/reports" className="hover:text-gray-300 text-lg ">Reports</Link>
          <Link to="/contact" className="hover:text-gray-300 text-lg">Contact</Link>
          <Link to="/about" className="hover:text-gray-300 text-lg ">About</Link>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-2">
          <Input
            type="search"
            placeholder="Search..."
            className="w-64 bg-gray-800 text-white border-gray-700 focus:border-red-500"
          />
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>

        {/* Notifications and User Profile */}
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button> */}
          <div className="mr-2">
            <DisasterAlert />
          </div>
          <Link to='/register'>
          <Button 
          variant='outline' 
          className='cursor-pointer'
          >
            Register
          </Button>
            </Link>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
