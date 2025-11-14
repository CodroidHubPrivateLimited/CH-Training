'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { blogPosts } from '@/data/portfolio'
import { useState } from 'react'
import { 
  ArrowTopRightOnSquareIcon, 
  CalendarIcon, 
  SparklesIcon,
  BookOpenIcon,
  UserIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
  EnvelopeIcon,
  RssIcon,
  ChevronRightIcon,
  EyeIcon
} from '@heroicons/react/24/outline'

const Blog = () => {
  const [subscribedEmail, setSubscribedEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter subscription logic here
    setIsSubscribed(true)
    setSubscribedEmail('')
  }

  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-purple-900/10 dark:to-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-br from-indigo-500/8 to-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-purple-200/50 dark:border-purple-700/50"
            >
              <BookOpenIcon className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 dark:text-purple-300 font-medium">Knowledge Hub</span>
              <SparklesIcon className="w-4 h-4 text-pink-600" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Latest <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Sharing insights about AI, machine learning, data science, and the latest trends in technology 
              through detailed articles, tutorials, and thought leadership pieces.
            </p>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        {/* Enhanced Article Stats */}
        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {[
              { icon: BookOpenIcon, label: 'Articles', value: `${blogPosts.length}+` },
              { icon: EyeIcon, label: 'Views', value: '10K+' },
              { icon: HeartIcon, label: 'Likes', value: '500+' },
              { icon: ShareIcon, label: 'Shares', value: '200+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Enhanced Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl">
                
                {/* Article Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                          <span className="text-purple-600 dark:text-purple-400 text-sm font-medium">Latest Article</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400 text-sm">
                          <CalendarIcon className="w-4 h-4" />
                          <span>5 min read</span>
                        </div>
                      </div>
                      
                      <motion.h3 
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                      >
                        {post.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      >
                        {post.description}
                      </motion.p>
                    </div>
                    
                    {/* Article Icon */}
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl"
                    >
                      <BookOpenIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </motion.div>
                  </div>

                  {/* Article Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + tagIndex * 0.05 + 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          tagIndex === 0 ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                          tagIndex === 1 ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300' :
                          'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        +{post.tags.length - 3} more
                      </span>
                    )}
                  </motion.div>

                  {/* Article Engagement */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    className="flex items-center justify-between mb-6 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>1.2K views</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <HeartIcon className="w-4 h-4 text-red-500" />
                        <span>89 likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ChatBubbleLeftIcon className="w-4 h-4" />
                        <span>12 comments</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 + 0.7 }}
                  >
                    <Button
                      variant="outline"
                      href={post.link}
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 rounded-2xl py-4 font-semibold"
                    >
                      <span className="flex items-center justify-center">
                        Read Full Article
                        <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </motion.div>
                </div>

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 rounded-3xl" />
                
                {/* Floating elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Newsletter Section */}
        <AnimatedSection delay={0.8}>
          <motion.div 
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 rounded-3xl p-12 text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 border border-white rounded-lg rotate-45"></div>
              <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <RssIcon className="w-16 h-16 mx-auto mb-6 text-white/90" />
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with Latest Insights
                </h3>
                <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                  Get the latest articles about AI, data science, and technology trends directly in your inbox. 
                  Join 500+ professionals who trust our content.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-md mx-auto"
              >
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={subscribedEmail}
                        onChange={(e) => setSubscribedEmail(e.target.value)}
                        required
                        suppressHydrationWarning={true}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="secondary"
                      className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <span className="flex items-center">
                        Subscribe
                        <SparklesIcon className="w-5 h-5 ml-2" />
                      </span>
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-8 py-4 rounded-2xl">
                      <SparklesIcon className="w-6 h-6 text-white" />
                      <span className="text-xl font-semibold">Thank you for subscribing!</span>
                    </div>
                    <p className="mt-4 opacity-90">You&apos;ll receive our latest articles in your inbox.</p>
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center space-x-8 mt-8 text-white/70 text-sm"
              >
                <div className="flex items-center space-x-1">
                  <span>📧 Weekly updates</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>🚀 No spam</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span>✨ Unsubscribe anytime</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Featured Topics */}
        <AnimatedSection delay={1.0}>
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Popular Topics I Write About
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {['Machine Learning', 'Data Science', 'AI Ethics', 'Deep Learning', 'NLP', 'Computer Vision', 'Business Intelligence', 'Cloud Computing'].map((topic, index) => (
                <motion.div
                  key={topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-300 font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {topic}
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Blog
