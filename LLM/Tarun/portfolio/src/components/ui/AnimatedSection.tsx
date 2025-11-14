import { useInView } from 'react-intersection-observer'
import { motion, Variants } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate'
  duration?: number
  stagger?: boolean
  parallax?: boolean
}

const animationVariants: Record<string, Variants> = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  rotate: {
    hidden: { opacity: 0, rotate: -10 },
    visible: { opacity: 1, rotate: 0 }
  }
}

export const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0, 
  animation = 'slideUp',
  duration = 0.6,
  stagger = false,
  parallax = false
}: AnimatedSectionProps) => {
  // Always call hooks at the top level
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-10% 0px -10% 0px'
  })

  const variants = animationVariants[animation]

  // Simplified parallax without useScroll hook
  if (parallax) {
    return (
      <motion.div 
        className={className}
        suppressHydrationWarning
      >
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ 
            duration, 
            delay,
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    )
  }

  if (stagger && Array.isArray(children)) {
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={className}
        suppressHydrationWarning
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            variants={variants}
            transition={{ duration, delay: delay + index * 0.1 }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ 
        duration, 
        delay,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }}
      className={className}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  )
}

// Specialized components for different effects - without scroll hooks for now
export const ParallaxSection = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  )
}

export const RevealSection = ({ children, className = '', direction = 'up' }: { 
  children: React.ReactNode, 
  className?: string,
  direction?: 'up' | 'down' | 'left' | 'right'
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const directionVariants = {
    up: { y: 100, opacity: 0 },
    down: { y: -100, opacity: 0 },
    left: { x: 100, opacity: 0 },
    right: { x: -100, opacity: 0 },
  }

  return (
    <motion.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={inView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{ 
        duration: 0.8, 
        type: 'spring', 
        stiffness: 100,
        damping: 10
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
