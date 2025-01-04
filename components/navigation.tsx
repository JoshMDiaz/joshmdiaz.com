'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { Github, Linkedin, Menu } from 'lucide-react'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

interface NavItemsProps {
  isMobile?: boolean
  activeSection: string
  onItemClick: (href: string) => void
}

const NavItems: React.FC<NavItemsProps> = ({
  isMobile = false,
  activeSection,
  onItemClick,
}) => (
  <>
    {navItems.map((item) => (
      <li key={item.name} className={isMobile ? 'w-full' : ''}>
        <a
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-purple-400',
            isMobile ? 'block w-full py-2 text-lg' : '',
            activeSection === item.href.slice(1)
              ? 'text-purple-400'
              : 'text-gray-300'
          )}
          onClick={(e) => {
            e.preventDefault()
            onItemClick(item.href)
          }}
        >
          {item.name}
        </a>
      </li>
    ))}
  </>
)

const SocialIcons: React.FC = () => (
  <>
    <a
      href="https://www.linkedin.com/in/joshmdiaz/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-purple-400"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="https://github.com/JoshMDiaz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-purple-400"
    >
      <Github size={20} />
    </a>
  </>
)

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

  const handleItemClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/75 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-purple-400 font-bold text-2xl">
          <Image src="/logo.svg" alt="JMD Logo" width={120} height={40} />
        </div>
        <ul className="hidden md:flex space-x-8">
          <NavItems
            activeSection={activeSection}
            onItemClick={handleItemClick}
          />
        </ul>
        <div className="hidden md:flex space-x-4">
          <SocialIcons />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col h-full">
              <ul className="flex-grow space-y-4 mt-8">
                <NavItems
                  isMobile={true}
                  activeSection={activeSection}
                  onItemClick={handleItemClick}
                />
              </ul>
              <div className="flex space-x-4 justify-center py-4">
                <SocialIcons />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
