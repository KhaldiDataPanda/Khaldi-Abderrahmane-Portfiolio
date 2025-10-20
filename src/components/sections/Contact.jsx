import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'
import { SiKaggle } from 'react-icons/si'
import { useState } from 'react'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Construct mailto link with form data
    const mailtoLink = `mailto:your.email@example.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto text-lg">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <FiMapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 mb-1">Location</h4>
                    <p className="text-slate-400">Aïn Naâdja, Algeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-500/20 rounded-lg">
                    <FiMail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-100 mb-1">Email</h4>
                    <a href="mailto:your.email@example.com" className="text-primary-400 hover:text-primary-300">
                      your.email@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-slate-100 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/KhaldiDataPand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors group"
                  >
                    <FiGithub className="text-slate-400 group-hover:text-white" size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/abderrahmane-khaldi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors group"
                  >
                    <FiLinkedin className="text-slate-400 group-hover:text-white" size={24} />
                  </a>
                  <a
                    href="https://kaggle.com/abdelrahmanekhaldi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors group"
                  >
                    <SiKaggle className="text-slate-400 group-hover:text-white" size={24} />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="mt-8 card bg-primary-500/10 border-primary-500/30">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-slate-100">Available for opportunities</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Open to full-time positions, freelance projects, and collaborations
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="card">
                <h3 className="text-2xl font-bold mb-6 text-primary-400">Send a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 mb-2 text-sm font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-slate-300 mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-primary-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-slate-300 mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                    <FiSend />
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
