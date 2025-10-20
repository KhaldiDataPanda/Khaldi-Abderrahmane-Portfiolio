import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiCalendar } from 'react-icons/fi'

const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const education = [
    {
      degree: "Master's in Intelligent Systems Engineering",
      institution: 'Blida 1 University',
      period: '2023 – 2025',
      location: 'Blida, Algeria',
      details: [
        'Thesis: Automated Report Generation for Chest X-rays',
        'Grade: 18/20',
        'Focus: AI, Machine Learning, Deep Learning, and Intelligent Systems'
      ]
    },
    {
      degree: "Bachelor's in Computer Systems Engineering",
      institution: 'Blida 1 University',
      period: '2020 – 2023',
      location: 'Blida, Algeria',
      details: [
        'Final Project: Automated Job-Requirements Analysis Pipeline',
        'Grade: 17/20',
        'Graduated with honors (Top 3)',
        'Focus: Software Engineering, Data Structures, and Algorithms'
      ]
    }
  ]

  const achievements = [
    {
      title: 'Kaggle Top-700 Contributor',
      description: 'Worldwide ranking in competitive machine learning',
      icon: '🏆'
    },
    {
      title: '2nd Place - DataHack Datathon',
      organization: 'CSE-ESI',
      icon: '🥈'
    },
    {
      title: '5th Place - DevFest Hackathon',
      organization: 'GDG-Alger',
      icon: '🎖️'
    }
  ]

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
          
          {/* Education */}
          <div className="max-w-4xl mx-auto mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="card mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary-400 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-slate-100 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end text-slate-400 text-sm mt-2 md:mt-0">
                    <div className="flex items-center gap-2">
                      <FiCalendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <span className="mt-1">{edu.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2">
                      <span className="text-primary-400 mt-1">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-400 mb-6 text-center">
              Achievements & Competitions
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="card text-center hover:scale-105 transition-transform"
                >
                  <div className="text-4xl mb-3">{achievement.icon}</div>
                  <h4 className="text-lg font-bold text-slate-100 mb-2">{achievement.title}</h4>
                  {achievement.organization && (
                    <p className="text-sm text-slate-400">{achievement.organization}</p>
                  )}
                  {achievement.description && (
                    <p className="text-sm text-slate-400">{achievement.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
