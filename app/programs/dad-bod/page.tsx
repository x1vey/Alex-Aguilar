'use client'

import { motion } from 'framer-motion'
import { programs } from '@/lib/data/programs'

export default function DadBodPage() {
  const program = programs.find(p => p.id === 'dad-bod')!

  return (
    <main className="min-h-screen pt-24 pb-20 bg-tactical-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-4">
            {program.name.toUpperCase()}
          </h1>
          <p className="text-xl text-tactical-red font-heading tracking-wide mb-6">
            {program.duration.toUpperCase()} • {program.targetAudience.toUpperCase()}
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {program.description}
          </p>
        </motion.div>

        {/* Transformation Focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8 mb-8"
        >
          <h2 className="font-heading text-3xl text-tactical-red mb-6">30-DAY TRANSFORMATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-tactical-black/50 rounded">
              <div className="text-5xl mb-3">🔥</div>
              <h3 className="font-heading text-xl text-white mb-2">WEEK 1-2</h3>
              <p className="text-gray-300">Foundation building and fat loss kickstart</p>
            </div>
            <div className="text-center p-6 bg-tactical-black/50 rounded">
              <div className="text-5xl mb-3">💪</div>
              <h3 className="font-heading text-xl text-white mb-2">WEEK 3-4</h3>
              <p className="text-gray-300">Strength development and body recomposition</p>
            </div>
            <div className="text-center p-6 bg-tactical-black/50 rounded">
              <div className="text-5xl mb-3">⚡</div>
              <h3 className="font-heading text-xl text-white mb-2">DAY 30</h3>
              <p className="text-gray-300">Visible transformation and new habits formed</p>
            </div>
          </div>
        </motion.div>

        {/* Program Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8 mb-8"
        >
          <h2 className="font-heading text-3xl text-tactical-red mb-6">WHAT&apos;S INCLUDED</h2>
          <ul className="space-y-4">
            {program.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-tactical-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300 text-lg">{feature}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Minimal Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8 mb-8"
        >
          <h2 className="font-heading text-3xl text-tactical-red mb-6">MINIMAL EQUIPMENT NEEDED</h2>
          <p className="text-gray-300 text-lg mb-6">
            Perfect for busy dads who want results without spending hours at the gym. Train at home or anywhere 
            with minimal equipment.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {program.equipment.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-tactical-red flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-gradient-to-r from-tactical-red/20 to-tactical-navy/20 border border-tactical-red rounded-lg p-8 mb-8 text-center"
        >
          <h2 className="font-heading text-3xl text-white mb-4">READY TO TRANSFORM?</h2>
          <p className="text-xl text-gray-300 mb-6">
            In just 30 days, you&apos;ll shed the dad bod, build a strength foundation, and establish habits that last.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span>✓ Time-efficient workouts</span>
            <span>✓ Nutrition guidance included</span>
            <span>✓ Sustainable results</span>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <a
            href={program.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-tactical-red hover:bg-tactical-red/80 text-white font-heading text-xl tracking-wide transition-all transform hover:scale-105 rounded"
          >
            {program.cta.text}
            <svg className="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </main>
  )
}
