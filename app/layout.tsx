import type { Metadata } from 'next'
import { Pirata_One } from 'next/font/google'
import {Texturina} from 'next/font/google'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const pirata = Pirata_One({
  subsets: ['latin'],
  variable: '--font-pirata',
  weight: ['400']
})

const texturina = Texturina({
  subsets: ['latin'],
  variable: '--font-texturina',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

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
      <body className={`${pirata.className} ${texturina.className}`}>{children}</body>
    </html>
  )
}
