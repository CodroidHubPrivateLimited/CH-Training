'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { projects } from '@/data/portfolio'
import { useState, useEffect } from 'react'
import { 
  RocketLaunchIcon, 
  SparklesIcon, 
  ArrowTopRightOnSquareIcon,
  FunnelIcon,
  EyeIcon,
  HeartIcon,
  ShareIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [visibleProjects, setVisibleProjects] = useState(6)

  const allTags = [...new Set(projects.flatMap(project => project.tags))]
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter))

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3)
  }

  const resetFilter = () => {
    setFilter('all')
    setVisibleProjects(6)
  }

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-blue-200/50 dark:border-blue-700/50"
            >
              <RocketLaunchIcon className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 dark:text-blue-300 font-medium">My Portfolio</span>
              <SparklesIcon className="w-4 h-4 text-purple-600" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Featured <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Showcasing my expertise in data science, machine learning, and AI development through 
              real-world projects that deliver measurable business impact and drive innovation.
            </p>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        {/* Enhanced Filter Tabs */}
        <AnimatedSection delay={0.2}>
          <div className="mb-16">
            <div className="flex items-center justify-center mb-6">
              <FunnelIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-400 font-medium">Filter by technology:</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <motion.button
                key="all-projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter('all')}
                suppressHydrationWarning={true}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 ${
                  filter === 'all'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl border-transparent'
                    : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 backdrop-blur-sm'
                }`}
              >
                All Projects
                <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                  {projects.length}
                </span>
              </motion.button>
              
              {['Data Science', 'Power BI', 'AI/ML', 'NLP', 'Chatbot Development'].map((tag) => {
                const projectCount = projects.filter(p => p.tags.includes(tag)).length;
                return (
                  <motion.button
                    key={`filter-${tag.toLowerCase().replace(/\s+/g, '-')}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFilter(tag)}
                    suppressHydrationWarning={true}
                    className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 border-2 ${
                      filter === tag
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl border-transparent'
                        : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 backdrop-blur-sm'
                    }`}
                  >
                    {tag}
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      {projectCount}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Filter Results Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Showing {Math.min(visibleProjects, filteredProjects.length)} of {filteredProjects.length} projects
                {filter !== 'all' && (
                  <button 
                    onClick={resetFilter}
                    className="ml-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium underline"
                  >
                    Clear filters
                  </button>
                )}
              </span>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-white/30 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl">
                  
                  {/* Project Header */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-600 dark:text-green-400 text-sm font-medium">Live Project</span>
                        </div>
                        
                        <motion.h3 
                          className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        
                        <motion.p 
                          className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.3 }}
                        >
                          {project.description}
                        </motion.p>
                      </div>
                      
                      {/* Project Icon */}
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl"
                      >
                        <RocketLaunchIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                    </div>

                    {/* Technology Tags */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.5 }}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 text-xs font-medium rounded-full ${
                            tagIndex === 0 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                            tagIndex === 1 ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' :
                            'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300'
                          }`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </motion.div>

                    {/* Project Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="flex items-center space-x-4 mb-6 text-sm text-gray-600 dark:text-gray-400"
                    >
                      <div className="flex items-center space-x-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>Professional</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <HeartIcon className="w-4 h-4 text-red-500" />
                        <span>Impact-driven</span>
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                    >
                      <Button
                        variant="outline"
                        href={project.link}
                        className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 rounded-2xl py-4 font-semibold"
                      >
                        <span className="flex items-center justify-center">
                          View on LinkedIn
                          <ChevronRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </motion.div>
                  </div>

                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 rounded-3xl" />
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <AnimatedSection delay={0.5}>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={loadMore}
                  className="px-12 py-4 rounded-2xl border-2 border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  <span className="flex items-center">
                    Load More Projects
                    <SparklesIcon className="w-5 h-5 ml-2" />
                  </span>
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        )}

        {/* Enhanced CTA Section */}
        <AnimatedSection delay={0.6}>
          <div className="mt-24">
            <motion.div 
              className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-40 h-40 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 border border-white rounded-lg rotate-45"></div>
                <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <RocketLaunchIcon className="w-16 h-16 mx-auto mb-6 text-white/90" />
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to collaborate on your next project?
                  </h3>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Let&apos;s discuss how we can work together to build innovative data science and AI solutions 
                    that drive real business value.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      href="#contact"
                      className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                    >
                      <span className="flex items-center">
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        Get In Touch
                      </span>
                    </Button>
                    
                    <Button
                      variant="ghost"
                      size="lg"
                      href="https://www.linkedin.com/in/tarunkumar2026"
                      className="text-white hover:bg-white/10 border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold transition-all duration-300"
                    >
                      <span className="flex items-center">
                        <ShareIcon className="w-5 h-5 mr-2" />
                        View LinkedIn
                      </span>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Projects
