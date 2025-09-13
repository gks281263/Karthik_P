import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ExternalLink, Filter, X, Star, Calendar, User, Target, Zap, TrendingUp } from 'lucide-react'

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [visibleItems, setVisibleItems] = useState(9)

  const portfolioItems = [
    {
      id: 1,
      title: "Brand Campaign",
      category: "photography",
      year: "2024",
      image: "https://via.placeholder.com/600x800/1a1a1a/ffffff?text=BRAND+CAMPAIGN",
      description: "Complete brand photography for a lifestyle company",
      client: "Lifestyle Co.",
      role: "Lead Photographer",
      goal: "Create a cohesive visual identity for the brand's new product launch",
      approach: "Collaborated with the creative team to develop a modern, minimalist aesthetic that resonates with the target demographic",
      results: "300% increase in social media engagement and 150% boost in website traffic",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=DELIVERABLE+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=DELIVERABLE+2",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=DELIVERABLE+3"
      ],
      beforeAfter: {
        before: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=BEFORE",
        after: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=AFTER"
      },
      testimonial: {
        text: "Karthik's photography perfectly captured our brand essence. The results exceeded our expectations!",
        author: "Sarah Chen",
        role: "Brand Manager",
        company: "Lifestyle Co."
      }
    },
    {
      id: 2,
      title: "Product Video",
      category: "videography",
      year: "2024",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=PRODUCT+VIDEO",
      description: "Product showcase video with dynamic editing",
      client: "TechStart",
      role: "Video Director & Editor",
      goal: "Create an engaging product demonstration video for the launch campaign",
      approach: "Used cinematic techniques and dynamic editing to highlight key features and benefits",
      results: "2M+ views across platforms and 25% increase in product sales",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=VIDEO+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=VIDEO+2"
      ],
      beforeAfter: {
        before: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=RAW+FOOTAGE",
        after: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=FINAL+VIDEO"
      },
      testimonial: {
        text: "The video perfectly showcased our product's unique features. Amazing work!",
        author: "Marcus Rodriguez",
        role: "Marketing Director",
        company: "TechStart"
      }
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "influencing",
      year: "2024",
      image: "https://via.placeholder.com/600x600/1a1a1a/ffffff?text=SOCIAL+MEDIA",
      description: "Instagram content series with consistent branding",
      client: "Fashion Brand",
      role: "Content Creator & Influencer",
      goal: "Increase brand awareness and drive sales through authentic social media content",
      approach: "Developed a content strategy focusing on lifestyle integration and authentic storytelling",
      results: "500K+ new followers and 200% increase in online sales",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=POST+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=POST+2",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=POST+3",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=POST+4"
      ],
      testimonial: {
        text: "Karthik's content strategy transformed our social media presence completely!",
        author: "Emily Watson",
        role: "Social Media Manager",
        company: "Fashion Brand"
      }
    },
    {
      id: 4,
      title: "Website Design",
      category: "web",
      year: "2024",
      image: "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=WEBSITE+DESIGN",
      description: "Modern e-commerce website with custom functionality",
      client: "E-commerce Store",
      role: "Full-Stack Developer",
      goal: "Create a modern, user-friendly e-commerce platform with high conversion rates",
      approach: "Implemented responsive design, optimized performance, and integrated seamless payment systems",
      results: "150% increase in conversion rate and 40% improvement in page load speed",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=WEBSITE+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=WEBSITE+2"
      ],
      testimonial: {
        text: "The new website is exactly what we needed. Sales have increased dramatically!",
        author: "David Kim",
        role: "CEO",
        company: "E-commerce Store"
      }
    },
    {
      id: 5,
      title: "Restaurant Promotion",
      category: "promotions",
      year: "2024",
      image: "https://via.placeholder.com/600x700/1a1a1a/ffffff?text=RESTAURANT+PROMO",
      description: "Food photography and promotional content",
      client: "Bella Vista",
      role: "Food Photographer & Marketing Specialist",
      goal: "Increase restaurant visibility and attract new customers through compelling visual content",
      approach: "Created mouth-watering food photography and developed a comprehensive marketing strategy",
      results: "300% increase in reservations and 180% boost in social media engagement",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=FOOD+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=FOOD+2",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=FOOD+3"
      ],
      testimonial: {
        text: "The food photography is absolutely stunning. Our reservations have tripled!",
        author: "Maria Garcia",
        role: "Restaurant Owner",
        company: "Bella Vista"
      }
    },
    {
      id: 6,
      title: "Event Coverage",
      category: "photography",
      year: "2024",
      image: "https://via.placeholder.com/600x450/1a1a1a/ffffff?text=EVENT+COVERAGE",
      description: "Corporate event photography and documentation",
      client: "Corporate Events",
      role: "Event Photographer",
      goal: "Capture the essence of the corporate event for marketing and documentation purposes",
      approach: "Documented key moments, networking sessions, and presentations with professional photography",
      results: "Perfect event documentation and 100% client satisfaction",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=EVENT+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=EVENT+2"
      ],
      testimonial: {
        text: "Professional, punctual, and delivered exactly what we needed. Highly recommended!",
        author: "John Smith",
        role: "Event Coordinator",
        company: "Corporate Events"
      }
    },
    {
      id: 7,
      title: "Lifestyle Shoot",
      category: "photography",
      year: "2024",
      image: "https://via.placeholder.com/600x900/1a1a1a/ffffff?text=LIFESTYLE+SHOOT",
      description: "Lifestyle photography for fashion brand",
      client: "StyleCo",
      role: "Lifestyle Photographer",
      goal: "Create aspirational lifestyle content that showcases the brand's clothing line",
      approach: "Developed a natural, authentic aesthetic that resonates with the target audience",
      results: "250% increase in brand engagement and 120% boost in online sales",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=LIFESTYLE+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=LIFESTYLE+2",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=LIFESTYLE+3"
      ],
      testimonial: {
        text: "The lifestyle shots perfectly captured our brand's essence. Beautiful work!",
        author: "Lisa Johnson",
        role: "Creative Director",
        company: "StyleCo"
      }
    },
    {
      id: 8,
      title: "Motion Graphics",
      category: "editing",
      year: "2024",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=MOTION+GRAPHICS",
      description: "Animated graphics for social media campaign",
      client: "Digital Agency",
      role: "Motion Graphics Designer",
      goal: "Create engaging animated content for social media that drives user engagement",
      approach: "Developed dynamic, eye-catching animations that align with the brand's visual identity",
      results: "400% increase in engagement rate and 2M+ video views",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=MOTION+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=MOTION+2"
      ],
      testimonial: {
        text: "The motion graphics are absolutely stunning. Our engagement has skyrocketed!",
        author: "Alex Chen",
        role: "Creative Director",
        company: "Digital Agency"
      }
    },
    {
      id: 9,
      title: "App Development",
      category: "web",
      year: "2024",
      image: "https://via.placeholder.com/600x600/1a1a1a/ffffff?text=APP+DEVELOPMENT",
      description: "Mobile app design and development",
      client: "Startup Inc.",
      role: "Mobile App Developer",
      goal: "Create a user-friendly mobile application with modern design and seamless functionality",
      approach: "Implemented modern UI/UX principles and optimized for performance across devices",
      results: "4.8/5 app store rating and 50K+ downloads in first month",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=APP+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=APP+2"
      ],
      testimonial: {
        text: "The app exceeded our expectations. Users love the interface and functionality!",
        author: "Rachel Green",
        role: "Product Manager",
        company: "Startup Inc."
      }
    },
    {
      id: 10,
      title: "SEO Campaign",
      category: "seo",
      year: "2024",
      image: "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=SEO+CAMPAIGN",
      description: "Search engine optimization for local business",
      client: "Local Business",
      role: "SEO Specialist",
      goal: "Improve search engine rankings and increase organic traffic",
      approach: "Conducted comprehensive SEO audit and implemented targeted optimization strategies",
      results: "300% increase in organic traffic and top 3 rankings for target keywords",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=SEO+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=SEO+2"
      ],
      testimonial: {
        text: "Our website traffic has tripled since implementing Karthik's SEO strategy!",
        author: "Mike Wilson",
        role: "Business Owner",
        company: "Local Business"
      }
    },
    {
      id: 11,
      title: "Video Editing",
      category: "editing",
      year: "2024",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=VIDEO+EDITING",
      description: "Post-production for documentary series",
      client: "Media Company",
      role: "Video Editor",
      goal: "Create compelling documentary content with professional post-production",
      approach: "Applied cinematic editing techniques and color grading to enhance storytelling",
      results: "Award-winning documentary with 1M+ views and critical acclaim",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=DOC+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=DOC+2"
      ],
      testimonial: {
        text: "The editing brought our documentary to life. Absolutely brilliant work!",
        author: "Tom Anderson",
        role: "Producer",
        company: "Media Company"
      }
    },
    {
      id: 12,
      title: "Influencer Campaign",
      category: "influencing",
      year: "2024",
      image: "https://via.placeholder.com/600x600/1a1a1a/ffffff?text=INFLUENCER+CAMPAIGN",
      description: "Brand partnership and content creation",
      client: "Beauty Brand",
      role: "Influencer & Content Creator",
      goal: "Increase brand awareness and drive product sales through authentic influencer marketing",
      approach: "Created authentic, engaging content that showcases the product naturally",
      results: "1M+ impressions and 300% increase in product sales",
      deliverables: [
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=INFLUENCE+1",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=INFLUENCE+2",
        "https://via.placeholder.com/400x600/1a1a1a/ffffff?text=INFLUENCE+3"
      ],
      testimonial: {
        text: "Karthik's authentic approach to influencer marketing delivered incredible results!",
        author: "Jessica Lee",
        role: "Marketing Manager",
        company: "Beauty Brand"
      }
    }
  ]

  const filters = [
    { id: 'all', label: 'All', count: portfolioItems.length },
    { id: 'influencing', label: 'Influencing', count: portfolioItems.filter(item => item.category === 'influencing').length },
    { id: 'photography', label: 'Photography', count: portfolioItems.filter(item => item.category === 'photography').length },
    { id: 'videography', label: 'Videography', count: portfolioItems.filter(item => item.category === 'videography').length },
    { id: 'editing', label: 'Editing', count: portfolioItems.filter(item => item.category === 'editing').length },
    { id: 'promotions', label: 'Promotions', count: portfolioItems.filter(item => item.category === 'promotions').length },
    { id: 'seo', label: 'SEO', count: portfolioItems.filter(item => item.category === 'seo').length },
    { id: 'web', label: 'Web Dev', count: portfolioItems.filter(item => item.category === 'web').length }
  ]

  const filteredPortfolio = selectedFilter === 'all' 
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedFilter)

  const displayedItems = filteredPortfolio.slice(0, visibleItems)

  // Load more functionality
  const loadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleItems(prev => Math.min(prev + 6, filteredPortfolio.length))
      setIsLoading(false)
    }, 1000)
  }

  // Close modal
  const closeModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Header */}
      <section className="py-20 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                PORTFOLIO
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our latest creative projects and see how we bring brands to life through visual storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Row */}
      <section className="py-12 border-b border-gray-800 sticky top-20 bg-black/95 backdrop-blur-sm z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-8">
              <Filter size={24} className="text-pink-500" />
              <span className="text-white font-bold uppercase tracking-wider">Filter by Category</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedFilter === filter.id
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-white'
                      : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-sm opacity-75">({filter.count})</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Masonry Grid Gallery */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {displayedItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-pink-500 text-sm font-semibold uppercase tracking-wider">
                            {item.category}
                          </span>
                          <span className="text-gray-400 text-sm">{item.year}</span>
                        </div>
                        <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400 text-sm">Client: {item.client}</span>
                          <div className="flex items-center gap-2 text-white text-sm font-semibold">
                            View Project
                            <ExternalLink size={16} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-20"
            >
              <h3 className="text-2xl font-bold mb-4">No projects found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your filters to see more results.</p>
              <button 
                onClick={() => setSelectedFilter('all')}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                Show All Projects
              </button>
            </motion.div>
          )}

          {/* Load More Button */}
          {displayedItems.length < filteredPortfolio.length && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <button 
                onClick={loadMore}
                disabled={isLoading}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Loading...' : 'Load More Projects'}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal/Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gray-800/95 backdrop-blur-sm border-b border-gray-800 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
                      {selectedProject.category}
                    </span>
                    <span>•</span>
                    <span>{selectedProject.year}</span>
                    <span>•</span>
                    <span>{selectedProject.client}</span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Hero Media */}
                <div className="mb-8">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-96 object-cover rounded-xl"
                  />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <User size={20} className="text-pink-500" />
                        Role & Approach
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-pink-500 font-semibold mb-2">My Role</h4>
                          <p className="text-gray-300">{selectedProject.role}</p>
                        </div>
                        <div>
                          <h4 className="text-pink-500 font-semibold mb-2 flex items-center gap-2">
                            <Target size={16} />
                            Goal
                          </h4>
                          <p className="text-gray-300">{selectedProject.goal}</p>
                        </div>
                        <div>
                          <h4 className="text-pink-500 font-semibold mb-2 flex items-center gap-2">
                            <Zap size={16} />
                            Approach
                          </h4>
                          <p className="text-gray-300">{selectedProject.approach}</p>
                        </div>
                        <div>
                          <h4 className="text-pink-500 font-semibold mb-2 flex items-center gap-2">
                            <TrendingUp size={16} />
                            Results
                          </h4>
                          <p className="text-gray-300">{selectedProject.results}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Client Testimonial */}
                    {selectedProject.testimonial && (
                      <div className="bg-gray-700/50 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                          <Star size={20} className="text-yellow-400" />
                          Client Testimonial
                        </h3>
                        <p className="text-gray-300 italic mb-4">"{selectedProject.testimonial.text}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">
                              {selectedProject.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-white font-semibold">{selectedProject.testimonial.author}</p>
                            <p className="text-gray-400 text-sm">{selectedProject.testimonial.role} at {selectedProject.testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="bg-gray-700/50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar size={16} className="text-pink-500" />
                          <span className="text-gray-300">Year: {selectedProject.year}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <User size={16} className="text-pink-500" />
                          <span className="text-gray-300">Client: {selectedProject.client}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Deliverables Gallery */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Deliverables</h3>
                  <div className="relative">
                    <div className="flex overflow-x-auto gap-4 pb-4">
                      {selectedProject.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex-shrink-0">
                          <img
                            src={deliverable}
                            alt={`Deliverable ${index + 1}`}
                            className="w-64 h-80 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => {}}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Before/After Slider */}
                {selectedProject.beforeAfter && (
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Before & After</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-pink-500 font-semibold mb-3">Before</h4>
                        <img
                          src={selectedProject.beforeAfter.before}
                          alt="Before"
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      </div>
                      <div>
                        <h4 className="text-cyan-400 font-semibold mb-3">After</h4>
                        <img
                          src={selectedProject.beforeAfter.after}
                          alt="After"
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                READY TO START
              </span>
              <br />
              <span className="text-white">YOUR PROJECT?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group relative px-12 py-4 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/25"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                to="/services"
                className="px-12 py-4 border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio