import React, { useState, useEffect } from "react";
import { Bell, Menu, Search, User, Cloud } from 'lucide-react';
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import logo from '../assets/logoo.png'
import '@fontsource/quicksand'
import DisasterAlert from "./DisasterAlert";

const Navbar = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchWeather = async (searchCity) => {
    if (!searchCity) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=4f35eb5fc22c10951cefea63a0d2bf80`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
        setIsModalOpen(true);
      } else {
        console.error('Weather fetch failed:', data.message);
        setWeather(null);
      }
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeather(null);
    }
    setLoading(false);
  };

  const handleWeatherSearch = (e) => {
    if (e.key === 'Enter') {
      fetchWeather(city);
    }
  };

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
          <Link to="/resources" className="hover:text-gray-300 text-lg ">Resources</Link>
          <Link to="/reports" className="hover:text-gray-300 text-lg ">Reports</Link>
          <Link to="/contact" className="hover:text-gray-300 text-lg">Contact</Link>
          <Link to="/about" className="hover:text-gray-300 text-lg ">About</Link>
        </div>

        {/* Search Bar - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Weather Widget */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search city..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                onKeyPress={handleWeatherSearch}
                className="w-40 bg-gray-800 text-white border-gray-700 focus:border-red-500 pr-8"
              />
              <Cloud className="h-4 w-4 absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogContent className="bg-gray-900 text-white border-gray-700">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold">
                    Weather in {weather?.name}, {weather?.sys.country}
                  </DialogTitle>
                </DialogHeader>
                {weather && (
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <img 
                          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                          alt={weather.weather[0].description}
                          className="w-16 h-16"
                        />
                        <div>
                          <div className="text-3xl font-bold">{Math.round(weather.main.temp)}°C</div>
                          <div className="text-gray-400 capitalize">{weather.weather[0].description}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <div className="text-gray-400 text-sm">Feels Like</div>
                        <div className="text-lg font-semibold">{Math.round(weather.main.feels_like)}°C</div>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <div className="text-gray-400 text-sm">Humidity</div>
                        <div className="text-lg font-semibold">{weather.main.humidity}%</div>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <div className="text-gray-400 text-sm">Wind Speed</div>
                        <div className="text-lg font-semibold">{Math.round(weather.wind.speed)} m/s</div>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <div className="text-gray-400 text-sm">Pressure</div>
                        <div className="text-lg font-semibold">{weather.main.pressure} hPa</div>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
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
