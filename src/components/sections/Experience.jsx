import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const experiences = [
    {
      role: 'AI & Data Analysis Team Lead',
      company: 'ITC & CSCC Scientific Clubs',
      period: 'Sep 2022 – Jun 2025',
      location: 'Algeria',
      type: 'Leadership',
      achievements: [
        'Directed multiple AI and data projects, mentored student teams',
        'Organized the "Data Bounty" hackathon with 100+ participants',
        'Delivered workshops on data analysis, machine learning, and deployment best practices',
        'Led team of 15+ members across various AI/ML initiatives'
      ]
    },
    {
      role: 'Intern AI Engineer',
      company: 'CM Consulting',
      period: 'Dec 2024 – Apr 2025',
      location: 'Algeria',
      type: 'Internship',
      achievements: [
        'Built automated medical image-to-report system using LLM + ViT hybrid models',
        'Reduced manual reporting time by 40% through intelligent automation',
        'Optimized inference pipeline for production deployment',
        'Streamlined data-processing workflows for healthcare applications'
      ]
    },
    {
      role: 'Freelance Data Scientist / ML Engineer',
      company: 'Upwork & Private Clients',
      period: 'Jan 2023 – Present',
      location: 'Remote',
      type: 'Freelance',
      achievements: [
        'Conducted full exploratory data analysis for an e-learning platform',
        'Developed automated web-scraping and scheduling bots for client operations',
        'Built predictive models for various business domains',
        'Delivered end-to-end ML solutions from data collection to deployment'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-slate-950">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="card relative pl-8 border-l-4 border-primary-500"
              >
                <div className="absolute -left-3 top-6 w-6 h-6 bg-primary-500 rounded-full border-4 border-slate-950"></div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-400 mb-1">{exp.role}</h3>
                    <p className="text-lg text-slate-100 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-slate-400 text-sm mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <span className="mt-1">{exp.location}</span>
                    <span className="mt-1 px-2 py-1 bg-primary-500/20 text-primary-400 rounded text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2">
                      <span className="text-primary-400 mt-1">▸</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
