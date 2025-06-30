import React, { useState, useEffect } from 'react'

const Banner = () => {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Welcome to Mini shopping'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="banner-container bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-300 min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-10 w-14 h-14 bg-white rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 p-8 relative z-10">
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            {displayText}
            <span className="animate-pulse text-yellow-200">|</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/95 mb-2 drop-shadow-md">
            🛍️ Online Shopping
          </h2>
          <p className="text-white/90 text-lg md:text-xl drop-shadow-sm">
            Shopping becomes more practical and economical
          </p>
          <button className="mt-4 bg-white text-orange-500 px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105">
            Start Shopping ✨
          </button>
        </div>
        
        {/* Right Side */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Enhanced Phone Illustration */}
          <div className="relative flex flex-col items-center w-48 h-80 bg-gradient-to-b from-gray-100 to-white rounded-3xl shadow-2xl border-4 border-white transform hover:scale-105 transition-transform duration-300">
            {/* Phone Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-gray-800 rounded-full" />
            
            {/* Screen Content */}
            <div className="flex flex-col items-center justify-center h-full w-full pt-10 pb-8 px-4">
              <div className="text-xs text-gray-500 mb-4 font-semibold">🏪 ShopEasy</div>
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-5xl mb-4 animate-bounce">🛒</div>
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  BUY NOW
                </div>
                <div className="text-xs text-gray-400 mt-2">Special Offers!</div>
              </div>
            </div>
            
            {/* Phone Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-3xl opacity-20 blur-sm -z-10"></div>
          </div>
          
          {/* Enhanced Shopping Icons */}
          <div className="flex gap-4 mt-8 items-center">
            <span className="text-4xl animate-bounce" style={{animationDelay: '0s'}}>🛒</span>
            <span className="text-3xl animate-bounce" style={{animationDelay: '0.2s'}}>🛍️</span>
            <span className="text-3xl animate-bounce" style={{animationDelay: '0.4s'}}>💳</span>
            <span className="text-3xl animate-bounce" style={{animationDelay: '0.6s'}}>🎁</span>
            <span className="text-2xl animate-bounce" style={{animationDelay: '0.8s'}}>💰</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner