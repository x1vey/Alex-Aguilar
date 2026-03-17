'use client'

import { motion } from 'framer-motion'
import { Program } from '@/types'
import { imageConfig } from '@/lib/config/images'

interface ProgramCardProps {
  program: Program
  index?: number
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  // Map program IDs to image URLs
  const programImages: Record<string, string> = {
    'selection-prep': imageConfig.programs.selectionPrep,
    'tactical-hypertrophy': imageConfig.programs.tacticalHypertrophy,
    'dad-bod': imageConfig.programs.dadBod,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.8 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group h-full"
    >
      {/* Card */}
      <div className="relative h-full bg-tactical-black border-2 border-tactical-red/30 hover:border-tactical-red transition-all duration-300 overflow-hidden">
        {/* Image - Update URLs in lib/config/images.ts */}
        <div className="relative h-80 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-700"
            style={{
              backgroundImage: `url('${programImages[program.id] || imageConfig.programs.selectionPrep}')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-tactical-black via-tactical-black/70 to-transparent" />
          
          {/* Duration Badge */}
          <div className="absolute top-6 right-6 border-2 border-tactical-red bg-tactical-black/90 px-6 py-3">
            <p className="font-heading text-white text-sm tracking-[0.3em]">
              {program.duration.toUpperCase()}
            </p>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-6 left-6 right-6">
            <h3 className="font-heading font-bold text-4xl text-white mb-2 tracking-tighter leading-none">
              {program.name.toUpperCase()}
            </h3>
            <p className="text-tactical-red font-heading font-semibold text-xs tracking-[0.3em] uppercase">
              {program.targetAudience}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-400 mb-6 leading-relaxed font-body font-semibold">
            {program.description}
          </p>

          {/* Features - Top 3 */}
          <ul className="space-y-3 mb-8 border-l-2 border-tactical-red/30 pl-4">
            {program.features.slice(0, 3).map((feature, idx) => (
              <li key={idx} className="text-base sm:text-lg text-gray-300 font-body font-semibold">
                {feature}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={program.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 bg-transparent border-2 border-tactical-red hover:bg-tactical-red text-tactical-red hover:text-white font-heading text-center tracking-[0.3em] transition-all duration-300 uppercase text-sm"
          >
            {program.cta.text}
          </a>
        </div>
      </div>
    </motion.div>
  )
}
