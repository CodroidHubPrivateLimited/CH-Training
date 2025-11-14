'use client'

import { useEffect, useState } from 'react'

interface NoSSRProps {
  children: React.ReactNode
}

/**
 * A component that prevents server-side rendering of its children
 * to avoid hydration mismatches
 */
export const NoSSR = ({ children }: NoSSRProps) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}

export default NoSSR
