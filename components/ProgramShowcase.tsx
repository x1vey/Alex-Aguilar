'use client'

import { motion } from 'framer-motion'
import ProgramCard from './ProgramCard'
import { programs } from '@/lib/data/programs'

export default function ProgramShowcase() {
  return (
    <section id="programs" className="relative py-32 bg-tactical-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block border-2 border-tactical-red px-8 py-3 mb-8">
            <p className="text-tactical-red font-heading text-xs tracking-[0.4em] uppercase">
              Programs
            </p>
          </div>
          <h2 className="font-heading font-bold text-6xl sm:text-7xl lg:text-8xl text-white mb-6 leading-none tracking-tighter">
            ELITE
            <br />
            <span className="text-tactical-red">TRAINING</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto font-body font-semibold leading-relaxed">
            Choose your mission. Build strength. Develop performance. Forge mental toughness.
          </p>
        </motion.div>

        {/* Program Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
