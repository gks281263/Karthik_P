import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, User, Mail, MessageSquare, Briefcase, DollarSign, Calendar, Target } from 'lucide-react'

const ProjectModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectCategory: '',
    budgetRange: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const projectCategories = [
    'Photography',
    'Videography', 
    'Video Editing',
    'Social Media Management',
    'SEO Services',
    'Web Development',
    'Influencing & Content Creation',
    'Promotional Campaigns',
    'Brand Strategy',
    'Other'
  ]

  const budgetRanges = [
    'Under $1,000',
    '$1,000 - $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Let\'s discuss'
  ]

  const timelineOptions = [
    'ASAP (Rush job)',
    'Within 1 week',
    'Within 2-3 weeks',
    'Within 1 month',
    'Within 2-3 months',
    'Flexible timeline',
    'Let\'s discuss'
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      projectCategory: '',
      budgetRange: '',
      timeline: '',
      message: ''
    })
    
    setIsSubmitting(false)
    onClose()
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-3xl bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-8 border-b border-gray-800">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
              >
                <X size={20} />
              </button>
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Start Your Project</h2>
                <p className="text-gray-400">Let's discuss your vision and create something extraordinary together</p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm font-semibold">
                    <User size={16} className="inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm font-semibold">
                    <Mail size={16} className="inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-semibold">
                  <Target size={16} className="inline mr-2" />
                  Project Category *
                </label>
                <select
                  name="projectCategory"
                  value={formData.projectCategory}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                >
                  <option value="">Select project category</option>
                  {projectCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm font-semibold">
                    <DollarSign size={16} className="inline mr-2" />
                    Budget Range *
                  </label>
                  <select
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-300 text-sm font-semibold">
                    <Calendar size={16} className="inline mr-2" />
                    Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300"
                  >
                    <option value="">Select timeline</option>
                    {timelineOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-gray-300 text-sm font-semibold">
                  <MessageSquare size={16} className="inline mr-2" />
                  Project Brief *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/20 transition-all duration-300 resize-none"
                  placeholder="Describe your project in detail: goals, target audience, specific requirements, inspiration, and any other relevant information..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-bold rounded-xl hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Project Brief
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
