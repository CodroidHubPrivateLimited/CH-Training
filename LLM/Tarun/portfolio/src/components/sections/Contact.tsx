'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useIsClient } from '@/hooks/useIsClient'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  PhoneIcon,
  ArrowDownTrayIcon,
  SparklesIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon
} from '@heroicons/react/24/outline'
import {
  LinkedinIcon,
  GithubIcon,
  TwitterIcon
} from 'lucide-react'

const Contact = () => {
  const isClient = useIsClient()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success message
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'tarun.kumar@example.com',
      href: 'mailto:tarun.kumar@example.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'India',
      href: null,
      description: 'Open to remote work'
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '+91 XXXXXXXXXX',
      href: 'tel:+91XXXXXXXXXX',
      description: 'Available for calls'
    },
    {
      icon: ClockIcon,
      label: 'Response Time',
      value: '24 hours',
      href: null,
      description: 'Quick response guaranteed'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/tarunkumar2026',
      color: 'text-blue-600 hover:text-blue-700',
      followers: '1K+ connections',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com/tarunkumar2026',
      color: 'text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300',
      followers: '500+ stars',
      bgColor: 'bg-gray-100 dark:bg-gray-800'
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      href: 'https://twitter.com/tarunkumar2026',
      color: 'text-sky-600 hover:text-sky-700',
      followers: '300+ followers',
      bgColor: 'bg-sky-100 dark:bg-sky-900/30'
    }
  ]

  if (!isClient) {
    return (
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 dark:from-gray-900 dark:via-indigo-900/10 dark:to-gray-900 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-br from-indigo-500/8 to-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-br from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Enhanced Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-indigo-200/50 dark:border-indigo-700/50"
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 dark:text-indigo-300 font-medium">Let&apos;s Connect</span>
              <SparklesIcon className="w-4 h-4 text-purple-600" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              Get In <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Ready to collaborate on your next data science or AI project? Let&apos;s discuss how we can work 
              together to build innovative solutions that drive real business impact.
            </p>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <AnimatedSection delay={0.2}>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
                      placeholder="Your name"
                      suppressHydrationWarning
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
                      placeholder="your.email@example.com"
                      suppressHydrationWarning
                    />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors"
                    placeholder="Project collaboration, consultation, etc."
                    suppressHydrationWarning
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white transition-colors resize-none"
                    placeholder="Tell me about your project or how I can help you..."
                    suppressHydrationWarning
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button 
                    type="submit" 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <info.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-900 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${social.color} transition-all duration-300`}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Resume Download */}
              <Card className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Download Resume
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Get a copy of my latest resume with detailed information about my experience and skills.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  href="/assets/resume/Tarun Resume copy.pdf"
                  className="w-full"
                >
                  <ArrowDownTrayIcon className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

export default Contact
