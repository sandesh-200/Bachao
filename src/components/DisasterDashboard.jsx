"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Waves, Wind, CloudRain,Activity,Cloud,Sun } from "lucide-react"

const dummyLocations = [
  {
    name: "Kathmandu Valley",
    status: "alert",
    description: "Moderate earthquake tremors felt. Risk of aftershocks.",
    coordinates: [27.7172, 85.324],
    backgroundImage: "https://source.unsplash.com/random/1600x900?mountains,earthquake",
    icon: <Activity className="w-12 h-12 text-white" />,
  },
  {
    name: "Pokhara Lakeside",
    status: "normal",
    description: "Heavy rainfall but no major disruptions reported.",
    coordinates: [28.2096, 83.9856],
    backgroundImage: "https://source.unsplash.com/random/1600x900?lake,rain",
    icon: <Cloud className="w-12 h-12 text-white" />,
  },
  {
    name: "Lumbini Heritage Site",
    status: "normal",
    description: "Weather conditions stable. Tourist activity unaffected.",
    coordinates: [27.6792, 83.507],
    backgroundImage: "https://source.unsplash.com/random/1600x900?heritage,temple",
    icon: <Sun className="w-12 h-12 text-white" />,
  },
];


const DisasterDashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedLocation, setSelectedLocation] = useState(dummyLocations[0])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyLocations.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setSelectedLocation(dummyLocations[currentIndex])
  }, [currentIndex])

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Map */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedLocation.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <iframe
            title={`Map of ${selectedLocation.name}`}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}&z=12&output=embed`}
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-start p-8 md:p-16">
        <div className="max-w-2xl text-white space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLocation.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                {selectedLocation.icon}
                <h1 className="text-4xl font-bold tracking-tight">{selectedLocation.name}</h1>
              </div>

              <div className="flex items-center space-x-4">
              <div
  className={`
    px-4 py-2 
    ${
      selectedLocation.status === "critical"
        ? "bg-red-500/80"
        : selectedLocation.status === "alert"
        ? "bg-yellow-500/80"
        : "bg-green-500/80"
    }
    rounded-full font-semibold
  `}
>
                  {selectedLocation.status.toUpperCase()}
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedLocation.coordinates.join(", ")}</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed">{selectedLocation.description}</p>

              <button
                className="
                bg-white/20 backdrop-blur-md 
                border border-white/30 
                text-white 
                px-6 py-3 
                rounded-full 
                hover:bg-white/30 
                transition-all
              "
              >
                View Details
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {dummyLocations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default DisasterDashboard

