// "use client"

// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { MapPin, Waves, Wind, CloudRain } from "lucide-react"

// const dummyLocations = [
//   {
//     name: "Mumbai City Center",
//     status: "critical",
//     description: "Severe flooding across multiple districts. Immediate evacuation needed.",
//     coordinates: [19.076, 72.8777],
//     backgroundImage: "https://source.unsplash.com/random/1600x900?city,flood",
//     icon: <Waves className="w-12 h-12 text-white" />,
//   },
//   {
//     name: "Chennai Coastal Area",
//     status: "warning",
//     description: "High tide warning. Potential storm surge expected.",
//     coordinates: [13.0827, 80.2707],
//     backgroundImage: "https://source.unsplash.com/random/1600x900?ocean,storm",
//     icon: <CloudRain className="w-12 h-12 text-white" />,
//   },
//   {
//     name: "Delhi NCR Region",
//     status: "warning",
//     description: "Air quality deteriorating. Possible environmental hazard.",
//     coordinates: [28.6139, 77.209],
//     backgroundImage: "https://source.unsplash.com/random/1600x900?city,pollution",
//     icon: <Wind className="w-12 h-12 text-white" />,
//   },
// ]

// const DisasterDashboard = () => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [selectedLocation, setSelectedLocation] = useState(dummyLocations[0])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyLocations.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     setSelectedLocation(dummyLocations[currentIndex])
//   }, [currentIndex])

//   return (
//     <div className="w-full h-screen relative overflow-hidden">
//       {/* Background Map */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedLocation.name}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <iframe
//             title={`Map of ${selectedLocation.name}`}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             src={`https://maps.google.com/maps?q=${selectedLocation.coordinates[0]},${selectedLocation.coordinates[1]}&z=12&output=embed`}
//             className="absolute inset-0 w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content Overlay */}
//       <div className="relative z-10 w-full h-full flex items-center justify-start p-8 md:p-16">
//         <div className="max-w-2xl text-white space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedLocation.name}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-4"
//             >
//               <div className="flex items-center space-x-4">
//                 {selectedLocation.icon}
//                 <h1 className="text-4xl font-bold tracking-tight">{selectedLocation.name}</h1>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div
//                   className={`
//                   px-4 py-2 
//                   ${selectedLocation.status === "critical" ? "bg-red-500/80" : "bg-yellow-500/80"}
//                   rounded-full font-semibold
//                 `}
//                 >
//                   {selectedLocation.status.toUpperCase()}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-5 h-5" />
//                   <span>{selectedLocation.coordinates.join(", ")}</span>
//                 </div>
//               </div>

//               <p className="text-xl leading-relaxed">{selectedLocation.description}</p>

//               <button
//                 className="
//                 bg-white/20 backdrop-blur-md 
//                 border border-white/30 
//                 text-white 
//                 px-6 py-3 
//                 rounded-full 
//                 hover:bg-white/30 
//                 transition-all
//               "
//               >
//                 View Details
//               </button>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {dummyLocations.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`
//               w-3 h-3 rounded-full transition-all duration-300
//               ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DisasterDashboard


// "use client"

// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { MapPin, Waves, Wind, CloudRain } from "lucide-react"
// import { useDisasterContext } from './context/disaster/disasterContext'
// import { fetchDisasters } from '../components/context/disaster/disasterActions'

// const getDisasterIcon = (type) => {
//   switch (type) {
//     case 'Flood': return <Waves className="w-12 h-12 text-white" />;
//     case 'Fire': return <Wind className="w-12 h-12 text-white" />;
//     default: return <CloudRain className="w-12 h-12 text-white" />;
//   }
// }

// const DisasterDashboard = () => {
//   const { state, dispatch } = useDisasterContext();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedLocation, setSelectedLocation] = useState(null);

//   useEffect(() => {
//     dispatch(fetchDisasters());
//   }, [dispatch]);

//   useEffect(() => {
//     if (state.disasters.length > 0) {
//       setSelectedLocation(state.disasters[currentIndex]);
//     }
//   }, [state.disasters, currentIndex]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => 
//         (prevIndex + 1) % state.disasters.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [state.disasters.length]);

//   if (state.loading) return <div>Loading...</div>;
//   if (state.error) return <div>Error: {state.error}</div>;
//   if (state.disasters.length === 0) return <div>No disasters found</div>;

//   return (
//     <div className="w-full h-screen relative overflow-hidden">
//       {/* Background Map */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedLocation.location}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <iframe
//             title={`Map of ${selectedLocation.location}`}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             src={`https://maps.google.com/maps?q=${selectedLocation.coordinates.latitude},${selectedLocation.coordinates.longitude}&z=12&output=embed`}
//             className="absolute inset-0 w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content Overlay */}
//       <div className="relative z-10 w-full h-full flex items-center justify-start p-8 md:p-16">
//         <div className="max-w-2xl text-white space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedLocation.location}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-4"
//             >
//               <div className="flex items-center space-x-4">
//                 {getDisasterIcon(selectedLocation.type)}
//                 <h1 className="text-4xl font-bold tracking-tight">{selectedLocation.location}</h1>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div
//                   className={`
//                   px-4 py-2 
//                   ${selectedLocation.severity === "Critical" ? "bg-red-500/80" : "bg-yellow-500/80"}
//                   rounded-full font-semibold
//                 `}
//                 >
//                   {selectedLocation.severity.toUpperCase()}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-5 h-5" />
//                   <span>{`${selectedLocation.coordinates.latitude}, ${selectedLocation.coordinates.longitude}`}</span>
//                 </div>
//               </div>

//               <p className="text-xl leading-relaxed">{selectedLocation.description}</p>

//               <button
//                 className="
//                 bg-white/20 backdrop-blur-md 
//                 border border-white/30 
//                 text-white 
//                 px-6 py-3 
//                 rounded-full 
//                 hover:bg-white/30 
//                 transition-all
//               "
//               >
//                 View Details
//               </button>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {state.disasters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`
//               w-3 h-3 rounded-full transition-all duration-300
//               ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DisasterDashboard



// import React, { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { MapPin, Waves, Wind, CloudRain } from "lucide-react"
// import { useDisasterContext } from "./context/disaster/disasterContext"
// import { fetchDisasters } from "./context/disaster/disasterActions"

// const DisasterDashboard = () => {
//   const { state, dispatch } = useDisasterContext()
//   console.log(state)
//   const { disasters, loading, error } = state

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [selectedDisaster, setSelectedDisaster] = useState(null)

//   useEffect(() => {
//     fetchDisasters(dispatch)
//   }, [dispatch])

//   useEffect(() => {
//     if (disasters.length > 0) {
//       setSelectedDisaster(disasters[currentIndex])
//     }
//   }, [currentIndex, disasters])

//   useEffect(() => {
//     if (disasters.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % disasters.length)
//       }, 5000)

//       return () => clearInterval(interval)
//     }
//   }, [disasters])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

//   if (!selectedDisaster) {
//     return <div>No disasters found.</div>
//   }

//   const getIcon = (type) => {
//     switch (type) {
//       case "Flood":
//         return <Waves className="w-12 h-12 text-white" />
//       case "Fire":
//         return <CloudRain className="w-12 h-12 text-white" />
//       default:
//         return <Wind className="w-12 h-12 text-white" />
//     }
//   }

//   return (
//     <div className="w-full h-screen relative overflow-hidden">
//       {/* Background Map */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedDisaster._id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <iframe
//             title={`Map of ${selectedDisaster.location}`}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             src={`https://maps.google.com/maps?q=${selectedDisaster.coordinates.latitude},${selectedDisaster.coordinates.longitude}&z=12&output=embed`}
//             className="absolute inset-0 w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content Overlay */}
//       <div className="relative z-10 w-full h-full flex items-center justify-start p-8 md:p-16">
//         <div className="max-w-2xl text-white space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedDisaster._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-4"
//             >
//               <div className="flex items-center space-x-4">
//                 {getIcon(selectedDisaster.type)}
//                 <h1 className="text-4xl font-bold tracking-tight">{selectedDisaster.location}</h1>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div
//                   className={`
//                   px-4 py-2 
//                   ${selectedDisaster.severity === "Critical" ? "bg-red-500/80" : "bg-yellow-500/80"}
//                   rounded-full font-semibold
//                 `}
//                 >
//                   {selectedDisaster.severity.toUpperCase()}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-5 h-5" />
//                   <span>{`${selectedDisaster.coordinates.latitude}, ${selectedDisaster.coordinates.longitude}`}</span>
//                 </div>
//               </div>

//               <p className="text-xl leading-relaxed">{selectedDisaster.description}</p>

//               <button
//                 className="
//                 bg-white/20 backdrop-blur-md 
//                 border border-white/30 
//                 text-white 
//                 px-6 py-3 
//                 rounded-full 
//                 hover:bg-white/30 
//                 transition-all
//               "
//               >
//                 View Details
//               </button>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {disasters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`
//               w-3 h-3 rounded-full transition-all duration-300
//               ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DisasterDashboard

// import React, { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { MapPin, Waves, Wind, CloudRain } from "lucide-react"
// import { useDisasterContext } from "./context/disaster/disasterContext"
// import { fetchDisasters } from "./context/disaster/disasterActions"

// const DisasterDashboard = () => {
//   const { state, dispatch } = useDisasterContext()
//   const { disasters, loading, error } = state

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [selectedDisaster, setSelectedDisaster] = useState(null)

//   useEffect(() => {
//     fetchDisasters(dispatch)
//   }, [dispatch])

//   useEffect(() => {
//     if (disasters.length > 0) {
//       setSelectedDisaster(disasters[currentIndex])
//     }
//   }, [currentIndex, disasters])

//   useEffect(() => {
//     if (disasters.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % disasters.length)
//       }, 5000)

//       return () => clearInterval(interval)
//     }
//   }, [disasters])

//   if (loading) {
//     return <div>Loading...</div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

//   if (!selectedDisaster) {
//     return <div>No disasters found.</div>
//   }

//   const getIcon = (type) => {
//     switch (type) {
//       case "Flood":
//         return <Waves className="w-12 h-12 text-white" />
//       case "Fire":
//         return <CloudRain className="w-12 h-12 text-white" />
//       default:
//         return <Wind className="w-12 h-12 text-white" />
//     }
//   }

//   return (
//     <div className="w-full h-screen relative overflow-hidden">
//       {/* Background Map */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedDisaster._id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <iframe
//             title={`Map of ${selectedDisaster.location}`}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             src={`https://maps.google.com/maps?q=${selectedDisaster.coordinates.latitude},${selectedDisaster.coordinates.longitude}&z=12&output=embed`}
//             className="absolute inset-0 w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content Overlay */}
//       <div className="relative z-10 w-full h-full flex items-center justify-start p-8 md:p-16">
//         <div className="w-[32rem] text-white space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedDisaster._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-4"
//             >
//               <div className="flex items-center space-x-4">
//                 {getIcon(selectedDisaster.type)}
//                 <h1 className="text-4xl font-bold tracking-tight">{selectedDisaster.location}</h1>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div
//                   className={`
//                   px-4 py-2 
//                   ${selectedDisaster.severity === "Critical" ? "bg-red-500/80" : "bg-yellow-500/80"}
//                   rounded-full font-semibold
//                 `}
//                 >
//                   {selectedDisaster.severity.toUpperCase()}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-5 h-5" />
//                   <span>{`${selectedDisaster.coordinates.latitude}, ${selectedDisaster.coordinates.longitude}`}</span>
//                 </div>
//               </div>

//               <p className="text-xl leading-relaxed">{selectedDisaster.description}</p>

//               <button
//                 className="
//                 bg-white/20 backdrop-blur-md 
//                 border border-white/30 
//                 text-white 
//                 px-6 py-3 
//                 rounded-full 
//                 hover:bg-white/30 
//                 transition-all
//               "
//               >
//                 View Details
//               </button>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {disasters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`
//               w-3 h-3 rounded-full transition-all duration-300
//               ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default DisasterDashboard

// import React, { useEffect, useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { MapPin, Waves, Wind, CloudRain } from "lucide-react"
// import { useDisasterContext } from "./context/disaster/disasterContext"
// import { fetchDisasters } from "./context/disaster/disasterActions"
// import DisasterDetailsModal from "./disasterModal"
// import logo from '../assets/logoo.png'

// const DisasterDashboard = () => {
//   const { state, dispatch } = useDisasterContext()
//   const { disasters, loading, error } = state

//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [selectedDisaster, setSelectedDisaster] = useState(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   useEffect(() => {
//     fetchDisasters(dispatch)
//   }, [dispatch])

//   useEffect(() => {
//     if (disasters.length > 0) {
//       setSelectedDisaster(disasters[currentIndex])
//     }
//   }, [currentIndex, disasters])

//   useEffect(() => {
//     if (disasters.length > 0) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % disasters.length)
//       }, 5000)

//       return () => clearInterval(interval)
//     }
//   }, [disasters])

//   if (loading) {
//     return <div>
//       <img src={logo}
//       alt="loader" />
//     </div>
//   }

//   if (error) {
//     return <div>Error: {error}</div>
//   }

//   if (!selectedDisaster) {
//     return <div>No disasters found.</div>
//   }

//   const getIcon = (type) => {
//     switch (type) {
//       case "Flood":
//         return <Waves className="w-12 h-12 text-white" />
//       case "Fire":
//         return <CloudRain className="w-12 h-12 text-white" />
//       default:
//         return <Wind className="w-12 h-12 text-white" />
//     }
//   }

//   return (
//     <div className="w-full h-screen relative overflow-hidden">
//       {/* Background Map */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={selectedDisaster._id}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="absolute inset-0 w-full h-full"
//         >
//           <iframe
//             title={`Map of ${selectedDisaster.location}`}
//             width="100%"
//             height="100%"
//             frameBorder="0"
//             scrolling="no"
//             marginHeight="0"
//             marginWidth="0"
//             src={`https://maps.google.com/maps?q=${selectedDisaster.coordinates.latitude},${selectedDisaster.coordinates.longitude}&z=12&output=embed`}
//             className="absolute inset-0 w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content Overlay */}
//       <div className="relative z-10 w-full h-full flex items-center justify-start p-8 md:p-16">
//         <div className="w-[32rem] text-white space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={selectedDisaster._id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-4"
//             >
//               <div className="flex items-center space-x-4">
//                 {getIcon(selectedDisaster.type)}
//                 <h1 className="text-4xl font-bold tracking-tight">{selectedDisaster.location}</h1>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div
//                   className={`
//                   px-4 py-2 
//                   ${selectedDisaster.severity === "Critical" ? "bg-red-500/80" : "bg-yellow-500/80"}
//                   rounded-full font-semibold
//                 `}
//                 >
//                   {selectedDisaster.severity.toUpperCase()}
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <MapPin className="w-5 h-5" />
//                   <span>{`${selectedDisaster.coordinates.latitude}, ${selectedDisaster.coordinates.longitude}`}</span>
//                 </div>
//               </div>

//               <p className="text-xl leading-relaxed">{selectedDisaster.description}</p>

//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="
//                 bg-white/20 backdrop-blur-md 
//                 border border-white/30 
//                 text-white 
//                 px-6 py-3 
//                 rounded-full 
//                 hover:bg-white/30 
//                 transition-all
//               "
//               >
//                 View Details
//               </button>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
//         {disasters.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentIndex(index)}
//             className={`
//               w-3 h-3 rounded-full transition-all duration-300
//               ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}
//             `}
//           />
//         ))}
//       </div>

//       {/* Disaster Details Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <DisasterDetailsModal 
//             disaster={selectedDisaster} 
//             isOpen={isModalOpen} 
//             onClose={() => setIsModalOpen(false)} 
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }

// export default DisasterDashboard

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, Waves, Wind, CloudRain } from "lucide-react"
import { useDisasterContext } from "./context/disaster/disasterContext"
import { fetchDisasters } from "./context/disaster/disasterActions"
import DisasterDetailsModal from "./disasterModal"
import logo from '../assets/logoo.png'

const DisasterDashboard = () => {
  const { state, dispatch } = useDisasterContext()
  const { disasters, loading, error } = state

  const [currentIndex, setCurrentIndex] = useState(0)
  const [modalDisaster, setModalDisaster] = useState(null)

  useEffect(() => {
    fetchDisasters(dispatch)
  }, [dispatch])

  useEffect(() => {
    if (disasters.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % disasters.length)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [disasters])

  if (loading) {
    return <div>
      <img src={logo} alt="loader" />
    </div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (disasters.length === 0) {
    return <div>No disasters found.</div>
  }

  const getIcon = (type) => {
    switch (type) {
      case "Flood":
        return <Waves className="w-12 h-12 text-white" />
      case "Fire":
        return <CloudRain className="w-12 h-12 text-white" />
      default:
        return <Wind className="w-12 h-12 text-white" />
    }
  }

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Map */}
      <AnimatePresence mode="wait">
        <motion.div
          key={disasters[currentIndex]._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <iframe
            title={`Map of ${disasters[currentIndex].location}`}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${disasters[currentIndex].coordinates.latitude},${disasters[currentIndex].coordinates.longitude}&z=12&output=embed`}
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full flex items-center justify-start p-8 md:p-16">
        <div className="w-[32rem] text-white space-y-6 backdrop-blur-sm bg-black/30 p-8 rounded-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={disasters[currentIndex]._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-4">
                {getIcon(disasters[currentIndex].type)}
                <h1 className="text-4xl font-bold tracking-tight">{disasters[currentIndex].location}</h1>
              </div>

              <div className="flex items-center space-x-4">
                <div
                  className={`px-4 py-2 ${disasters[currentIndex].severity === "Critical" ? "bg-red-500/80" : "bg-yellow-500/80"} rounded-full font-semibold`}
                >
                  {disasters[currentIndex].severity.toUpperCase()}
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>{`${disasters[currentIndex].coordinates.latitude}, ${disasters[currentIndex].coordinates.longitude}`}</span>
                </div>
              </div>

              <p className="text-xl leading-relaxed">{disasters[currentIndex].description}</p>

              <button
                onClick={() => setModalDisaster(disasters[currentIndex])}
                className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-full hover:bg-white/30 transition-all"
              >
                View Details
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {disasters.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white w-6" : "bg-white/50"}`}
          />
        ))}
      </div>

      {/* Disaster Details Modal */}
      <AnimatePresence>
        {modalDisaster && (
          <DisasterDetailsModal
            disaster={modalDisaster}
            isOpen={!!modalDisaster}
            onClose={() => setModalDisaster(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default DisasterDashboard
