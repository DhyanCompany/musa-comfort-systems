import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata = {
  title: 'Musa Comfort Systems | TSSA Approved Licensed Technician | HVAC Services Ontario',
  description: 'TSSA Approved Licensed Technician providing reliable residential & commercial HVAC services. Over 10+ years of experience in furnaces, air conditioners, rooftop units, heat pumps, and more. Serving Ontario.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} pb-20 md:pb-0`}>{children}</body>
    </html>
  )
}
