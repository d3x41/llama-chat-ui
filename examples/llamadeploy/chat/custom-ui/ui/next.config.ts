import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The base path to create proxy to nextjs frontend in LlamaDeploy
  basePath: '/deployments/chat/ui',
}

export default nextConfig
