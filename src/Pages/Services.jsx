// import React from "react"
// import { motion } from "framer-motion"
// import { 
//   Shield, 
//   Waves, 
//   Wind, 
//   CloudRain, 
//   AlertTriangle, 
//   Rocket 
// } from "lucide-react"

// const services = [
//   {
//     title: "Disaster Prediction",
//     description: "Advanced AI-powered forecasting of potential natural disasters.",
//     icon: <Waves className="w-12 h-12 text-blue-500" />,
//     background: "bg-blue-50",
//     borderColor: "border-blue-200"
//   },
//   {
//     title: "Early Warning System",
//     description: "Real-time alerts and notifications for imminent threats.",
//     icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
//     background: "bg-yellow-50",
//     borderColor: "border-yellow-200"
//   },
//   {
//     title: "Emergency Response",
//     description: "Rapid deployment of rescue and relief teams.",
//     icon: <Shield className="w-12 h-12 text-green-500" />,
//     background: "bg-green-50",
//     borderColor: "border-green-200"
//   },
//   {
//     title: "Climate Monitoring",
//     description: "Comprehensive environmental tracking and analysis.",
//     icon: <Wind className="w-12 h-12 text-indigo-500" />,
//     background: "bg-indigo-50",
//     borderColor: "border-indigo-200"
//   }
// ]

// const ServicesSection = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="w-full bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4"
//     >
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-5xl font-bold text-center text-gray-800 mb-12">
//           Our Services
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.5 }}
//               className={`
//                 ${service.background} 
//                 ${service.borderColor}
//                 border-2 
//                 rounded-3xl 
//                 p-6 
//                 hover:shadow-xl 
//                 transition-all 
//                 duration-300 
//                 transform 
//                 hover:-translate-y-2
//               `}
//             >
//               <div className="mb-6">
//                 {service.icon}
//               </div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 mb-4">
//                 {service.description}
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="
//                   bg-white 
//                   text-gray-800 
//                   px-4 
//                   py-2 
//                   rounded-full 
//                   inline-flex 
//                   items-center 
//                   hover:bg-gray-100 
//                   transition-colors
//                 "
//               >
//                 Learn More
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// export default ServicesSection


import React from "react"
import { motion } from "framer-motion"
import { 
  Radar, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Compass, 
  Cloud 
} from "lucide-react"

const services = [
  {
    title: "Predictive Analytics",
    description: "Advanced AI-driven disaster forecasting using cutting-edge machine learning.",
    icon: <Radar className="w-12 h-12 text-indigo-500" />,
    gradient: "from-indigo-100 to-indigo-200"
  },
  {
    title: "Real-Time Monitoring",
    description: "Comprehensive environmental tracking with instant alert systems.",
    icon: <Zap className="w-12 h-12 text-blue-500" />,
    gradient: "from-blue-100 to-blue-200"
  },
  {
    title: "Emergency Response",
    description: "Rapid deployment and coordinated rescue operations worldwide.",
    icon: <ShieldCheck className="w-12 h-12 text-green-500" />,
    gradient: "from-green-100 to-green-200"
  },
  {
    title: "Risk Mitigation",
    description: "Proactive strategies to minimize potential disaster impacts.",
    icon: <Layers className="w-12 h-12 text-purple-500" />,
    gradient: "from-purple-100 to-purple-200"
  }
]

const ServicesSection = () => {
  return (
    <div className="w-full bg-gray-50 py-30 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold font-[signika] text-center text-gray-900 mb-16 tracking-tight">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.5 
              }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
              }}
              className={`
                bg-gradient-to-br ${service.gradient}
                rounded-3xl 
                p-6 
                space-y-6
                transition-all 
                duration-300 
                group
                hover:rotate-1
                border-2 
                border-transparent
                hover:border-white
                hover:shadow-2xl
              `}
            >
              <div className="flex items-center justify-between">
                {service.icon}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="
                    opacity-0 
                    group-hover:opacity-100 
                    transition-opacity 
                    duration-300 
                    bg-white 
                    rounded-full 
                    p-2 
                    shadow-md
                  "
                >
                  <Compass className="w-6 h-6 text-gray-700" />
                </motion.div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {service.description}
                </p>
              </div>
            
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection