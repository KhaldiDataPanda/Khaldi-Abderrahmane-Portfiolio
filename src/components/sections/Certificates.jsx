import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { useState } from 'react'

const Certificates = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [filter, setFilter] = useState('All')

  const certificates = [
    {
      title: 'Data Scientist Associate',
      issuer: 'DataCamp',
      date: 'May 2025',
      expires: 'May 2027',
      credentialId: 'DSA0018554810721',
      category: 'Professional',
      skills: ['Machine Learning', 'Data Science'],
      featured: true
    },
    {
      title: 'Deep Neural Networks with PyTorch (with Honors)',
      issuer: 'IBM',
      date: 'Aug 2024',
      credentialId: 'Z5XTUIHE7DX7',
      category: 'Deep Learning',
      skills: ['PyTorch', 'Neural Networks']
    },
    {
      title: 'Introduction to Computer Vision and Image Processing',
      issuer: 'IBM',
      date: 'Feb 2024',
      credentialId: 'UCWKR4WARJPF',
      category: 'Computer Vision',
      skills: ['Computer Vision', 'Image Processing']
    },
    {
      title: 'An Intuitive Introduction to Probability',
      issuer: 'Coursera',
      date: 'Aug 2023',
      credentialId: 'GECMB4JM2UJ9',
      category: 'Mathematics',
      skills: ['Probability', 'Statistics']
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: 'HAHR2TN9UY7K',
      category: 'Machine Learning',
      skills: ['Regression', 'Classification']
    },
    {
      title: 'Introduction to Calculus',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: '9B56F7KHBHCE',
      category: 'Mathematics',
      skills: ['Calculus', 'Mathematics']
    },
    {
      title: 'Linear Algebra for Machine Learning and Data Science',
      issuer: 'DeepLearning.AI',
      date: 'Jul 2023',
      credentialId: 'FSWXFVQ8C3U6',
      category: 'Mathematics',
      skills: ['Linear Algebra', 'Mathematics']
    },
    {
      title: 'Machine Learning',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: 'KQN5B48LUMNT',
      category: 'Machine Learning',
      skills: ['Machine Learning', 'Algorithms']
    },
    {
      title: 'Mathematics for Machine Learning: Linear Algebra',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: '5FNWUJ4W7NDC',
      category: 'Mathematics',
      skills: ['Linear Algebra']
    },
    {
      title: 'Supervised Text Classification for Marketing Analytics',
      issuer: 'Coursera',
      date: 'Jul 2023',
      credentialId: '4NVQRLB9LLPD',
      category: 'NLP',
      skills: ['NLP', 'Text Classification']
    },
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'Coursera',
      date: 'Apr 2023',
      credentialId: 'UQDDPXYWECWH',
      category: 'Programming',
      skills: ['Python', 'Data Science']
    },
    {
      title: 'Introduction to Deep Learning & Neural Networks with Keras',
      issuer: 'Coursera',
      date: 'Feb 2023',
      credentialId: '3TMAPMAWSC9N',
      category: 'Deep Learning',
      skills: ['Keras', 'Neural Networks']
    },
    {
      title: 'Machine Learning with Python (with Honors)',
      issuer: 'Coursera',
      date: 'Feb 2023',
      credentialId: 'YF5B3SS52KKU',
      category: 'Machine Learning',
      skills: ['Python', 'Machine Learning']
    },
    {
      title: 'Fundamentals of Deep Learning',
      issuer: 'NVIDIA',
      date: 'Feb 2023',
      credentialId: 'bb265437a4d04c4b92ddb8634f5c8bb4',
      category: 'Deep Learning',
      skills: ['Deep Learning', 'CUDA'],
      featured: true
    },
    {
      title: 'Databases and SQL for Data Science with Python',
      issuer: 'Coursera',
      date: 'Oct 2022',
      credentialId: 'C8EY27KBTZYF',
      category: 'Data Engineering',
      skills: ['SQL', 'Databases']
    },
    {
      title: 'Data Science Methodology',
      issuer: 'Coursera',
      date: 'Aug 2022',
      credentialId: 'JXG2S2BA9QHN',
      category: 'Data Science',
      skills: ['Methodology', 'CRISP-DM']
    }
  ]

  const categories = ['All', 'Professional', 'Deep Learning', 'Machine Learning', 'Computer Vision', 'NLP', 'Mathematics', 'Data Science', 'Data Engineering', 'Programming']

  const filteredCertificates = filter === 'All' 
    ? certificates 
    : certificates.filter(cert => cert.category === filter)

  return (
    <section id="certificates" className="py-20 bg-slate-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Certificates & Credentials</h2>
          
          <p className="text-center text-slate-400 mb-8 max-w-3xl mx-auto">
            Continuous learning through professional certifications from leading institutions 
            in AI, Machine Learning, and Data Science.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`card hover:scale-105 transition-transform ${
                  cert.featured ? 'border-2 border-primary-500' : ''
                }`}
              >
                {cert.featured && (
                  <div className="absolute -top-3 -right-3 bg-primary-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    Featured
                  </div>
                )}
                
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary-500/20 rounded-lg">
                    <FiAward className="text-primary-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-100 mb-1">{cert.title}</h3>
                    <p className="text-sm text-slate-400">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-slate-400">
                    <span className="text-slate-500">Issued:</span> {cert.date}
                  </p>
                  {cert.expires && (
                    <p className="text-sm text-slate-400">
                      <span className="text-slate-500">Expires:</span> {cert.expires}
                    </p>
                  )}
                  <p className="text-xs text-slate-500 font-mono">
                    ID: {cert.credentialId}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {cert.skills.map((skill, i) => (
                    <span key={i} className="text-xs text-primary-400 bg-primary-500/10 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <span className="inline-block text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                  {cert.category}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 text-center">
            <p className="text-slate-400">
              Showing <span className="text-primary-400 font-semibold">{filteredCertificates.length}</span> of{' '}
              <span className="text-primary-400 font-semibold">{certificates.length}</span> certificates
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
