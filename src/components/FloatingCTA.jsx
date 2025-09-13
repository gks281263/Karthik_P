import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, ArrowRight } from 'lucide-react'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  if (!isVisible) return null

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-50"
    >
      <AnimatePresence>
        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-black/95 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 mb-4 shadow-glow max-w-sm"
          >
            <div className="text-center">
              <h4 className="text-white font-bold text-lg mb-2">
                Ready to create something amazing?
              </h4>
              <p className="text-gray-300 text-sm mb-6">
                Let's discuss your project and bring your vision to life.
              </p>
              <div className="space-y-3">
                <Link 
                  to="/contact" 
                  className="group relative w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Hire Me
                    <ArrowRight size={16} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link 
                  to="/portfolio" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-white font-semibold rounded-full hover:border-fuchsia-500 hover:text-fuchsia-500 transition-all duration-300"
                >
                  View Work
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMinimize}
        className="w-14 h-14 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center text-white shadow-glow hover:shadow-glow-lg transition-all duration-300"
        aria-label={isMinimized ? 'Expand' : 'Minimize'}
      >
        <AnimatePresence mode="wait">
          {isMinimized ? (
            <motion.div
              key="expand"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="minimize"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}

export default FloatingCTA
