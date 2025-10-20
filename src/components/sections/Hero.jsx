import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiKaggle } from 'react-icons/si'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-mono text-sm md:text-base mb-4"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Khaldi Abderrahmane
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-slate-400 mb-6"
            >
              AI Engineer & Data Scientist
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
            >
              Specialized in building intelligent systems with{' '}
              <span className="text-primary-400 font-semibold">Machine Learning</span>,{' '}
              <span className="text-primary-400 font-semibold">Deep Learning</span>, and{' '}
              <span className="text-primary-400 font-semibold">MLOps</span>.
              From medical imaging to NLP, I turn data into actionable insights.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
              <button className="btn-secondary flex items-center gap-2">
                <FiDownload />
                Resume
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 mt-8 justify-center lg:justify-start"
            >
              <a href="https://github.com/KhaldiDataPand" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary-400 transition-colors transform hover:scale-110">
                <FiGithub size={28} />
              </a>
              <a href="https://linkedin.com/in/abderrahmane-khaldi" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary-400 transition-colors transform hover:scale-110">
                <FiLinkedin size={28} />
              </a>
              <a href="https://kaggle.com/abdelrahmanekhaldi" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary-400 transition-colors transform hover:scale-110">
                <SiKaggle size={28} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
              <img
                src={`${import.meta.env.BASE_URL}Me.jpg`}
                alt="Khaldi Abderrahmane"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
