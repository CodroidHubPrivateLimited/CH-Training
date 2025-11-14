'use client'

import { useIsClient } from '@/hooks/useIsClient'

interface ClientOnlyProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

/**
 * A wrapper component that only renders children on the client side
 * to prevent hydration mismatches caused by browser extensions or
 * other client-side modifications
 */
export const ClientOnly = ({ children, fallback = null }: ClientOnlyProps) => {
  const isClient = useIsClient()

  if (!isClient) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

export default ClientOnly
