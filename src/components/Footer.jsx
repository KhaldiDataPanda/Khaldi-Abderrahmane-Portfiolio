import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiKaggle } from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="section-container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} Khaldi Abderrahmane. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="https://github.com/KhaldiDataPand"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/abderrahmane-khaldi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://kaggle.com/abdelrahmanekhaldi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
              aria-label="Kaggle"
            >
              <SiKaggle size={20} />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-slate-400 hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-xs">
            Built with React, Vite, Tailwind CSS • Deployed on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
