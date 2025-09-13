import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Star, Camera, Video, Edit3, Share2, Search, Code, ArrowRight, ExternalLink, Users, TrendingUp, Award } from 'lucide-react'

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [currentSpecialty, setCurrentSpecialty] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const specialties = [
    "Photography",
    "Videography", 
    "Influencing",
    "Editing",
    "Web Development"
  ]

  const services = [
    {
      icon: Camera,
      title: "Photography",
      description: "Professional photography for brands, events, and lifestyle content that tells your story.",
      color: "from-fuchsia-500 to-purple-500"
    },
    {
      icon: Video,
      title: "Videography",
      description: "Cinematic video production and editing that captures attention and drives engagement.",
      color: "from-cyan-400 to-blue-500"
    },
    {
      icon: Edit3,
      title: "Video Editing",
      description: "Post-production magic that transforms raw footage into compelling visual narratives.",
      color: "from-purple-500 to-fuchsia-500"
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Strategic content creation and social media management that builds authentic communities.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Search,
      title: "SEO",
      description: "Search engine optimization that increases visibility and drives organic traffic to your brand.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers and showcase your brand.",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Campaign",
      category: "photography",
      image: "https://via.placeholder.com/600x800/1a1a1a/ffffff?text=BRAND+CAMPAIGN",
      description: "Complete brand photography for a lifestyle company"
    },
    {
      id: 2,
      title: "Product Video",
      category: "videography",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=PRODUCT+VIDEO",
      description: "Product showcase video with dynamic editing"
    },
    {
      id: 3,
      title: "Social Media",
      category: "editing",
      image: "https://via.placeholder.com/600x600/1a1a1a/ffffff?text=SOCIAL+MEDIA",
      description: "Instagram content series with consistent branding"
    },
    {
      id: 4,
      title: "Website Design",
      category: "web",
      image: "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=WEBSITE+DESIGN",
      description: "Modern e-commerce website with custom functionality"
    },
    {
      id: 5,
      title: "Restaurant Promo",
      category: "promotions",
      image: "https://via.placeholder.com/600x700/1a1a1a/ffffff?text=RESTAURANT+PROMO",
      description: "Food photography and promotional content"
    },
    {
      id: 6,
      title: "Event Coverage",
      category: "photography",
      image: "https://via.placeholder.com/600x450/1a1a1a/ffffff?text=EVENT+COVERAGE",
      description: "Corporate event photography and documentation"
    },
    {
      id: 7,
      title: "Lifestyle Shoot",
      category: "photography",
      image: "https://via.placeholder.com/600x900/1a1a1a/ffffff?text=LIFESTYLE+SHOOT",
      description: "Lifestyle photography for fashion brand"
    },
    {
      id: 8,
      title: "Motion Graphics",
      category: "editing",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=MOTION+GRAPHICS",
      description: "Animated graphics for social media campaign"
    },
    {
      id: 9,
      title: "App Development",
      category: "web",
      image: "https://via.placeholder.com/600x600/1a1a1a/ffffff?text=APP+DEVELOPMENT",
      description: "Mobile app design and development"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Brand Manager",
      company: "TechStart",
      text: "Karthik transformed our brand presence completely. The photography and video content he created increased our engagement by 300%.",
      rating: 5,
      avatar: "https://via.placeholder.com/60x60/1a1a1a/ffffff?text=SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Restaurant Owner",
      company: "Bella Vista",
      text: "The promotional content Karthik created for our restaurant brought in so many new customers. His work is absolutely stunning.",
      rating: 5,
      avatar: "https://via.placeholder.com/60x60/1a1a1a/ffffff?text=MR"
    },
    {
      name: "Emily Watson",
      role: "E-commerce Director",
      company: "StyleCo",
      text: "Professional, creative, and delivers results. The website he built for us has increased our conversion rate by 150%.",
      rating: 5,
      avatar: "https://via.placeholder.com/60x60/1a1a1a/ffffff?text=EW"
    }
  ]

  const stats = [
    { number: "50K+", label: "Followers", icon: Users },
    { number: "200+", label: "Campaigns", icon: TrendingUp },
    { number: "100+", label: "Brands", icon: Award }
  ]

  const clientLogos = [
    "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+A",
    "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+B", 
    "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+C",
    "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+D",
    "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+E",
    "https://via.placeholder.com/120x60/1a1a1a/ffffff?text=BRAND+F"
  ]

  const filteredPortfolio = selectedFilter === 'all' 
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedFilter)

  // Typing animation for specialties
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSpecialty((prev) => (prev + 1) % specialties.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [specialties.length])

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Full-bleed video loop OR animated collage */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video/Animated Collage */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              <span className="text-white">Creative partner for</span>
              <br />
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                brands & creators
              </span>
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto h-8"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSpecialty}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent font-bold"
                >
                  {specialties[currentSpecialty]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link
                to="/portfolio"
                className="group relative px-12 py-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-glow-lg"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play size={24} />
                  View Portfolio
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/contact"
                className="px-12 py-4 border-2 border-gray-300 text-white font-bold text-lg rounded-full hover:bg-gray-300 hover:text-gray-950 transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Mini Stats / Trust Band */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <stat.icon size={32} className="text-fuchsia-500 mr-3" />
                  <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                </div>
                <div className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Client Logos Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="flex animate-scroll">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 mx-8 opacity-60 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={logo} 
                    alt={`Client ${index + 1}`}
                    className="h-12 w-auto filter brightness-0 invert"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Showreel */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                FEATURED SHOWREEL
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch how we bring brands to life through creative storytelling and compelling visuals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-800">
              <img
                src="https://via.placeholder.com/800x450/1a1a1a/ffffff?text=FEATURED+SHOWREEL"
                alt="Featured Showreel"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-glow-lg"
                >
                  <Play size={32} className="text-white ml-1" />
                </motion.button>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link
                to="/portfolio"
                className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-white font-bold rounded-full hover:bg-gray-300 hover:text-gray-950 transition-all duration-300"
              >
                Watch Case Study
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                SERVICES
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive creative services to elevate your brand and drive results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gray-800/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:shadow-glow transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:via-purple-500 group-hover:to-cyan-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-fuchsia-500 font-semibold hover:text-cyan-400 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                PORTFOLIO PREVIEW
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Explore our latest projects and creative solutions
            </p>

            {/* Filter Chips */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'photography', 'videography', 'promotions', 'web'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.slice(0, 9).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
              <Link
                to="/portfolio"
                className="group inline-flex items-center px-8 py-4 border-2 border-gray-300 text-white font-bold rounded-full hover:bg-gray-300 hover:text-gray-950 transition-all duration-300"
              >
                View All Projects
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Reviews (Glance) */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                CLIENT REVIEWS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Trusted by brands and creators worldwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-800 p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-yellow-400 fill-current mx-1" />
                    ))}
                  </div>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="text-left">
                      <h4 className="text-white font-bold text-lg">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-gray-400">{testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                GET IN TOUCH
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your next project? Let's create something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-fuchsia-500 transition-colors">
                    <option>Photography</option>
                    <option>Videography</option>
                    <option>Video Editing</option>
                    <option>Social Media</option>
                    <option>SEO</option>
                    <option>Web Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 transition-colors"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-bold rounded-lg hover:shadow-glow transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">K</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Karthik</p>
                      <p className="text-gray-400">Creative Professional</p>
                    </div>
                  </div>
                  <p className="text-gray-300">Available worldwide for remote collaboration</p>
                  <p className="text-gray-300">Response time: Within 24 hours</p>
                </div>
              </div>

              <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'Instagram', icon: '📷', color: 'from-fuchsia-500 to-purple-500' },
                    { name: 'YouTube', icon: '🎥', color: 'from-red-500 to-fuchsia-500' },
                    { name: 'LinkedIn', icon: '💼', color: 'from-blue-500 to-cyan-500' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#"
                      className={`p-4 bg-gradient-to-r ${social.color} rounded-xl text-center hover:shadow-lg transition-all duration-300`}
                    >
                      <div className="text-2xl mb-2">{social.icon}</div>
                      <p className="text-white font-semibold text-sm">{social.name}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA Banner */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 p-12"
          >
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                Let's create something extraordinary together
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to transform your brand with stunning visuals and digital solutions?
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-12 py-4 bg-white text-gray-950 font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
                >
                  Hire Me
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </motion.div>
            </div>
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
