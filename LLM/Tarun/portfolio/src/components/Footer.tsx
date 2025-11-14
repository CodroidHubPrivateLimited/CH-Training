'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { LinkedinIcon, GithubIcon, TwitterIcon, HeartIcon, ArrowUpIcon, SparklesIcon, MailIcon, MapPinIcon, PhoneIcon, RocketIcon } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/tarunkumar2026',
      color: 'hover:bg-blue-600/20 hover:text-blue-400',
      description: 'Professional Network'
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      href: 'https://github.com/tarunkumar2026',
      color: 'hover:bg-gray-600/20 hover:text-gray-300',
      description: 'Code Repository'
    },
    {
      name: 'Twitter',
      icon: TwitterIcon,
      href: 'https://twitter.com/tarunkumar2026',
      color: 'hover:bg-blue-400/20 hover:text-blue-400',
      description: 'Latest Updates'
    }
  ]

  const footerStats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '25+' },
    { label: 'Years Experience', value: '3+' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Simulate newsletter subscription
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl transform -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mb-16 text-center"
        >
          {footerStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Tarun Kumar
                </h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Data Scientist & AI/ML Engineer crafting intelligent solutions that transform ideas into reality. 
                Passionate about innovation, continuous learning, and building technology that makes a difference.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <MailIcon className="w-5 h-5 text-blue-400" />
                  <span>tarunkumar.dev@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPinIcon className="w-5 h-5 text-purple-400" />
                  <span>Available for Remote & On-site</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <PhoneIcon className="w-5 h-5 text-pink-400" />
                  <span>Let&apos;s connect and discuss opportunities</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Navigation */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl font-semibold mb-6 text-white"
            >
              Quick Links
            </motion.h4>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { name: 'About Me', href: '#about' },
                { name: 'My Projects', href: '#projects' },
                { name: 'Blog & Insights', href: '#blog' },
                { name: 'Get In Touch', href: '#contact' }
              ].map((link, index) => (
                <motion.button
                  key={`footer-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                  onClick={() => {
                    document.getElementById(link.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  suppressHydrationWarning={true}
                  className="block text-gray-400 hover:text-white transition-all duration-300 text-left group"
                >
                  <span className="flex items-center space-x-2">
                    <span>{link.name}</span>
                    <ArrowUpIcon className="w-4 h-4 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Newsletter & Social */}
          <div>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl font-semibold mb-6 text-white"
            >
              Stay Connected
            </motion.h4>
            
            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-gray-400 mb-4">
                Get updates on my latest projects and insights in AI/ML.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    suppressHydrationWarning={true}
                    className="w-full bg-white/10 border border-white/20 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent backdrop-blur-xl"
                  />
                  <MailIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  suppressHydrationWarning={true}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-green-600 disabled:to-green-600 text-white font-semibold py-3 rounded-2xl transition-all duration-300 disabled:cursor-not-allowed"
                >
                  {isSubscribed ? (
                    <span className="flex items-center justify-center space-x-2">
                      <span>✓ Subscribed!</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center space-x-2">
                      <RocketIcon className="w-4 h-4" />
                      <span>Subscribe</span>
                    </span>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-3"
            >
              <p className="text-gray-400 text-sm font-medium mb-4">Follow my journey</p>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-3 p-3 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 ${social.color} transition-all duration-300 group`}
                  >
                    <social.icon className="w-5 h-5" />
                    <div>
                      <div className="font-medium text-white group-hover:text-current transition-colors">
                        {social.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {social.description}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Tarun Kumar. All rights reserved.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span>Made with</span>
                <HeartIcon className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
                <span>and lots of coffee ☕</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <motion.button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning={true}
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Work Together
              </motion.button>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                suppressHydrationWarning={true}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-2xl text-white hover:bg-gradient-to-r hover:from-blue-600/30 hover:to-purple-600/30 transition-all duration-300"
              >
                <ArrowUpIcon className="w-4 h-4" />
                <span className="text-sm font-medium">Top</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
