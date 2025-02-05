import type { Metadata } from 'next'
import { Glass_Antiqua } from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rhea | Personal Portfolio',
  description: 'Rhea is a full-stack developer with 3 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
