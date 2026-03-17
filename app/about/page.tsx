'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-tactical-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-6">
            ABOUT <span className="text-tactical-red">ALEX AGUILAR</span>
          </h1>
          <p className="text-xl text-tactical-red font-heading tracking-wide">
            TACTICAL AESTHETICS
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-8 text-lg text-gray-300 leading-relaxed"
        >
          <div className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8">
            <h2 className="font-heading text-3xl text-tactical-red mb-4">THE JOURNEY</h2>
            <p className="mb-4">
              Alex Aguilar&apos;s path to becoming a premier tactical fitness coach is rooted in real-world experience 
              at the highest levels of physical and mental performance.
            </p>
            <p>
              Starting as an <strong className="text-white">Army Ranger</strong>, Alex learned what it takes to push 
              the human body to its limits. Elite special operations training forged not just physical strength, 
              but the mental resilience required to perform under extreme pressure.
            </p>
          </div>

          <div className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8">
            <h2 className="font-heading text-3xl text-tactical-red mb-4">TACTICAL OPERATIONS</h2>
            <p className="mb-4">
              As a <strong className="text-white">CIA Contractor</strong>, Alex operated in high-stakes environments 
              where physical readiness wasn&apos;t optional—it was survival. This experience taught him the critical 
              importance of functional fitness that translates to real-world performance.
            </p>
            <p>
              The tactical world demands more than just looking good. It requires strength, endurance, mobility, 
              and the mental fortitude to execute under stress.
            </p>
          </div>

          <div className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8">
            <h2 className="font-heading text-3xl text-tactical-red mb-4">FIRST RESPONDER</h2>
            <p className="mb-4">
              Transitioning to serve as a <strong className="text-white">Firefighter</strong>, Alex continued 
              to refine his understanding of functional fitness. First responders need explosive power, 
              cardiovascular endurance, and the ability to perform physically demanding tasks while fatigued.
            </p>
            <p>
              This role reinforced the importance of training that builds both aesthetics and real-world capability.
            </p>
          </div>

          <div className="bg-tactical-navy/20 border border-tactical-red/20 rounded-lg p-8">
            <h2 className="font-heading text-3xl text-tactical-red mb-4">TACTICAL AESTHETICS PHILOSOPHY</h2>
            <p className="mb-4">
              Today, as a <strong className="text-white">Training Coach</strong>, Alex bridges the gap between 
              bodybuilding aesthetics and tactical performance. His philosophy—<strong className="text-tactical-red">Tactical Aesthetics</strong>—is 
              simple: you can look great AND perform at the highest level.
            </p>
            <p className="mb-4">
              Whether you're a dad looking to reclaim your fitness, a tactical professional maintaining operational 
              readiness, or a candidate preparing for special operations selection, Alex&apos;s programs deliver results.
            </p>
            <p>
              His training combines proven strength and conditioning principles with the mental toughness development 
              that comes from years of elite service. The result? Programs that build bodies that look as good as they perform.
            </p>
          </div>

          <div className="text-center pt-8">
            <a
              href="/#programs"
              className="inline-block px-8 py-4 bg-tactical-red hover:bg-tactical-red/80 text-white font-heading text-lg tracking-wide transition-all transform hover:scale-105 rounded"
            >
              VIEW TRAINING PROGRAMS
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
