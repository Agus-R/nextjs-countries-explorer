import type { NextConfig } from 'next'
import i18nextConfig from 'next-i18next.config'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n: i18nextConfig.i18n,
}

export default nextConfig
