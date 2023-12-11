'use client'

import Link from 'next/link'
import { Button } from './Button'
import { useState, useEffect } from 'react'

const menuLinks = [
  {
    url: '/',
    children: 'Inicio',
  },
  {
    url: '#time',
    children: 'Time',
  },
  {
    url: '#sobre',
    children: 'Sobre',
  },
]
export function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)
  const [onTop, setOnTop] = useState(true)
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY >= 100) {
        setOnTop(false)
      }
      if (window.scrollY < 10) {
        setOnTop(true)
      }
      if (window.scrollY <= previousScrollPosition) {
        setIsVisible(true)
        setPreviousScrollPosition(window.scrollY)
      } else {
        setIsVisible(false)
        setPreviousScrollPosition(window.scrollY)
      }
    }
    document.addEventListener('scroll', scroll)
    return () => document.removeEventListener('scroll', scroll)
  }, [previousScrollPosition, onTop])
  return (
    <header
      className={`w-full py-3 fixed z-20 ${
        onTop ? 'bg-zinc-900/30 text-white ' : 'bg-white/50'
      } transition-all duration-700 ${isVisible ? 'top-0' : '-top-24'}`}
    >
      <div className="w-full flex items-center justify-between container mx-auto group">
        <Link
          href="/"
          className="flex items-center flex-col"
          title="Las Castoras"
        >
          <div className="w-10 h-10 bg-[url('/assets/logo.png')] bg-cover bg-no-repeat contents-[' ']"></div>
          <h1
            className={`${
              onTop ? 'text-sm' : 'text-xl'
            } font-bold font-sans -m-2 pointer-events-none shadow-white [text-shadow:_0_0_5px_var(--tw-shadow-color)] transition-all duration-300 group-hover:text-primary-500`}
          >
            Las Castoras
          </h1>
        </Link>
        <ul className="flex gap-5 md:gap-7">
          {menuLinks.map((link) => (
            <li key={link.url}>
              <Button {...link} />
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
