// import React from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { X, AlertTriangle, AlertCircle, Info } from 'lucide-react'

// const DisasterDetailsModal = ({ disaster, isOpen, onClose }) => {
//   if (!isOpen || !disaster) return null

//   const getSeverityColor = () => {
//     switch (disaster.severity) {
//       case 'Critical': return 'bg-red-500/80'
//       case 'High': return 'bg-orange-500/80'
//       case 'Medium': return 'bg-yellow-500/80'
//       default: return 'bg-green-500/80'
//     }
//   }

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         className="w-[36rem] bg-black/30 backdrop-blur-sm rounded-lg border border-white/30 p-8 text-white relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 hover:bg-white/20 p-2 rounded-full transition-all"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <div className="space-y-6">
//           {/* Header */}
//           <div className="flex items-center space-x-4">
//             <AlertTriangle className="w-12 h-12 text-white" />
//             <h2 className="text-3xl font-bold tracking-tight">{disaster.location}</h2>
//           </div>

//           {/* Severity and Status */}
//           <div className="flex items-center space-x-4">
//             <div className={`${getSeverityColor()} px-4 py-2 rounded-full font-semibold`}>
//               {disaster.severity.toUpperCase()}
//             </div>
//             <div className={`
//               px-4 py-2 
//               ${disaster.status === 'Active' ? 'bg-red-500/80' : 
//                 disaster.status === 'Contained' ? 'bg-yellow-500/80' : 'bg-green-500/80'}
//               rounded-full font-semibold
//             `}>
//               {disaster.status}
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-xl leading-relaxed">{disaster.description}</p>

//           {/* Detailed Information */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="font-semibold flex items-center space-x-2 mb-2">
//                 <Info className="w-5 h-5" /> 
//                 <span>Disaster Type</span>
//               </h3>
//               <p>{disaster.type}</p>
//             </div>
//             <div>
//               <h3 className="font-semibold flex items-center space-x-2 mb-2">
//                 <AlertCircle className="w-5 h-5" /> 
//                 <span>Coordinates</span>
//               </h3>
//               <p>{`${disaster.coordinates.latitude}, ${disaster.coordinates.longitude}`}</p>
//             </div>
//           </div>

//           {/* Casualties */}
//           <div className="bg-white/10 p-4 rounded-lg">
//             <h3 className="text-xl font-bold mb-4">Impact</h3>
//             <div className="grid grid-cols-3 gap-4 text-center">
//               <div>
//                 <p className="font-semibold">Injured</p>
//                 <p className="text-2xl">{disaster.casualties.injured}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Deceased</p>
//                 <p className="text-2xl">{disaster.casualties.deceased}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Missing</p>
//                 <p className="text-2xl">{disaster.casualties.missing}</p>
//               </div>
//             </div>
//           </div>

//           {/* Resources Needed */}
//           {disaster.resourcesNeeded.length > 0 && (
//             <div>
//               <h3 className="text-xl font-bold mb-4">Resources Needed</h3>
//               <div className="flex flex-wrap gap-2">
//                 {disaster.resourcesNeeded.map((resource, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white/20 px-3 py-1 rounded-full text-sm"
//                   >
//                     {resource}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default DisasterDetailsModal

// import React, { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { X, AlertTriangle, AlertCircle, Info } from 'lucide-react'
// import { Button } from './ui/button'

// const DisasterDetailsModal = ({ disaster, isOpen, onClose }) => {
//   const [modalDisaster, setModalDisaster] = useState(null)

//   useEffect(() => {
//     if (isOpen && disaster) {
//       setModalDisaster(disaster)
//     }
//   }, [isOpen, disaster])

//   if (!isOpen || !modalDisaster) return null

//   const getSeverityColor = () => {
//     switch (modalDisaster.severity) {
//       case 'Critical': return 'bg-red-500/80'
//       case 'High': return 'bg-orange-500/80'
//       case 'Medium': return 'bg-yellow-500/80'
//       default: return 'bg-green-500/80'
//     }
//   }

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.9, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.9, opacity: 0 }}
//         transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         className="w-[36rem] bg-black/30 backdrop-blur-sm rounded-lg border border-white/30 p-8 text-white relative"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button 
//           onClick={onClose} 
//           className="absolute top-4 right-4 hover:bg-white/20 p-2 rounded-full transition-all"
//         >
//           <X className="w-6 h-6" />
//         </button>

//         <div className="space-y-6">
//           {/* Header */}
//           <div className="flex items-center space-x-4">
//             <AlertTriangle className="w-12 h-12 text-white" />
//             <h2 className="text-3xl font-bold tracking-tight">{modalDisaster.location}</h2>
//           </div>

//           {/* Severity and Status */}
//           <div className="flex items-center space-x-4">
//             <div className={`${getSeverityColor()} px-4 py-2 rounded-full font-semibold`}>
//               {modalDisaster.severity.toUpperCase()}
//             </div>
//             <div className={`
//               px-4 py-2 
//               ${modalDisaster.status === 'Active' ? 'bg-red-500/80' : 
//                 modalDisaster.status === 'Contained' ? 'bg-yellow-500/80' : 'bg-green-500/80'}
//               rounded-full font-semibold
//             `}>
//               {modalDisaster.status}
//             </div>
//           </div>

//           {/* Description */}
//           <p className="text-xl leading-relaxed">{modalDisaster.description}</p>

//           {/* Detailed Information */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <h3 className="font-semibold flex items-center space-x-2 mb-2">
//                 <Info className="w-5 h-5" /> 
//                 <span>Disaster Type</span>
//               </h3>
//               <p>{modalDisaster.type}</p>
//             </div>
//             <div>
//               <h3 className="font-semibold flex items-center space-x-2 mb-2">
//                 <AlertCircle className="w-5 h-5" /> 
//                 <span>Coordinates</span>
//               </h3>
//               <p>{`${modalDisaster.coordinates.latitude}, ${modalDisaster.coordinates.longitude}`}</p>
//             </div>
//           </div>

//           {/* Casualties */}
//           <div className="bg-white/10 p-4 rounded-lg">
//             <h3 className="text-xl font-bold mb-4">Impact</h3>
//             <div className="grid grid-cols-3 gap-4 text-center">
//               <div>
//                 <p className="font-semibold">Injured</p>
//                 <p className="text-2xl">{modalDisaster.casualties.injured}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Deceased</p>
//                 <p className="text-2xl">{modalDisaster.casualties.deceased}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Missing</p>
//                 <p className="text-2xl">{modalDisaster.casualties.missing}</p>
//               </div>
//             </div>
//           </div>

//           {/* Resources Needed */}
//           {modalDisaster.resourcesNeeded.length > 0 && (
//             <div>
//               <h3 className="text-xl font-bold mb-4">Resources Needed</h3>
//               <div className="flex flex-wrap gap-2">
//                 {modalDisaster.resourcesNeeded.map((resource, index) => (
//                   <div 
//                     key={index} 
//                     className="bg-white/20 px-3 py-1 rounded-full text-sm"
//                   >
//                    <span>
//                     {resource}
//                     </span> 
//                     <span>
//                       <Link to='/donation'><Button variant='outline'>Donate</Button></Link>
//                       </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default DisasterDetailsModal
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, AlertTriangle, AlertCircle, Info } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom' // Ensure this is imported

const DisasterDetailsModal = ({ disaster, isOpen, onClose }) => {
  const [modalDisaster, setModalDisaster] = useState(null)

  useEffect(() => {
    if (isOpen && disaster) {
      setModalDisaster(disaster)
    }
  }, [isOpen, disaster])

  if (!isOpen || !modalDisaster) return null

  const getSeverityColor = () => {
    switch (modalDisaster.severity) {
      case 'Critical': return 'bg-red-500/80'
      case 'High': return 'bg-orange-500/80'
      case 'Medium': return 'bg-yellow-500/80'
      default: return 'bg-green-500/80'
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-[36rem] bg-black/30 backdrop-blur-sm rounded-lg border border-white/30 p-8 text-white relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 hover:bg-white/20 p-2 rounded-full transition-all"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <AlertTriangle className="w-12 h-12 text-white" />
            <h2 className="text-3xl font-bold tracking-tight">{modalDisaster.location}</h2>
          </div>

          {/* Severity and Status */}
          <div className="flex items-center space-x-4">
            <div className={`${getSeverityColor()} px-4 py-2 rounded-full font-semibold`}>
              {modalDisaster.severity.toUpperCase()}
            </div>
            <div className={`px-4 py-2 ${modalDisaster.status === 'Active' ? 'bg-red-500/80' : 
              modalDisaster.status === 'Contained' ? 'bg-yellow-500/80' : 'bg-green-500/80'} 
              rounded-full font-semibold`}>
              {modalDisaster.status}
            </div>
          </div>

          {/* Description */}
          <p className="text-xl leading-relaxed">{modalDisaster.description}</p>

          {/* Detailed Information */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold flex items-center space-x-2 mb-2">
                <Info className="w-5 h-5" /> 
                <span>Disaster Type</span>
              </h3>
              <p>{modalDisaster.type}</p>
            </div>
            <div>
              <h3 className="font-semibold flex items-center space-x-2 mb-2">
                <AlertCircle className="w-5 h-5" /> 
                <span>Coordinates</span>
              </h3>
              <p>{`${modalDisaster.coordinates.latitude}, ${modalDisaster.coordinates.longitude}`}</p>
            </div>
          </div>

          {/* Casualties */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Impact</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-semibold">Injured</p>
                <p className="text-2xl">{modalDisaster.casualties.injured}</p>
              </div>
              <div>
                <p className="font-semibold">Deceased</p>
                <p className="text-2xl">{modalDisaster.casualties.deceased}</p>
              </div>
              <div>
                <p className="font-semibold">Missing</p>
                <p className="text-2xl">{modalDisaster.casualties.missing}</p>
              </div>
            </div>
          </div>

          {/* Resources Needed and Donate Button */}
          {modalDisaster.resourcesNeeded.length > 0 && (
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold mb-4">Resources Needed</h3>
                <ul className="space-x-2 flex ">
                  {modalDisaster.resourcesNeeded.map((resource, index) => (
                    <li key={index} className="text-sm font-medium bg-gray-400 px-3 py-1 rounded-xl">{resource}</li>
                  ))}
                </ul>
              </div>
              <div>
                <Link to="/donation">
                  <Button variant="outline" size="sm">
                    Donate
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default DisasterDetailsModal
