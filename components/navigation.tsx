'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = React.useState('')

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-gray-900/75 backdrop-blur-sm'>
      <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='text-purple-400 font-bold text-2xl'>
          <Image src='/logo.svg' alt='JMD Logo' width={120} height={40} />
        </div>
        <ul className='flex space-x-8'>
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-purple-400',
                  activeSection === item.href.slice(1)
                    ? 'text-purple-400'
                    : 'text-gray-300'
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex space-x-4'>
          <a
            href='https://linkedin.com/in/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-purple-400'
          >
            <Linkedin size={20} />
          </a>
          <a
            href='https://github.com/yourusername'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-purple-400'
          >
            <Github size={20} />
          </a>
        </div>
      </nav>
    </header>
  )
}
