import React, { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser';

const ContactModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setFormData({ name: '', email: '', subject: '', message: '' });
        alert('Message sent successfully!');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-lg mx-auto"> {/* Reduced from max-w-2xl */}
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-3 -right-3 z-10 w-7 h-7 rounded-full bg-[#1e1e2e] border border-gray-800 text-gray-400 hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Form Card */}
          <div className="relative p-6 rounded-xl bg-[#1e1e2e]/95 backdrop-blur-xl border border-gray-800 shadow-2xl"> {/* Reduced padding */}
            {/* Header */}
            <div className="text-center mb-6"> {/* Reduced margin */}
              <span className="text-xs font-semibold text-purple-400 tracking-wider uppercase">
                Get In Touch
              </span>
              <h2 className="text-xl font-bold mt-1 mb-2 text-white"> {/* Reduced text and margins */}
                Let's Create Something Amazing Together
              </h2>
            </div>

            {/* Form content */}
            <form onSubmit={handleSubmit} className="space-y-4"> {/* Reduced spacing */}
              {/* Name and Email Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Reduced gap */}
                <div className="relative">
                  <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-[#121212]/50 border border-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors text-gray-100 placeholder-gray-500 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-lg bg-[#121212]/50 border border-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors text-gray-100 placeholder-gray-500 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label htmlFor="subject" className="block text-xs font-medium text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 rounded-lg bg-[#121212]/50 border border-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors text-gray-100 placeholder-gray-500 text-sm"
                  placeholder="Project Discussion"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  maxLength={500}
                  className="w-full px-3 py-2 rounded-lg bg-[#121212]/50 border border-gray-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors text-gray-100 resize-none placeholder-gray-500 text-sm"
                  placeholder="Tell us about your project..."
                />
                <div className="absolute right-2 bottom-2 text-xs text-gray-500">
                  {formData.message.length}/500
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full px-6 py-2.5 rounded-lg relative overflow-hidden transition-all duration-300 cursor-pointer text-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-teal-500 transition-transform duration-300 group-hover:scale-105"></div>
                <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal