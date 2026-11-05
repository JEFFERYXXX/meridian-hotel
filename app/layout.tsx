import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meridian Hotel — Somewhere beautiful to be',
  description: 'A private coast of your own. Discover stays, suites, villas, and thoughtful hospitality at Meridian Hotel.',
  generator: 'Meridian Hotel',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
