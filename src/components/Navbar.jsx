import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiKaggle } from 'react-icons/si'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors">
            KA<span className="text-slate-100">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-primary-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/KhaldiDataPand" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-primary-400 transition-colors">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/abderrahmane-khaldi" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-primary-400 transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href="https://kaggle.com/abdelrahmanekhaldi" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-primary-400 transition-colors">
              <SiKaggle size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-primary-400 transition-colors"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-slate-300 hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/KhaldiDataPand" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary-400 transition-colors">
                <FiGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/abderrahmane-khaldi" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary-400 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://kaggle.com/abdelrahmanekhaldi" target="_blank" rel="noopener noreferrer"
                 className="text-slate-400 hover:text-primary-400 transition-colors">
                <SiKaggle size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
