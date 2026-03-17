'use client'

import { motion } from 'framer-motion'
import { programs } from '@/lib/data/programs'

export default function SelectionPrepPage() {
  const program = programs.find(p => p.id === 'selection-prep')!

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

        {/* Performance Goals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8 mb-8"
        >
          <h2 className="font-heading text-3xl text-tactical-red mb-6">PERFORMANCE GOALS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-tactical-black/50 rounded">
              <div className="text-4xl mb-2">🏃</div>
              <div className="font-heading text-2xl text-white mb-1">&lt; 40 MIN</div>
              <div className="text-gray-400">5 Mile Run</div>
            </div>
            <div className="text-center p-4 bg-tactical-black/50 rounded">
              <div className="text-4xl mb-2">🏊</div>
              <div className="font-heading text-2xl text-white mb-1">&lt; 12:30</div>
              <div className="text-gray-400">500m Swim</div>
            </div>
            <div className="text-center p-4 bg-tactical-black/50 rounded">
              <div className="text-4xl mb-2">🎒</div>
              <div className="font-heading text-2xl text-white mb-1">&lt; 3 HRS</div>
              <div className="text-gray-400">12 Mile Ruck (35lbs)</div>
            </div>
          </div>
        </motion.div>

        {/* Weekly Structure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8 mb-8"
        >
          <h2 className="font-heading text-3xl text-tactical-red mb-6">WEEKLY TRAINING STRUCTURE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Lower Body Strength', 'Running', 'Upper Body Strength', 'Ruck', 'Full Body', 'Swim', 'Rest'].map((day, idx) => (
              <div key={idx} className="p-4 bg-tactical-black/50 border border-tactical-red/10 rounded text-center">
                <div className="font-heading text-tactical-red mb-1">DAY {idx + 1}</div>
                <div className="text-white text-sm">{day}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8 mb-8"
        >
          <h2 className="font-heading text-3xl text-tactical-red mb-6">REQUIRED EQUIPMENT</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
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
