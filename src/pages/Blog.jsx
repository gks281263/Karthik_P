import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, Search, Filter, Tag } from 'lucide-react'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Social Media Marketing: Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping social media marketing and how brands can adapt to stay ahead of the competition in the digital landscape.",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=SOCIAL+MEDIA+TRENDS",
      date: "2024-01-15",
      readTime: "5 min read",
      tags: ["Social Media", "Marketing", "Trends"],
      category: "Marketing"
    },
    {
      id: 2,
      title: "Mastering Product Photography: Tips for Stunning Visuals",
      excerpt: "Learn professional techniques for capturing product photos that sell. From lighting setups to post-processing, elevate your product photography game.",
      image: "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=PRODUCT+PHOTOGRAPHY",
      date: "2024-01-12",
      readTime: "7 min read",
      tags: ["Photography", "Product", "Tips"],
      category: "Photography"
    },
    {
      id: 3,
      title: "Video Editing Workflow: From Raw Footage to Final Cut",
      excerpt: "A comprehensive guide to professional video editing workflows, covering everything from organization to color grading and final export.",
      image: "https://via.placeholder.com/600x450/1a1a1a/ffffff?text=VIDEO+EDITING",
      date: "2024-01-10",
      readTime: "8 min read",
      tags: ["Video Editing", "Workflow", "Tutorial"],
      category: "Editing"
    },
    {
      id: 4,
      title: "Building Your Personal Brand: A Creator's Guide",
      excerpt: "Essential strategies for building a strong personal brand as a content creator, including authenticity, consistency, and audience engagement.",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=PERSONAL+BRAND",
      date: "2024-01-08",
      readTime: "6 min read",
      tags: ["Personal Brand", "Content Creation", "Strategy"],
      category: "Influencing"
    },
    {
      id: 5,
      title: "SEO for Creators: Optimizing Your Content for Search",
      excerpt: "Learn how to optimize your content for search engines and increase your organic reach as a content creator and influencer.",
      image: "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=SEO+FOR+CREATORS",
      date: "2024-01-05",
      readTime: "9 min read",
      tags: ["SEO", "Content", "Optimization"],
      category: "SEO"
    },
    {
      id: 6,
      title: "Web Design Trends: What's Hot in 2024",
      excerpt: "Explore the latest web design trends and how they're shaping the future of digital experiences and user interfaces.",
      image: "https://via.placeholder.com/600x450/1a1a1a/ffffff?text=WEB+DESIGN+TRENDS",
      date: "2024-01-03",
      readTime: "6 min read",
      tags: ["Web Design", "Trends", "UI/UX"],
      category: "Web Development"
    },
    {
      id: 7,
      title: "The Psychology of Color in Marketing",
      excerpt: "Understanding how color choices impact consumer behavior and brand perception in marketing and design.",
      image: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=COLOR+PSYCHOLOGY",
      date: "2024-01-01",
      readTime: "5 min read",
      tags: ["Marketing", "Psychology", "Design"],
      category: "Marketing"
    },
    {
      id: 8,
      title: "Content Calendar Planning: A Strategic Approach",
      excerpt: "Master the art of content planning with strategic calendar creation that drives engagement and builds audience loyalty.",
      image: "https://via.placeholder.com/600x500/1a1a1a/ffffff?text=CONTENT+CALENDAR",
      date: "2023-12-28",
      readTime: "7 min read",
      tags: ["Content Planning", "Strategy", "Social Media"],
      category: "Marketing"
    },
    {
      id: 9,
      title: "Lighting Techniques for Professional Photography",
      excerpt: "Essential lighting setups and techniques every photographer should know to create stunning, professional-quality images.",
      image: "https://via.placeholder.com/600x450/1a1a1a/ffffff?text=LIGHTING+TECHNIQUES",
      date: "2023-12-25",
      readTime: "8 min read",
      tags: ["Photography", "Lighting", "Techniques"],
      category: "Photography"
    }
  ]

  const allTags = ['all', ...new Set(blogPosts.flatMap(post => post.tags))]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Gradient Background Strip */}
      <section className="relative py-32 overflow-hidden">
        {/* Gradient Background Strip */}
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white px-8 py-3 rounded-full text-lg font-bold tracking-wider">
                INSIGHTS, TIPS & STORIES
              </span>
            </motion.div>
            
            <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                BLOG
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover insights, tips, and trends in creative marketing, photography, videography, and digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row gap-8 items-center justify-between"
          >
            {/* Search Bar */}
            <div className="relative flex-1 max-w-lg">
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 focus:shadow-glow transition-all duration-300"
              />
            </div>

            {/* Tag Filter */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-fuchsia-500" />
                <span className="text-gray-300 font-semibold">Filter by:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {allTags.slice(0, 8).map((tag) => (
                  <motion.button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedTag === tag
                        ? 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white shadow-glow'
                        : 'bg-gray-800/70 backdrop-blur-sm border border-gray-700 text-gray-300 hover:text-white hover:border-fuchsia-500 hover:shadow-glow'
                    }`}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid - 3 Column Layout */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-fuchsia-500/50 hover:shadow-glow transition-all duration-300">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-white font-bold text-xl mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-cyan-400 transition-all duration-300">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="text-fuchsia-500 text-xs font-semibold bg-fuchsia-500/10 px-2 py-1 rounded-full">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                          <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center justify-center gap-2 text-white text-sm font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-6 py-3 rounded-full">
                              Read More
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-400 mb-8">Try adjusting your search or filter criteria.</p>
              <button 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedTag('all')
                }}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold rounded-full hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                Clear Filters
              </button>
            </motion.div>
          )}

          {/* Load More */}
          {filteredPosts.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Load More Articles
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-3xl p-12"
          >
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                STAY UPDATED
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Get the latest insights, tips, and trends delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900/70 backdrop-blur-sm border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-fuchsia-500 focus:shadow-glow transition-all duration-300"
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
      </section>
    </div>
  )
}

export default Blog