import React, { useRef, useEffect } from "react"

const ScrollingHeroText = () => {
  const containerRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    
    if (!container || !text) return

    // Clone the text for seamless scrolling
    container.appendChild(text.cloneNode(true))

    const scroll = () => {
      if (container.scrollLeft >= text.offsetWidth) {
        container.scrollLeft = 0
      } else {
        container.scrollLeft += 1
      }
    }

    // Slow continuous scroll
    const scrollInterval = setInterval(scroll, 50)

    return () => clearInterval(scrollInterval)
  }, [])

  const commonTextStyles = "pr-4 text-[40px] font-light tracking-widest text-white/80 leading-none font-[dosis] whitespace-nowrap"

  return (
    <div className="relative overflow-hidden h-[130px] bg-gray-900">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
      
      <div 
        ref={containerRef}
        className="flex items-center h-full overflow-hidden"
        style={{ 
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div ref={textRef} className={commonTextStyles}>
          SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS • SAFETY IN YOUR HANDS
        </div>
      </div>
    </div>
  )
}

export default ScrollingHeroText