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

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <a href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8  text-blue-300"
            >
              <path d="M15.5 12a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
              <path
                fillRule="evenodd"
                d="M12 3.5c-3.432 0-6.125 1.534-8.054 3.24C2.02 8.445.814 10.352.33 11.202a2.25 2.25 0 000 1.599c.484.85 1.69 2.758 3.616 4.46C5.875 18.966 8.568 20.5 12 20.5c3.432 0 6.125-1.534 8.054-3.24 1.926-1.704 3.132-3.611 3.616-4.461a2.25 2.25 0 000-1.599c-.484-.85-1.69-2.757-3.616-4.46C18.125 5.034 15.432 3.5 12 3.5zM1.633 11.945c.441-.774 1.551-2.528 3.307-4.08C6.69 6.314 9.045 5 12 5c2.955 0 5.309 1.315 7.06 2.864 1.756 1.553 2.866 3.307 3.307 4.08a.75.75 0 01.001.499c-.441.774-1.551 2.527-3.307 4.08C17.31 17.685 14.955 19 12 19c-2.955 0-5.309-1.315-7.06-2.864-1.756-1.553-2.866-3.306-3.307-4.08a.75.75 0 01.001-.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xl font-bold">DisasterWatch</span>
          </a>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex space-x-4">
          <a href="/dashboard" className="hover:text-gray-300">Dashboard</a>
          <a href="/alerts" className="hover:text-gray-300">Alerts</a>
          <a href="/resources" className="hover:text-gray-300">Resources</a>
          <a href="/reports" className="hover:text-gray-300">Reports</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
          <a href="/about" className="hover:text-gray-300">About</a>
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
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
