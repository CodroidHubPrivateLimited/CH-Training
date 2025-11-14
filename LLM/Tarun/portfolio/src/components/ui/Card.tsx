import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useState } from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: number
  glowing?: boolean
  wrapping?: boolean
}

export const Card = ({ children, className, hoverScale = 1.05, glowing = false, wrapping = true }: CardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseY, [-0.5, 0.5], wrapping ? ["12deg", "-12deg"] : ["0deg", "0deg"])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], wrapping ? ["-12deg", "12deg"] : ["0deg", "0deg"])

  // Wrapping effect transforms
  const wrapX = useTransform(mouseX, [-1, 1], wrapping ? ["-5%", "5%"] : ["0%", "0%"])
  const wrapY = useTransform(mouseY, [-1, 1], wrapping ? ["-3%", "3%"] : ["0%", "0%"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapping) return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) / rect.width)
    y.set((e.clientY - centerY) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <div className="relative group perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : "0deg",
          rotateY: isHovered ? rotateY : "0deg",
          transformStyle: "preserve-3d",
          x: isHovered ? wrapX : "0%",
          y: isHovered ? wrapY : "0%",
        }}
        whileHover={{ 
          scale: hoverScale, 
          y: -12,
          transition: { type: 'spring', stiffness: 400, damping: 25 }
        }}
        className={cn(
          'relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer border border-gray-200 dark:border-gray-700',
          glowing && 'hover:shadow-blue-500/30 hover:border-blue-300 dark:hover:border-blue-600',
          wrapping && 'transform-gpu',
          className
        )}
    >
      {/* Glowing border effect */}
      {glowing && (
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ padding: '2px' }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900" />
        </motion.div>
      )}

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
        animate={{
          x: isHovered ? ['0%', '100%'] : ['0%'],
        }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
    </div>
  )
}

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  magnetic?: boolean
}

export const GlassCard = ({ children, className, magnetic = false }: GlassCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magnetic) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.1)
    y.set((e.clientY - centerY) * 0.1)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative overflow-hidden rounded-2xl bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl hover:border-white/40 transition-all duration-300 group',
        className
      )}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          background: isHovered ? [
            'linear-gradient(to bottom right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1))',
            'linear-gradient(to bottom right, rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            'linear-gradient(to bottom right, rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.1), rgba(59, 130, 246, 0.1))',
          ] : undefined
        }}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      />

      {children}
    </motion.div>
  )
}
