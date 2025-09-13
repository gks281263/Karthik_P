import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus, Clock, DollarSign, CheckCircle, Star, Users, Award, Zap, Camera, Video, Edit3, Share2, Search, Code, MessageCircle, Calendar, Shield, FileText } from 'lucide-react'

const Services = () => {
  const [expandedService, setExpandedService] = useState(null)
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const services = [
    {
      title: "Influencing",
      description: "Authentic brand partnerships and content creation that drives engagement and builds trust with your target audience.",
      icon: Users,
      color: "from-pink-500 to-purple-500",
      timeline: "1-2 weeks",
      pricing: "Starting at $800",
      includes: [
        "Content strategy development",
        "Authentic brand integration",
        "High-quality content creation",
        "Social media posting",
        "Performance analytics"
      ],
      deliverables: [
        "10+ custom posts",
        "Stories and reels content",
        "Engagement reports",
        "Brand partnership materials"
      ],
      samples: "Instagram campaigns, TikTok content, YouTube collaborations"
    },
    {
      title: "Photography",
      description: "Professional photography services for brands, events, and lifestyle content that tells your story and captures attention.",
      icon: Camera,
      color: "from-cyan-400 to-blue-500",
      timeline: "1-2 weeks",
      pricing: "Starting at $500",
      includes: [
        "Professional photo shoot",
        "High-resolution edited images",
        "Multiple format delivery",
        "Basic retouching included",
        "Usage rights for marketing"
      ],
      deliverables: [
        "50+ edited high-res images",
        "Web-optimized versions",
        "Print-ready files",
        "Usage license agreement"
      ],
      samples: "Brand photography, product shoots, lifestyle sessions"
    },
    {
      title: "Videography",
      description: "Cinematic video production and editing that captures attention and drives engagement across all platforms.",
      icon: Video,
      color: "from-purple-500 to-pink-500",
      timeline: "2-3 weeks",
      pricing: "Starting at $800",
      includes: [
        "Professional video production",
        "Cinematic editing and color grading",
        "Multiple format delivery",
        "Motion graphics and titles",
        "Music and sound design"
      ],
      deliverables: [
        "Final edited video (multiple formats)",
        "Raw footage (if requested)",
        "Social media cutdowns",
        "Thumbnail designs"
      ],
      samples: "Product videos, brand commercials, social media content"
    },
    {
      title: "Editing",
      description: "Post-production magic that transforms raw footage into compelling visual narratives that engage and convert.",
      icon: Edit3,
      color: "from-orange-500 to-red-500",
      timeline: "1-2 weeks",
      pricing: "Starting at $300",
      includes: [
        "Professional video editing",
        "Color correction and grading",
        "Audio enhancement",
        "Motion graphics integration",
        "Multiple revision rounds"
      ],
      deliverables: [
        "Final edited video",
        "Multiple format exports",
        "Social media versions",
        "Project files (if requested)"
      ],
      samples: "Video editing, color grading, motion graphics"
    },
    {
      title: "Promotions",
      description: "Strategic social media marketing and promotional campaigns that boost brand visibility and drive sales.",
      icon: Share2,
      color: "from-green-500 to-emerald-500",
      timeline: "Ongoing",
      pricing: "Starting at $400/month",
      includes: [
        "Content strategy development",
        "Visual content creation",
        "Social media management",
        "Community engagement",
        "Performance analytics"
      ],
      deliverables: [
        "Monthly content calendar",
        "30+ custom posts",
        "Stories and reels",
        "Analytics reports"
      ],
      samples: "Social media campaigns, promotional content, brand awareness"
    },
    {
      title: "SEO/Web Dev",
      description: "Search engine optimization and modern web development that increases visibility and converts visitors into customers.",
      icon: Code,
      color: "from-indigo-500 to-purple-500",
      timeline: "4-8 weeks",
      pricing: "Starting at $1,500",
      includes: [
        "Custom website design",
        "Responsive development",
        "SEO optimization",
        "Content management system",
        "Performance optimization"
      ],
      deliverables: [
        "Fully functional website",
        "Admin dashboard",
        "SEO optimization",
        "Training and documentation"
      ],
      samples: "Website development, SEO campaigns, digital marketing"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      description: "We start by understanding your brand, goals, and target audience to create a tailored strategy.",
      icon: MessageCircle
    },
    {
      step: "02", 
      title: "Planning",
      description: "Detailed project planning with timelines, deliverables, and clear communication channels.",
      icon: Calendar
    },
    {
      step: "03",
      title: "Creation",
      description: "High-quality content creation using professional equipment and industry best practices.",
      icon: Zap
    },
    {
      step: "04",
      title: "Review",
      description: "Collaborative review process with multiple revision rounds to ensure perfection.",
      icon: Star
    },
    {
      step: "05",
      title: "Delivery",
      description: "Final delivery of all assets with proper formatting and usage guidelines.",
      icon: FileText
    }
  ]

  const faqs = [
    {
      question: "What's your typical turnaround time?",
      answer: "Turnaround times vary by service type. Photography projects typically take 1-2 weeks, videography 2-3 weeks, and web development 4-8 weeks. We provide detailed timelines during the planning phase and always communicate any potential delays."
    },
    {
      question: "How many revisions are included?",
      answer: "We include multiple revision rounds in all our packages to ensure you're completely satisfied. Typically, we offer 2-3 rounds of revisions, but this can be adjusted based on your specific needs and package selection."
    },
    {
      question: "What are your licensing and usage rights?",
      answer: "We provide comprehensive usage rights for marketing and promotional purposes. For most projects, you'll receive full commercial usage rights. Extended licensing options are available for additional fees if needed."
    },
    {
      question: "Do you work with clients outside your local area?",
      answer: "Absolutely! We work with clients worldwide and have extensive experience with remote collaboration. Many of our services can be delivered completely remotely, and we're flexible with communication methods and time zones."
    },
    {
      question: "What's included in your pricing?",
      answer: "Our pricing includes all the deliverables listed in each service package, multiple revision rounds, and basic usage rights. Additional services like extended licensing, rush delivery, or extra revisions may incur additional fees."
    },
    {
      question: "How do you handle project communication?",
      answer: "We maintain clear communication throughout the project using email, video calls, and project management tools. You'll have direct access to your project manager and regular updates on progress and milestones."
    },
    {
      question: "What file formats do you provide?",
      answer: "We provide files in multiple formats to suit your needs. For photography, we deliver high-resolution JPEGs, TIFFs, and RAW files. For video, we provide MP4, MOV, and other formats as needed. All files are optimized for their intended use."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes! We provide 30 days of free support after project delivery for any technical issues or questions. Extended support packages are available for ongoing maintenance and updates."
    }
  ]

  const toggleService = (serviceTitle) => {
    setExpandedService(expandedService === serviceTitle ? null : serviceTitle)
  }

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-cyan-400/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,110,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                What I Can Do
              </span>
              <br />
              <span className="text-white">for You</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Comprehensive creative services to elevate your brand and drive results. From concept to execution, we deliver exceptional work that makes an impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-gray-700 hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 cursor-pointer"
                onClick={() => toggleService(service.title)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-cyan-400 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock size={16} className="text-pink-500" />
                    <span className="text-gray-300 text-sm">{service.timeline}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign size={16} className="text-cyan-400" />
                    <span className="text-gray-300 text-sm font-semibold">{service.pricing}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Samples</h4>
                  <p className="text-gray-400 text-sm">{service.samples}</p>
                </div>

                <button className="w-full py-3 border border-gray-700 text-white font-semibold rounded-full hover:border-pink-500 hover:text-pink-500 transition-all duration-300 mb-4">
                  {expandedService === service.title ? 'Hide Details' : 'View Details'}
                </button>

                <AnimatePresence>
                  {expandedService === service.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-white font-bold mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {service.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                              <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-bold mb-3">Deliverables</h4>
                        <ul className="space-y-2">
                          {service.deliverables.map((item, idx) => (
                            <li key={idx} className="text-gray-300 text-sm">
                              • {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex gap-3">
                        <Link 
                          to="/contact" 
                          className="flex-1 py-2 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold rounded-full text-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
                        >
                          Get Quote
                        </Link>
                        <Link 
                          to="/portfolio" 
                          className="flex-1 py-2 border border-gray-700 text-white font-semibold rounded-full text-center hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                        >
                          View Examples
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Bands */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                PRICING
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transparent pricing with flexible packages to fit your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "Starting at $500",
                description: "Perfect for small projects and individual creators",
                features: ["Basic deliverables", "2 revision rounds", "Standard timeline", "Email support"]
              },
              {
                name: "Professional",
                price: "Starting at $1,200",
                description: "Ideal for growing businesses and established brands",
                features: ["Premium deliverables", "3 revision rounds", "Priority timeline", "Direct communication", "Extended usage rights"]
              },
              {
                name: "Enterprise",
                price: "Request Quote",
                description: "Custom solutions for large-scale projects and campaigns",
                features: ["Custom deliverables", "Unlimited revisions", "Rush delivery", "Dedicated project manager", "Full commercial rights"]
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`bg-gray-800/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 ${
                  index === 1 
                    ? 'border-pink-500 shadow-2xl shadow-pink-500/10' 
                    : 'border-gray-800 hover:border-gray-700'
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-black bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {tier.price}
                  </div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-full font-bold text-center transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-400 text-white hover:shadow-lg hover:shadow-pink-500/25'
                      : 'border-2 border-gray-700 text-white hover:border-pink-500 hover:text-pink-500'
                  }`}
                >
                  {tier.name === "Enterprise" ? "Request Quote" : "Get Started"}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                OUR PROCESS
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              How we bring your vision to life through our proven workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <step.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-black bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-cyan-400 bg-clip-text text-transparent">
                FAQ
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to know about working with us
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
                >
                  <span className="text-white font-semibold text-lg">{faq.question}</span>
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-cyan-400 rounded-full flex items-center justify-center">
                    {expandedFAQ === index ? (
                      <Minus size={16} className="text-white" />
                    ) : (
                      <Plus size={16} className="text-white" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 p-12"
          >
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white">
                Book a free consult today
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to transform your brand with stunning visuals and digital solutions? Let's discuss your project and create something amazing together.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-12 py-4 bg-white text-black font-bold text-lg rounded-full hover:shadow-2xl transition-all duration-300"
                >
                  Contact Me
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

export default Services
