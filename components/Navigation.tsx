'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [programsOpen, setProgramsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-tactical-black/98 backdrop-blur-sm border-b-2 border-tactical-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="font-heading text-3xl text-white hover:text-tactical-red transition-colors tracking-wider">
            ALEX AGUILAR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-white hover:text-tactical-red transition-colors font-heading tracking-widest text-sm">
              HOME
            </Link>
            <Link href="/about" className="text-white hover:text-tactical-red transition-colors font-heading tracking-widest text-sm">
              ABOUT
            </Link>
            
            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProgramsOpen(!programsOpen)}
                className="text-white hover:text-tactical-red transition-colors flex items-center gap-2 font-heading tracking-widest text-sm"
              >
                TRAINING
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {programsOpen && (
                <div className="absolute top-full right-0 mt-4 w-72 bg-tactical-black border-2 border-tactical-red shadow-2xl">
                  <Link
                    href="/programs/selection-prep"
                    className="block px-6 py-4 text-white hover:bg-tactical-red transition-colors font-heading tracking-wide border-b border-tactical-red/30"
                    onClick={() => setProgramsOpen(false)}
                  >
                    SELECTION PREP
                  </Link>
                  <Link
                    href="/programs/tactical-hypertrophy"
                    className="block px-6 py-4 text-white hover:bg-tactical-red transition-colors font-heading tracking-wide border-b border-tactical-red/30"
                    onClick={() => setProgramsOpen(false)}
                  >
                    TACTICAL HYPERTROPHY
                  </Link>
                  <Link
                    href="/programs/dad-bod"
                    className="block px-6 py-4 text-white hover:bg-tactical-red transition-colors font-heading tracking-wide"
                    onClick={() => setProgramsOpen(false)}
                  >
                    30 DAY DAD BOD
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/contact" className="px-6 py-3 bg-tactical-red hover:bg-white hover:text-tactical-black text-white font-heading tracking-widest text-sm transition-all duration-300 border-2 border-tactical-red">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-tactical-red transition-colors"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-tactical-black border-t-2 border-tactical-red">
          <div className="px-4 py-6 space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 text-white hover:bg-tactical-red transition-colors font-heading tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-white hover:bg-tactical-red transition-colors font-heading tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            <div className="px-4 py-3 text-tactical-red font-heading tracking-widest text-sm">TRAINING</div>
            <Link
              href="/programs/selection-prep"
              className="block px-8 py-3 text-white hover:bg-tactical-red/50 transition-colors font-heading tracking-wide text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              SELECTION PREP
            </Link>
            <Link
              href="/programs/tactical-hypertrophy"
              className="block px-8 py-3 text-white hover:bg-tactical-red/50 transition-colors font-heading tracking-wide text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              TACTICAL HYPERTROPHY
            </Link>
            <Link
              href="/programs/dad-bod"
              className="block px-8 py-3 text-white hover:bg-tactical-red/50 transition-colors font-heading tracking-wide text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              30 DAY DAD BOD
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-white hover:bg-tactical-red transition-colors font-heading tracking-widest text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
