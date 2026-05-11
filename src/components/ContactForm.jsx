import React, { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 3000)
    }, 1000)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-serif font-bold text-center text-stone-800 mb-4">Get in Touch</h2>
      <p className="text-center text-stone-600 mb-12">
        For press inquiries, speaking engagements, or just to say hello
      </p>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl p-6 shadow-md transform transition hover:scale-105">
            <h3 className="text-xl font-bold text-stone-800 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 group">
                <span className="text-2xl group-hover:scale-110 transition">✉️</span>
                <a href="mailto:dcrussell1950@gmail.com" className="text-stone-600 hover:text-amber-600 transition">
                  dcrussell1950@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-stone-600">Sunset, Texas</span>
              </div>
            </div>
          </div>
          
          {/* <div className="bg-white rounded-xl p-6 shadow-md transform transition hover:scale-105">
            <h3 className="text-xl font-bold text-stone-800 mb-4">Connect Online</h3>
            <div className="space-y-2">
              <a href="https://www.amazon.com/World-Was-Flat-Too-ebook/dp/B08N7V22LS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition group">
                <span className="text-2xl group-hover:scale-110 transition">📚</span>
                <span>Amazon Author Page</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-stone-600 hover:text-amber-600 transition group">
                <span className="text-2xl group-hover:scale-110 transition">⭐</span>
                <span>Goodreads</span>
              </a>
            </div>
          </div> */}
          
          <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 transform transition hover:scale-105">
            <p className="text-amber-800 text-sm">
              ✨ For book club inquiries or signed copies, please use the contact form or reach out directly via email.
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-6 transform transition hover:shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-stone-700 font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-stone-700 font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-stone-700 font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-stone-700 font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none transition"
                placeholder="Your message..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-amber-600 text-white font-semibold py-3 rounded-lg hover:bg-amber-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message →'}
            </button>
            
            {status === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded text-center animate-fade-in-up">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm