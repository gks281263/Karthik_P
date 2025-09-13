import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingCTA from './components/FloatingCTA'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import './index.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for smooth animations
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-transparent border-t-fuchsia-500 border-r-cyan-400 rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-purple-500 border-l-blue-400 rounded-full animate-spin animate-reverse"></div>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="App min-h-screen bg-black text-white">
        <Header />
        <main>
               <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/portfolio" element={<Portfolio />} />
                 <Route path="/services" element={<Services />} />
                 <Route path="/blog" element={<Blog />} />
                 <Route path="/blog/:id" element={<BlogDetail />} />
                 <Route path="*" element={<Home />} />
               </Routes>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  )
}

export default App