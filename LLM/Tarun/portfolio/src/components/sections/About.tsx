'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card, GlassCard } from '@/components/ui/Card'
import { skills, certificates } from '@/data/portfolio'
import { Button } from '@/components/ui/Button'
import { useState, useEffect } from 'react'
import { XMarkIcon, ArrowTopRightOnSquareIcon, CheckBadgeIcon, SparklesIcon, RocketLaunchIcon, StarIcon } from '@heroicons/react/24/outline'


const About = () => {
  const skillCategories = [...new Set(skills.map(skill => skill.category))]
  const [selectedCert, setSelectedCert] = useState<null | (typeof certificates)[0]>(null)

  // Handle keyboard events for modal with better cleanup
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCert) {
        setSelectedCert(null)
      }
    }

    if (selectedCert) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      // Ensure cleanup when no certificate is selected
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  // Safe certificate selection handler with debugging
  const handleCertificateClick = (cert: typeof certificates[0], event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    
    console.log('Certificate clicked:', cert.name, 'Current selected:', selectedCert?.name)
    
    // Always allow selection, even if another is already selected
    setSelectedCert(cert)
  }

  // Safe modal close handler with debugging
  const handleCloseModal = () => {
    console.log('Closing modal, current cert:', selectedCert?.name)
    setSelectedCert(null)
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-100 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <AnimatedSection delay={0.2} animation="slideLeft" duration={0.8}>
            <GlassCard className="p-8 h-full glass-strong" magnetic={true}>
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  My Journey
                </motion.span>
              </motion.h3>
              <div className="space-y-6 text-gray-600 dark:text-gray-300">
                {[
                  "I'm a passionate Data Scientist and AI/ML Engineer with expertise in developing intelligent solutions that bridge the gap between complex data and actionable insights. My journey in technology has led me to specialize in machine learning, natural language processing, and chatbot development.",
                  "With a strong foundation in Python, Power BI, and modern web technologies, I create end-to-end solutions that not only solve technical challenges but also deliver exceptional user experiences. I'm particularly interested in the intersection of AI and user interface design.",
                  "When I'm not coding, you'll find me exploring the latest developments in generative AI, contributing to open-source projects, or sharing insights about data science and machine learning on LinkedIn."
                ].map((paragraph, index) => (
                  <motion.p 
                    key={index}
                    className="leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <Button
                  variant="primary"
                  href="https://www.linkedin.com/in/tarunkumar2026"
                  className="mr-4"
                  magnetic={true}
                >
                  Connect on LinkedIn
                </Button>
              </motion.div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.4} animation="slideRight" duration={0.8}>
            <div className="space-y-8">
              <motion.h3 
                className="text-2xl font-bold text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Skills & Expertise
                </motion.span>
              </motion.h3>
              {skillCategories.map((category, categoryIndex) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    {category}
                  </h4>
                  <div className="space-y-3">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 
                          }}
                          className="relative"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.6}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Continuously learning and staying updated with the latest technologies and methodologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={(e) => handleCertificateClick(cert, e)}
                className="cursor-pointer block w-full h-full"
              >
                <Card 
                  className="p-6 text-center group hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20 transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                  wrapping={true}
                  glowing={true}
                >
                  <div className="relative w-16 h-16 mx-auto mb-4 overflow-hidden rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm group-hover:text-blue-600 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 transition-colors">
                    {cert.issuer}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5 rounded-2xl transition-all duration-300" />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckBadgeIcon className="w-4 h-4 text-blue-500" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Modern Full Screen Certificate Modal */}
        <AnimatePresence mode="wait">
          {selectedCert && (
            <motion.div
              key={selectedCert.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl"
              onClick={handleCloseModal}
            >
              {/* Modal Container */}
              <div className="flex items-center justify-center min-h-screen p-6">
                <motion.div
                  initial={{ scale: 0.7, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.7, opacity: 0, y: 50 }}
                  transition={{ 
                    type: "spring", 
                    duration: 0.6, 
                    bounce: 0.25,
                    ease: "easeOut" 
                  }}
                  className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[75vh] overflow-hidden"
                  onClick={(e) => {
                    e.stopPropagation()
                    e.preventDefault()
                  }}
                >
                  {/* Compact Header Section */}
                  <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-6 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-600/90"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-14 h-14 bg-white/20 rounded-xl mx-auto mb-3 flex items-center justify-center backdrop-blur-sm"
                      >
                        <CheckBadgeIcon className="w-7 h-7 text-white" />
                      </motion.div>
                      <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold text-white mb-1"
                      >
                        Professional Certificate
                      </motion.h2>
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="text-blue-100 text-base"
                      >
                        Verified & Authenticated
                      </motion.p>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(75vh - 200px)' }}>
                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Certificate Display */}
                      <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center"
                      >
                        <div className="relative">
                          {/* Certificate Frame */}
                          <motion.div 
                            className="relative mx-auto max-w-sm"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-xl overflow-hidden border-2 border-white dark:border-gray-600">
                              <Image
                                src={selectedCert.image}
                                alt={selectedCert.name}
                                fill
                                className="object-contain p-4"
                                sizes="(max-width: 768px) 100vw, 50vw"
                              />
                              {/* Certificate Shine Effect */}
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"></div>
                            </div>
                            {/* Shadow Effect */}
                            <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-2xl blur-lg -z-10"></div>
                          </motion.div>
                        </div>
                        
                        {/* Certificate Info */}
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.6 }}
                          className="mt-4"
                        >
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                            {selectedCert.name}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {selectedCert.issuer}
                          </p>
                          <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full">
                            <CheckBadgeIcon className="w-4 h-4 text-green-600" />
                            <span className="text-green-700 dark:text-green-400 font-medium text-sm">
                              Verified Certificate
                            </span>
                          </div>
                        </motion.div>
                      </motion.div>

                      {/* Details Section */}
                      <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-4"
                      >
                        {/* Certification Details */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                            <CheckBadgeIcon className="w-5 h-5 text-blue-600 mr-2" />
                            About This Certificate
                          </h4>
                          <div className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                            <p className="leading-relaxed">
                              This professional certification validates comprehensive expertise in <strong>{selectedCert.name}</strong>, 
                              demonstrating mastery of industry-standard practices and methodologies.
                            </p>
                            <p className="leading-relaxed">
                              Issued by <strong>{selectedCert.issuer}</strong>, this credential represents 
                              rigorous training and assessment in the field.
                            </p>
                          </div>
                        </div>

                        {/* Skills Validated */}
                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                            Key Competencies
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {[
                              "Industry Best Practices",
                              "Technical Proficiency", 
                              "Professional Standards",
                              "Practical Application"
                            ].map((skill, index) => (
                              <motion.div
                                key={skill}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.7 + index * 0.1 }}
                                className="flex items-center space-x-3 p-2 bg-white/60 dark:bg-gray-800/60 rounded-lg backdrop-blur-sm"
                              >
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">{skill}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Compact Action Buttons */}
                    <motion.div 
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
                    >
                      <Button
                        variant="primary"
                        className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                        onClick={() => {
                          window.open(selectedCert.image, '_blank');
                        }}
                      >
                        <div className="flex flex-col items-center space-y-1">
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                          <span>View Full Certificate</span>
                        </div>
                      </Button>
                      <Button
                        variant="secondary"
                        className="px-6 py-3 text-base font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 flex items-center justify-center"
                        onClick={handleCloseModal}
                      >
                        Close
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default About
