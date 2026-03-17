'use client'

import { motion } from 'framer-motion'
import ContactForm from '@/components/ContactForm'
import SocialLinks from '@/components/SocialLinks'

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-tactical-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-6">
            GET IN <span className="text-tactical-red">TOUCH</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your transformation? Have questions about the programs? 
            Send me a message and let's talk about your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-tactical-navy/10 border border-tactical-red/20 rounded-lg p-8">
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Social Media */}
            <div className="bg-tactical-navy/10 border border-tactical-red/20 rounded-lg p-6">
              <h3 className="font-heading text-xl text-tactical-red mb-4">FOLLOW ME</h3>
              <p className="text-gray-300 mb-4">
                Stay updated with training tips, program updates, and motivation.
              </p>
              <SocialLinks />
            </div>

            {/* Response Time */}
            <div className="bg-tactical-navy/10 border border-tactical-red/20 rounded-lg p-6">
              <h3 className="font-heading text-xl text-tactical-red mb-4">RESPONSE TIME</h3>
              <p className="text-gray-300">
                I typically respond within 24-48 hours. For urgent inquiries, reach out via Instagram DM.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
