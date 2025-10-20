import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiKaggle } from 'react-icons/si'

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
            Reach out through the channels below and I will get back to you soon.
          </p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <div className="card flex items-start gap-4">
              <div className="p-3 bg-primary-500/20 rounded-lg shrink-0">
                <FiMapPin className="text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-100 mb-1">Location</h3>
                <p className="text-slate-400">Aïn Naâdja, Algeria</p>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold text-slate-100 mb-4">Connect with me</h3>
              <p className="text-slate-400 mb-6">
                Prefer a quick message? Reach out via the social links below—I respond fastest there.
              </p>
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

            <div className="card bg-primary-500/10 border-primary-500/30">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-slate-100">Available for opportunities</span>
              </div>
              <p className="text-slate-400 text-sm">
                Open to full-time positions, freelance projects, and collaborations
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
