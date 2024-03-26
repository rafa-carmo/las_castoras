import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Las Castoras',
  description: 'Seleccion Argentina femenina de futsal de personas sordas',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen `}>
        <Header />
        <main className="flex-1 ">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
