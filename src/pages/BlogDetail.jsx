import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Copy, Check, Tag } from 'lucide-react'

const BlogDetail = () => {
  const { id } = useParams()
  const [copied, setCopied] = useState(false)

  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: parseInt(id),
    title: "The Future of Social Media Marketing: Trends to Watch in 2024",
    excerpt: "Discover the latest trends shaping social media marketing and how brands can adapt to stay ahead of the competition in the digital landscape.",
    image: "https://via.placeholder.com/1200x600/1a1a1a/ffffff?text=SOCIAL+MEDIA+TRENDS",
    date: "2024-01-15",
    readTime: "5 min read",
    tags: ["Social Media", "Marketing", "Trends"],
    category: "Marketing",
    author: "Karthik",
    content: `
      <p>The landscape of social media marketing is constantly evolving, and 2024 promises to bring some of the most significant changes we've seen in years. As brands and creators navigate this dynamic environment, understanding emerging trends becomes crucial for staying competitive.</p>

      <h2>The Rise of Authentic Content</h2>
      <p>One of the most notable shifts we're seeing is the move toward more authentic, unfiltered content. Users are increasingly drawn to real, relatable experiences rather than overly polished productions. This trend is reshaping how brands approach their social media strategy.</p>

      <p>Key indicators of this shift include:</p>
      <ul>
        <li>Increased engagement with behind-the-scenes content</li>
        <li>Growing popularity of user-generated content campaigns</li>
        <li>Rise of micro-influencers over traditional celebrities</li>
        <li>Preference for raw, unedited video content</li>
      </ul>

      <h2>Video-First Platforms Dominate</h2>
      <p>Video content continues to dominate social media, with platforms like TikTok, Instagram Reels, and YouTube Shorts leading the charge. The success of these platforms has forced other social networks to adapt their algorithms and features to prioritize video content.</p>

      <p>For marketers, this means:</p>
      <ul>
        <li>Investing in video production capabilities</li>
        <li>Creating platform-specific video content</li>
        <li>Understanding the unique characteristics of each video platform</li>
        <li>Developing mobile-first video strategies</li>
      </ul>

      <h2>AI and Automation Integration</h2>
      <p>Artificial intelligence is becoming increasingly integrated into social media marketing tools, offering new opportunities for personalization and efficiency. From content creation to audience targeting, AI is helping marketers work smarter, not harder.</p>

      <p>Some of the most exciting AI applications include:</p>
      <ul>
        <li>Automated content generation and optimization</li>
        <li>Advanced audience segmentation and targeting</li>
        <li>Predictive analytics for campaign performance</li>
        <li>Chatbot integration for customer service</li>
      </ul>

      <h2>Privacy-First Marketing</h2>
      <p>With increasing privacy regulations and user concerns about data collection, marketers are having to find new ways to reach and engage their audiences. This shift toward privacy-first marketing is driving innovation in areas like contextual advertising and first-party data collection.</p>

      <h2>Looking Ahead</h2>
      <p>As we move through 2024, the brands that will succeed are those that can adapt quickly to these changing trends while maintaining authenticity and providing genuine value to their audiences. The key is to stay informed, experiment with new approaches, and always prioritize the user experience.</p>

      <p>Remember, social media marketing is not just about following trends—it's about understanding your audience and finding creative ways to connect with them in meaningful ways.</p>
    `
  }

  const relatedPosts = [
    {
      id: 2,
      title: "Mastering Product Photography: Tips for Stunning Visuals",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=PRODUCT+PHOTOGRAPHY",
      date: "2024-01-12",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Building Your Personal Brand: A Creator's Guide",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=PERSONAL+BRAND",
      date: "2024-01-08",
      readTime: "6 min read"
    },
    {
      id: 7,
      title: "The Psychology of Color in Marketing",
      image: "https://via.placeholder.com/400x300/1a1a1a/ffffff?text=COLOR+PSYCHOLOGY",
      date: "2024-01-01",
      readTime: "5 min read"
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const shareOnSocial = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(blogPost.title)
    
    let shareUrl = ''
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        break
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </motion.div>
      </div>

      {/* Hero Section with Overlay Title */}
      <section className="relative pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Hero Image with Overlay */}
            <div className="relative overflow-hidden rounded-3xl mb-12">
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              {/* Overlay Title */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="max-w-4xl">
                  {/* Article Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <span className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {blogPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Calendar size={16} />
                      {formatDate(blogPost.date)}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <Clock size={16} />
                      {blogPost.readTime}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm">
                      <span>By {blogPost.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
                    {blogPost.title}
                  </h1>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-2 text-fuchsia-500 text-sm font-semibold bg-fuchsia-500/10 px-3 py-1 rounded-full"
                      >
                        <Tag size={14} />
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content - Well-spaced with headings, blockquotes, inline images */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-xl prose-invert max-w-none prose-headings:text-white prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:bg-gradient-to-r prose-h2:from-fuchsia-500 prose-h2:to-cyan-400 prose-h2:bg-clip-text prose-h2:text-transparent prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8 prose-ul:text-gray-300 prose-li:mb-3 prose-strong:text-white prose-strong:font-semibold prose-a:text-fuchsia-500 prose-a:no-underline prose-a:hover:text-cyan-400 prose-a:hover:underline prose-blockquote:border-l-4 prose-blockquote:border-fuchsia-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:bg-gray-800/50 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:my-8"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="sticky top-24 space-y-8"
              >
                {/* Social Share */}
                <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                    <Share2 size={20} className="text-fuchsia-500" />
                    Share Article
                  </h3>
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => shareOnSocial('facebook')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-glow"
                    >
                      <Facebook size={20} />
                      Share on Facebook
                    </motion.button>
                    <motion.button
                      onClick={() => shareOnSocial('twitter')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-all duration-300 hover:shadow-glow"
                    >
                      <Twitter size={20} />
                      Share on Twitter
                    </motion.button>
                    <motion.button
                      onClick={() => shareOnSocial('linkedin')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition-all duration-300 hover:shadow-glow"
                    >
                      <Linkedin size={20} />
                      Share on LinkedIn
                    </motion.button>
                    <motion.button
                      onClick={copyToClipboard}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-3 p-3 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all duration-300 hover:shadow-glow"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                      {copied ? 'Copied!' : 'Copy Link'}
                    </motion.button>
                  </div>
                </div>

                {/* Author Info */}
                <div className="bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-2xl p-6">
                  <h3 className="text-white font-bold mb-6">About the Author</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 rounded-full flex items-center justify-center shadow-glow">
                      <span className="text-white font-bold text-xl">K</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Karthik</h4>
                      <p className="text-gray-300 text-sm">Creative Professional</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Passionate about helping brands and creators tell their stories through compelling visual content and strategic marketing.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block w-full text-center px-4 py-3 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-semibold rounded-xl hover:shadow-glow transition-all duration-300"
                  >
                    Get in Touch
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Grid at Bottom */}
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
                RELATED POSTS
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Continue exploring with these related articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="relative overflow-hidden rounded-2xl bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-fuchsia-500/50 hover:shadow-glow transition-all duration-300">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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
                      <h3 className="text-white font-bold text-lg mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-cyan-400 transition-all duration-300">
                        {post.title}
                      </h3>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-center gap-2 text-white text-sm font-bold bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 px-6 py-3 rounded-full">
                          Read More
                          <ArrowLeft size={16} className="rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                READY TO WORK
              </span>
              <br />
              <span className="text-white">TOGETHER?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="group relative px-12 py-4 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:shadow-glow"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/portfolio"
                  className="px-12 py-4 border-2 border-gray-300 text-white font-bold text-lg rounded-full hover:bg-gray-300 hover:text-black transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogDetail
