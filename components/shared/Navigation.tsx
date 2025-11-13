'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { label: 'Programa', href: '#how-it-works' },
  { label: 'Mentores', href: '#mentors' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const scrollToApplication = () => {
    const element = document.getElementById('application')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-midnight-600/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-white">ADVANTAGE</span>
              <span className="text-sm text-gray-400 hidden sm:inline">
                by Prisma
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-white transition-colors text-base font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <Button
              size="md"
              className="hidden lg:inline-flex"
              onClick={scrollToApplication}
            >
              Aplicar
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-midnight-900/95 backdrop-blur-md"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative bg-midnight-600 h-full pt-24 px-6">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-semibold text-white text-left hover:text-coral-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                size="lg"
                className="w-full mt-4"
                onClick={scrollToApplication}
              >
                Aplicar a Cohort Marzo 2026
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
