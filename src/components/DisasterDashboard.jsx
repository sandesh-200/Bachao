// "use client"

// import React, { useState, useEffect } from "react"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// import { Badge } from "@/components/ui/badge"
// import { Card, CardContent } from "@/components/ui/card"
// import { MapPin, CheckCircle2, Waves, Wind, CloudRain } from "lucide-react"

// const dummyLocations = [
//   {
//     name: "Mumbai City Center",
//     status: "critical",
//     description: "Severe flooding across multiple districts. Immediate evacuation needed.",
//     coordinates: [19.076, 72.8777],
//     icon: <Waves className="w-10 h-10 text-red-500" />,
//     additionalInfo: {
//       waterLevel: "5.2m",
//       evacuationZones: 3,
//     },
//   },
//   {
//     name: "Chennai Coastal Area",
//     status: "warning",
//     description: "High tide warning. Potential storm surge expected.",
//     coordinates: [13.0827, 80.2707],
//     icon: <CloudRain className="w-10 h-10 text-yellow-500" />,
//     additionalInfo: {
//       stormIntensity: "High",
//       expectedRainfall: "250mm",
//     },
//   },
//   {
//     name: "Bangalore Tech Hub",
//     status: "normal",
//     description: "No immediate disaster risks. Normal conditions.",
//     coordinates: [12.9716, 77.5946],
//     icon: <CheckCircle2 className="w-10 h-10 text-green-500" />,
//     additionalInfo: {
//       airQuality: "Good",
//       temperature: "28°C",
//     },
//   },
//   {
//     name: "Delhi NCR Region",
//     status: "warning",
//     description: "Air quality deteriorating. Possible environmental hazard.",
//     coordinates: [28.6139, 77.209],
//     icon: <Wind className="w-10 h-10 text-orange-500" />,
//     additionalInfo: {
//       pollutionIndex: "Unhealthy",
//       windSpeed: "12 km/h",
//     },
//   },
// ]

// const DisasterDashboard = () => {
//   const [selectedLocation, setSelectedLocation] = useState(dummyLocations[0])
//   const [carouselApi, setCarouselApi] = useState(null)

//   const handleSlideChange = (api) => {
//     if (!api) return
//     const currentIndex = api.selectedScrollSnap()
//     setSelectedLocation(dummyLocations[currentIndex])
//   }

//   useEffect(() => {
//     if (!carouselApi) return

//     const handleSelect = () => {
//       handleSlideChange(carouselApi)
//     }

//     carouselApi.on("select", handleSelect)

//     const interval = setInterval(() => {
//       const nextIndex = (carouselApi.selectedScrollSnap() + 1) % dummyLocations.length
//       carouselApi.scrollTo(nextIndex)
//     }, 5000)

//     return () => {
//       clearInterval(interval)
//       carouselApi.off("select", handleSelect)
//     }
//   }, [carouselApi])

//   const statusColors = {
//     warning: {
//       card: "border-yellow-200 bg-yellow-50",
//       badge: "bg-yellow-100 text-yellow-800",
//     },
//     critical: {
//       card: "border-red-200 bg-red-50",
//       badge: "bg-red-100 text-red-800",
//     },
//     normal: {
//       card: "border-green-200 bg-green-50",
//       badge: "bg-green-100 text-green-800",
//     },
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
//       <Card className="w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">
//         <CardContent className="p-0">
//           <div className="grid md:grid-cols-2 gap-4">
//             {/* Location Carousel */}
//             <div className="p-6">
//               <Carousel className="w-full" opts={{ align: "start" }} setApi={setCarouselApi}>
//                 <CarouselContent>
//                   {dummyLocations.map((location, index) => (
//                     <CarouselItem key={index}>
//                       <div
//                         className={`
//                         p-6 rounded-xl border-2 transition-all duration-300 
//                         ${statusColors[location.status].card} 
//                         hover:shadow-lg hover:scale-105
//                       `}
//                       >
//                         <div className="flex items-center mb-4">
//                           {location.icon}
//                           <h2 className="ml-4 text-2xl font-bold text-gray-800">{location.name}</h2>
//                         </div>

//                         <div className="flex justify-between items-center mb-4">
//                           <Badge
//                             className={`
//                               ${statusColors[location.status].badge} 
//                               px-3 py-1 text-sm font-semibold
//                             `}
//                           >
//                             {location.status.toUpperCase()}
//                           </Badge>
//                           <div className="flex items-center text-gray-600">
//                             <MapPin className="mr-2 w-5 h-5" />
//                             <span>{location.coordinates.join(", ")}</span>
//                           </div>
//                         </div>

//                         <p className="text-gray-700 mb-4">{location.description}</p>

//                         <div className="grid grid-cols-2 gap-2">
//                           {Object.entries(location.additionalInfo).map(([key, value]) => (
//                             <div key={key} className="bg-white/50 p-2 rounded-md">
//                               <p className="text-xs text-gray-500 uppercase">{key}</p>
//                               <p className="font-semibold">{value}</p>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </CarouselItem>
//                   ))}
//                 </CarouselContent>
//                 <div className="flex justify-center space-x-2 mt-4">
//                   <CarouselPrevious />
//                   <CarouselNext />
//                 </div>
//               </Carousel>
//             </div>

//             {/* Map */}
//             <div className="p-6">
//               <div className="h-full rounded-xl overflow-hidden shadow-lg">
//                 <iframe
//                   title={`Map of ${selectedLocation.name}`}
//                   width="100%"
//                   height="100%"
//                   frameBorder="0"
//                   scrolling="no"
//                   marginHeight="0"
//                   marginWidth="0"
//                   src={`https://maps.google.com/maps?q=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}&z=12&output=embed`}
//                   className="w-full h-full"
//                 />
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// export default DisasterDashboard


"use client"
import React, { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, CheckCircle2, Waves, Wind, CloudRain, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

const dummyLocations = [
  {
    name: "Mumbai City Center",
    status: "critical",
    description: "Severe flooding across multiple districts. Immediate evacuation needed.",
    coordinates: [19.076, 72.8777],
    icon: <Waves className="w-10 h-10 text-red-500" />,
    additionalInfo: {
      waterLevel: "5.2m",
      evacuationZones: 3,
    },
  },
  {
    name: "Chennai Coastal Area",
    status: "warning",
    description: "High tide warning. Potential storm surge expected.",
    coordinates: [13.0827, 80.2707],
    icon: <CloudRain className="w-10 h-10 text-yellow-500" />,
    additionalInfo: {
      stormIntensity: "High",
      expectedRainfall: "250mm",
    },
  },
  {
    name: "Bangalore Tech Hub",
    status: "normal",
    description: "No immediate disaster risks. Normal conditions.",
    coordinates: [12.9716, 77.5946],
    icon: <CheckCircle2 className="w-10 h-10 text-green-500" />,
    additionalInfo: {
      airQuality: "Good",
      temperature: "28°C",
    },
  },
  {
    name: "Delhi NCR Region",
    status: "warning",
    description: "Air quality deteriorating. Possible environmental hazard.",
    coordinates: [28.6139, 77.209],
    icon: <Wind className="w-10 h-10 text-orange-500" />,
    additionalInfo: {
      pollutionIndex: "Unhealthy",
      windSpeed: "12 km/h",
    },
  }
]

const DisasterDashboard = () => {
  const [selectedLocation, setSelectedLocation] = useState(dummyLocations[0])
  const [carouselApi, setCarouselApi] = useState(null)

  const handleSlideChange = (api) => {
    if (!api) return
    const currentIndex = api.selectedScrollSnap()
    setSelectedLocation(dummyLocations[currentIndex])
  }

  useEffect(() => {
    if (!carouselApi) return
    const handleSelect = () => {
      handleSlideChange(carouselApi)
    }
    carouselApi.on("select", handleSelect)
    const interval = setInterval(() => {
      const nextIndex = (carouselApi.selectedScrollSnap() + 1) % dummyLocations.length
      carouselApi.scrollTo(nextIndex)
    }, 5000)
    return () => {
      clearInterval(interval)
      carouselApi.off("select", handleSelect)
    }
  }, [carouselApi])

  const statusColors = {
    warning: {
      background: "bg-yellow-50 border-yellow-200",
      badge: "bg-yellow-100 text-yellow-800",
      animation: {
        initial: { scale: 1 },
        animate: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 1.5 } }
      }
    },
    critical: {
      background: "bg-red-50 border-red-200",
      badge: "bg-red-100 text-red-800",
      animation: {
        initial: { scale: 1, rotate: 0 },
        animate: { 
          scale: [1, 1.1, 1], 
          rotate: [0, 5, -5, 0],
          transition: { repeat: Infinity, duration: 1 } 
        }
      }
    },
    normal: {
      background: "bg-green-50 border-green-200",
      badge: "bg-green-100 text-green-800",
      animation: {
        initial: { opacity: 1 },
        animate: { opacity: [1, 0.7, 1], transition: { repeat: Infinity, duration: 2 } }
      }
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 overflow-hidden"
    >
      <motion.div
        {...statusColors[selectedLocation.status].animation}
        className={`
          w-full max-w-7xl h-[90vh] grid grid-cols-1 md:grid-cols-2 gap-4 
          ${statusColors[selectedLocation.status].background}
          rounded-3xl shadow-2xl overflow-hidden p-4
        `}
      >
        {/* Location Carousel */}
        <div className="flex flex-col justify-center p-4">
          <Carousel className="w-full" opts={{ align: "start" }} setApi={setCarouselApi}>
            <CarouselContent>
              {dummyLocations.map((location, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`
                      p-6 rounded-2xl border-2 
                      ${statusColors[location.status].background}
                      hover:shadow-xl transition-all duration-300
                    `}
                  >
                    <div className="flex items-center mb-4">
                      {location.icon}
                      <h2 className="ml-4 text-3xl font-bold text-gray-800">{location.name}</h2>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <Badge
                        className={`
                          ${statusColors[location.status].badge} 
                          px-4 py-2 text-base font-bold
                        `}
                      >
                        {location.status.toUpperCase()}
                      </Badge>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="mr-2 w-6 h-6" />
                        <span className="text-lg">{location.coordinates.join(", ")}</span>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 mb-6">{location.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(location.additionalInfo).map(([key, value]) => (
                        <div key={key} className="bg-white/60 p-3 rounded-xl shadow-sm">
                          <p className="text-sm text-gray-500 uppercase mb-1">{key}</p>
                          <p className="text-xl font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center space-x-4 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>

        {/* Map with Irregular Shape */}
        <div className="relative p-4">
          <motion.div
            initial={{ borderRadius: "50%", scale: 0.8 }}
            animate={{ 
              borderRadius: ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50%"],
              scale: [0.8, 1, 0.9]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className={`
              h-full w-full rounded-3xl overflow-hidden shadow-2xl
              ${statusColors[selectedLocation.status].background}
            `}
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
              className="w-full h-full object-cover"
            />
          </motion.div>
          {selectedLocation.status !== 'normal' && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity 
              }}
              className="absolute top-8 right-8"
            >
              <AlertTriangle 
                className={`
                  w-16 h-16 
                  ${selectedLocation.status === 'critical' ? 'text-red-500' : 'text-yellow-500'}
                `} 
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DisasterDashboard
