// import React, { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// const ScrollingHeroText = () => {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   })

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

//   return (
//     <div ref={ref} className="relative w-full h-[50vh] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
//       <motion.div 
//         style={{ x }}
//         className="absolute inset-0 flex items-center whitespace-nowrap"
//       >
//         <motion.h1 
//           className="text-[15vw] font-extrabold uppercase text-gray-800/10"
//         >
//           SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS
//         </motion.h1>
//       </motion.div>
//     </div>
//   )
// }

// export default ScrollingHeroText

// import React, { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// const ScrollingHeroText = () => {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   })

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

//   return (
//     <div ref={ref} className="relative w-full h-[20vh] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
//       <motion.div 
//         style={{ x }}
//         className="absolute inset-0 flex items-center whitespace-nowrap"
//       >
//         <motion.h1 
//           className="text-[8vw] font-semibold uppercase text-gray-800/10"
//         >
//           SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS
//         </motion.h1>
//       </motion.div>
//     </div>
//   )
// }

// export default ScrollingHeroText

// import React, { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// const ScrollingHeroText = () => {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   })

//   const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])

//   return (
//     <div ref={ref} className="relative w-full h-[20vh] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
//       <motion.div 
//         style={{ x }}
//         className="absolute inset-0 flex items-center whitespace-nowrap"
//       >
//         <motion.h1 
//           className="
//             text-[5vw] font-black uppercase 
//             text-gray-800 
//             text-stroke-2 text-stroke-gray-300
//             drop-shadow-[0_4px_3px_rgba(0,0,0,0.2)]
//           "
//         >
//           SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS
//         </motion.h1>
//       </motion.div>
//     </div>
//   )
// }

// export default ScrollingHeroText

// import React, { useRef, useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// gsap.registerPlugin(ScrollTrigger)

// const ScrollingHeroText = () => {
//   const textRef = useRef(null)

//   useEffect(() => {
//     const textElement = textRef.current

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: textElement,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 1
//       }
//     })

//     tl.to(textElement, {
//       x: "-50%",
//       ease: "none"
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach(t => t.kill())
//     }
//   }, [])

//   return (
//     <div className="relative w-full h-[20vh] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
//       <div ref={textRef} className="absolute inset-0 flex items-center whitespace-nowrap">
//         <h1 className="
//           text-[5vw] 
//           font-bold 
//           uppercase 
//           text-gray-800 
//           text-stroke-2 
//           text-stroke-gray-300 
//           drop-shadow-[0_4px_6px_rgba(0,0,0,0.1)]
//           tracking-wide
//         ">
//           SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS
//         </h1>
//       </div>
//     </div>
//   )
// }

// export default ScrollingHeroText

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ScrollingHeroText = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const textElement = textRef.current

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      }
    })

    tl.to(textElement, {
      x: "-75%",
      duration: 2,
      ease: "power1.inOut"
    })

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div className="relative w-full h-[30vh] overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">
      <div ref={textRef} className="absolute inset-0 flex items-center whitespace-nowrap">
        <h1 className="
          text-[6vw] 
          font-bold 
          uppercase 
          text-gray-800 
          text-stroke-1 
          text-stroke-gray-300 
          drop-shadow-md
          tracking-wider
        ">
          SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS
        </h1>
      </div>
    </div>
  )
}

export default ScrollingHeroText