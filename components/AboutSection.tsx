'use client'

import { motion } from 'framer-motion'
import { imageConfig } from '@/lib/config/images'

export default function AboutSection() {
  const credentials = [
    { 
      title: 'ARMY RANGER', 
      years: '2008-2012',
      description: 'Elite special operations. Combat deployments. Physical and mental warfare training.'
    },
    { 
      title: 'CIA CONTRACTOR', 
      years: '2012-2016',
      description: 'High-level tactical operations. Peak performance under pressure. Mission-critical fitness.'
    },
    { 
      title: 'FIREFIGHTER', 
      years: '2016-2020',
      description: 'First responder operations. Explosive power. Cardiovascular endurance. Mental resilience.'
    },
    { 
      title: 'ELITE COACH', 
      years: '2020-PRESENT',
      description: 'Training tactical professionals. Building warriors. Bridging aesthetics and performance.'
    },
  ]

  return (
    <section className="relative py-32 bg-tactical-black">
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
              Leadership
            </p>
          </div>
          <h2 className="font-heading font-bold text-6xl sm:text-7xl lg:text-8xl text-white mb-6 leading-none tracking-tighter">
            MEET THE
            <br />
            <span className="text-tactical-red">FOUNDER</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] border-4 border-tactical-red/50 overflow-hidden bg-tactical-navy/20">
              {/* Founder image - Update URL in lib/config/images.ts */}
              <img 
                src={imageConfig.founder.portrait}
                alt="Alex Aguilar - Founder"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tactical-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading font-bold text-5xl sm:text-6xl text-white mb-4 tracking-tighter">
              ALEX AGUILAR
            </h3>
            <p className="text-tactical-red font-heading font-semibold text-sm tracking-[0.3em] uppercase mb-8 border-l-4 border-tactical-red pl-4">
              Founder & Lead Instructor
            </p>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6 leading-relaxed font-body font-semibold">
              From the battlefield to the firehouse. Elite military training. Tactical operations. First responder fitness.
            </p>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed font-body font-semibold">
              Now training the next generation of tactical athletes. Bridging bodybuilding aesthetics with functional performance. Building warriors who look as good as they perform.
            </p>
            <a
              href="/about"
              className="inline-block px-10 py-4 bg-transparent border-2 border-tactical-red hover:bg-tactical-red text-tactical-red hover:text-white font-heading tracking-[0.3em] transition-all duration-300 uppercase text-sm"
            >
              FULL STORY
            </a>
          </motion.div>
        </div>

        {/* Credentials Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative group"
            >
              <div className="h-full p-6 bg-tactical-navy/10 border-2 border-tactical-red/30 hover:border-tactical-red transition-all duration-300">
                <h4 className="font-heading font-bold text-2xl text-tactical-red mb-2 tracking-wide">{cred.title}</h4>
                <p className="text-white font-heading font-semibold text-sm mb-4 tracking-[0.3em]">{cred.years}</p>
                <p className="text-gray-400 text-base sm:text-lg font-body font-semibold leading-relaxed">{cred.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
