'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDownIcon, SparklesIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/Button'
import { NoSSR } from '@/components/ui/NoSSR'

const Hero = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-navy-900 to-slate-800 dark:from-black dark:via-slate-900 dark:to-gray-900 relative overflow-hidden">
      
      {/* Modern professional background */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse opacity-70"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-1/6 w-[400px] h-[400px] bg-gradient-to-br from-slate-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '2s'}}></div>
        
        {/* Professional mesh overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),rgba(15,23,42,0.95))]"></div>
      </div>
      
      {/* Animated geometric patterns - wrapped with NoSSR */}
      <NoSSR>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border border-white/20 rounded-lg rotate-12 animate-pulse"></div>
          <div className="absolute bottom-40 right-32 w-32 h-32 border border-blue-400/30 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </NoSSR>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Modern Professional Layout */}
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 text-white/90">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for exciting opportunities</span>
                <SparklesIcon className="w-4 h-4 text-yellow-400" />
              </div>
            </motion.div>

            {/* Enhanced Professional Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                delay: 0.3
              }}
              className="mb-12"
            >
              <div className="relative w-48 h-48 mx-auto group">
                {/* Enhanced Professional glow effect with multiple layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-indigo-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-80 transition-all duration-500 scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-indigo-400/40 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-700 scale-125"></div>
                
                {/* Main profile container with enhanced shadow */}
                <motion.div 
                  className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl group-hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image
                    src="/ProfilePhoto/IMG_3068.jpg"
                    alt="Tarun Kumar - Data Scientist & AI/ML Engineer"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                    priority
                  />
                  
                  {/* Enhanced Professional overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-slate-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </motion.div>

                {/* Resume button */}
                <motion.button
                  onClick={() => window.open('/assets/resume/Tarun Resume copy.pdf', '_blank')}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce cursor-pointer"
                  style={{animationDelay: '1s', animationDuration: '2s'}}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  suppressHydrationWarning={true}
                >
                  <DocumentTextIcon className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </motion.div>

          {/* Enhanced Modern Typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              ease: "easeOut" 
            }}
            className="mb-12"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-slate-100 to-blue-100 bg-clip-text text-transparent drop-shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.5,
                type: "spring",
                stiffness: 120 
              }}
            >
              Tarun Kumar
            </motion.h1>
            
            <div className="text-2xl md:text-3xl text-slate-200 mb-10 font-light">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7,
                  ease: "easeOut" 
                }}
                className="inline-block"
              >
                AI/ML Engineer
              </motion.span>
              <motion.span 
                className="mx-4 text-blue-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring" }}
              >
                •
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.9,
                  ease: "easeOut" 
                }}
                className="inline-block"
              >
                Data Scientist
              </motion.span>
              <motion.span 
                className="mx-4 text-indigo-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
              >
                •
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.1,
                  ease: "easeOut" 
                }}
                className="inline-block"
              >
                Analytics Expert
              </motion.span>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 1.3,
                ease: "easeOut" 
              }}
              className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-16 font-light"
            >
              Transforming data into intelligent solutions through advanced AI/ML technologies. 
              Specialized in building scalable machine learning systems, predictive analytics, and 
              data-driven applications that solve real-world business challenges.
            </motion.p>
          </motion.div>

          {/* Enhanced Professional CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.5)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="px-12 py-5 text-xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-2xl border-0 transition-all duration-500"
              >
                View My Work
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-12 py-5 text-xl font-semibold border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-slate-900 backdrop-blur-sm bg-white/5 transition-all duration-500"
              >
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator - wrapped with NoSSR */}
          <NoSSR>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                delay: 2,
                ease: "easeOut" 
              }}
              className="flex justify-center"
            >
              <motion.button
                onClick={() => scrollToSection('about')}
                className="flex flex-col items-center text-slate-400 hover:text-blue-400 transition-all duration-500 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                suppressHydrationWarning={true}
              >
                <motion.span 
                  className="text-sm font-light mb-3 group-hover:text-blue-400 transition-colors duration-500"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  Discover More
                </motion.span>
                <motion.div
                  animate={{ 
                    y: [0, 12, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    duration: 2.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="bg-gradient-to-b from-blue-400 to-indigo-400 p-2 rounded-full"
                >
                  <ChevronDownIcon className="w-6 h-6 text-white" />
                </motion.div>
              </motion.button>
            </motion.div>
          </NoSSR>

          </div>
        </div>
      </div>

      {/* Enhanced floating particles - wrapped with NoSSR */}
      <NoSSR>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-20"
              initial={{
                x: Math.sin(i * 0.5) * 300 + 400,
                y: Math.cos(i * 0.3) * 200 + 300,
              }}
              animate={{
                x: Math.sin(i * 0.5 + Math.PI) * 300 + 400,
                y: Math.cos(i * 0.3 + Math.PI) * 200 + 300,
              }}
              transition={{
                duration: 15 + i * 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
            />
          ))}
        </div>
      </NoSSR>
    </section>
  )
}

export default Hero
