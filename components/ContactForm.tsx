'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission (no backend)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form data:', data)
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
          Name *
        </label>
        <input
          {...register('name', { required: true, minLength: 2 })}
          type="text"
          id="name"
          className="w-full px-4 py-3 bg-tactical-navy/20 border border-tactical-red/20 rounded text-white placeholder-gray-500 focus:outline-none focus:border-tactical-red transition-colors"
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-tactical-red">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
          Email *
        </label>
        <input
          {...register('email', { 
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
          type="email"
          id="email"
          className="w-full px-4 py-3 bg-tactical-navy/20 border border-tactical-red/20 rounded text-white placeholder-gray-500 focus:outline-none focus:border-tactical-red transition-colors"
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-tactical-red">{errors.email.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
          Message *
        </label>
        <textarea
          {...register('message', { required: true, minLength: 10 })}
          id="message"
          rows={6}
          className="w-full px-4 py-3 bg-tactical-navy/20 border border-tactical-red/20 rounded text-white placeholder-gray-500 focus:outline-none focus:border-tactical-red transition-colors resize-none"
          placeholder="Tell me about your goals..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-tactical-red">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-tactical-red hover:bg-tactical-red/80 disabled:bg-tactical-red/50 text-white font-heading text-lg tracking-wide transition-all transform hover:scale-105 disabled:scale-100 rounded"
      >
        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
      </button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/20 border border-green-500 rounded text-green-400 text-center">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/20 border border-red-500 rounded text-red-400 text-center">
          Something went wrong. Please try again.
        </div>
      )}
    </form>
  )
}
