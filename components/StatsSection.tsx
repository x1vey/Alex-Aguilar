'use client'

import { motion } from 'framer-motion'

export default function StatsSection() {
  const stats = [
    { number: '15+', label: 'YEARS', sublabel: 'Military & First Responder Experience' },
    { number: '8+', label: 'YEARS', sublabel: 'Training Elite Athletes' },
    { number: '500+', label: 'CLIENTS', sublabel: 'Transformed & Mission Ready' },
    { number: '2020', label: 'EST.', sublabel: 'Tactical Aesthetics Founded' },
  ]

  return (
    <section className="relative py-20 bg-tactical-black border-y-2 border-tactical-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-6xl sm:text-7xl text-tactical-red mb-2">
                {stat.number}
              </div>
              <div className="font-heading font-semibold text-base tracking-[0.3em] text-white mb-2">
                {stat.label}
              </div>
              <div className="text-base sm:text-lg text-gray-400 font-body font-semibold">
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
