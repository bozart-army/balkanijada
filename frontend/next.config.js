/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Wichtig fürs spätere Deployment
  output: 'export', // Erzeugt statische Dateien für einfaches Hosting
  images: {
    unoptimized: true, // Vereinfacht den Start
  },
}

module.exports = nextConfig
