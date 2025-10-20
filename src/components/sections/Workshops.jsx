import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUsers, FiCalendar } from 'react-icons/fi'

const Workshops = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const workshops = [
    {
      title: 'Algeria 2.0 - Data Science with Python',
      event: 'Algeria 2.0',
      description: 'Led a comprehensive workshop on Data Science using Python (Pandas, Matplotlib, Seaborn). The event was attended by over 1000 participants.',
      participants: '1000+',
      topics: ['Pandas', 'Matplotlib', 'Seaborn', 'Data Analysis'],
      image: '/Workshops/Algeria 2.0.jpg'
    },
    {
      title: 'ITC ABC Programming - Python & ML',
      event: 'ITC ABC Programming',
      description: 'Conducted a series of workshops on Python programming and Machine Learning for beginners as part of the ITC ABC Programming initiative.',
      participants: '200+',
      topics: ['Python Basics', 'Machine Learning', 'Scikit-learn', 'Model Training'],
      image: '/Workshops/ITC ABC Programing.png'
    },
    {
      title: 'ITC Tour - Building & Deploying ML Models',
      event: 'ITC Tour',
      description: 'Delivered hands-on sessions on building and deploying machine learning models during the ITC Tour event.',
      participants: '150+',
      topics: ['Model Development', 'Deployment', 'FastAPI', 'Docker'],
      image: '/Workshops/ITC Tour.png'
    },
    {
      title: 'ITC Podcast - AI & ML Trends',
      event: 'ITC Podcast',
      description: 'Featured speaker on ITC Podcast discussing the latest trends and techniques in AI and Machine Learning.',
      participants: '500+ (Online)',
      topics: ['AI Trends', 'Deep Learning', 'Industry Insights', 'Career Guidance'],
      image: '/Workshops/ITC Podcast.png'
    }
  ]

  return (
    <section id="workshops" className="py-20 bg-slate-950">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Workshops & Speaking</h2>
          
          <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
            I'm passionate about sharing knowledge and empowering others through workshops, 
            talks, and mentorship in Data Science and AI.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((workshop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="card group hover:scale-105 transition-transform"
              >
                {/* Workshop Image */}
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-slate-800">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23334155" width="400" height="300"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EWorkshop Photo%3C/text%3E%3C/svg%3E'
                    }}
                  />
                </div>
                
                {/* Event Badge */}
                <span className="text-primary-400 text-sm font-mono mb-2 block">{workshop.event}</span>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-primary-400 transition-colors">
                  {workshop.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm mb-4">{workshop.description}</p>
                
                {/* Participants */}
                <div className="flex items-center gap-2 mb-4 text-slate-300">
                  <FiUsers className="text-primary-400" />
                  <span className="text-sm font-semibold">{workshop.participants} Participants</span>
                </div>
                
                {/* Topics */}
                <div className="flex flex-wrap gap-2">
                  {workshop.topics.map((topic, i) => (
                    <span key={i} className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Workshops
