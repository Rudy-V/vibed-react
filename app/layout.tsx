import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxury Safari Experience',
  description: 'Experience the ultimate luxury safari adventures in Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
