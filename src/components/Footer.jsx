import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Instagram, Youtube, Linkedin, Mail, ArrowRight } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  const quickLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const clientLogos = [
    { name: 'Brand A', logo: 'https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+A' },
    { name: 'Brand B', logo: 'https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+B' },
    { name: 'Brand C', logo: 'https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+C' },
    { name: 'Brand D', logo: 'https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+D' },
    { name: 'Brand E', logo: 'https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+E' },
    { name: 'Brand F', logo: 'https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+F' },
  ]

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              STAY IN THE LOOP
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Get creative insights, behind-the-scenes content, and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 transition-colors"
                required
              />
              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-bold rounded-full hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-glow">
                  <span className="text-white font-extrabold text-xl">K</span>
                </div>
                <span className="text-2xl font-extrabold text-white">KARTHIK</span>
              </Link>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                Creative partner for brands & creators. Specializing in photography, videography, 
                editing, and digital marketing that drives results.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map(({ href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-gray-800 rounded-full hover:bg-gradient-to-r hover:from-fuchsia-500 hover:via-purple-500 hover:to-cyan-400 transition-all duration-300"
                    aria-label={label}
                  >
                    <span className="text-white text-xl">📱</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map(({ name, path }) => (
                  <li key={name}>
                    <Link 
                      to={path} 
                      className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-fuchsia-500 hover:via-purple-500 hover:to-cyan-400 transition-all duration-300"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Get in Touch</h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-fuchsia-500" />
                  <span className="text-gray-300">hello@karthik.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-300">Available Worldwide</span>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-bold rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Logos Strip */}
      <div className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-gray-300 text-sm uppercase tracking-wider font-bold">Trusted by</p>
          </motion.div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {[...clientLogos, ...clientLogos].map(({ name, logo }, index) => (
                <div key={`${name}-${index}`} className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={logo} 
                    alt={name}
                    className="h-12 w-auto filter brightness-0 invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm">
              © {currentYear} KARTHIK. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
