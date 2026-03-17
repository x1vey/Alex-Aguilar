'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { imageConfig } from '@/lib/config/images'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tactical-black/80 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageConfig.hero.background}')`,
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block border-2 border-tactical-red px-8 py-3">
            <p className="text-tactical-red font-heading text-xs tracking-[0.4em] uppercase">
              Tactical Aesthetics
            </p>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-bold text-7xl sm:text-8xl lg:text-9xl text-white mb-8 leading-none tracking-tighter"
        >
          TRAIN HARD.
          <br />
          <span className="text-tactical-red">RISE TOGETHER.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-12 max-w-4xl mx-auto font-body font-semibold tracking-wide leading-relaxed"
        >
          Elite training programs for tactical professionals, special operations candidates, and men who refuse to settle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="#programs"
            className="group relative px-12 py-5 bg-tactical-red text-white font-heading text-lg tracking-widest transition-all duration-300 uppercase overflow-hidden"
          >
            <span className="relative z-10">VIEW PROGRAMS</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="absolute inset-0 flex items-center justify-center text-tactical-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-heading text-lg tracking-widest">
              VIEW PROGRAMS
            </span>
          </Link>
          <Link
            href="/about"
            className="px-12 py-5 bg-transparent border-2 border-white hover:bg-white text-white hover:text-tactical-black font-heading text-lg tracking-widest transition-all duration-300 uppercase"
          >
            ABOUT ALEX
          </Link>
        </motion.div>


      </div>
    </section>
  )
}
