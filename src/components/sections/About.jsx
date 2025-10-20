import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const skills = {
    "Machine Learning & DL": ["PyTorch", "TensorFlow", "Scikit-learn", "Transformers", "Time-Series", "CV", "OCR", "NLP"],
    "Agents & LLMs": ["LangChain", "Hugging Face", "OpenAI", "GPT-4", "BERT", "ViT"],
    "MLOps & Production": ["Docker", "FastAPI", "Streamlit", "MLflow", "Git", "Bash"],
    "Data Engineering": ["Python", "SQL (PostgreSQL/SQLite)", "Spark", "Hadoop", "Snowflake", "Web Scraping"],
    "Data Analysis & BI": ["Power BI", "Tableau", "SAS", "Excel", "QuickSight"]
  }

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-primary-400 font-semibold">Data Scientist & AI Engineer</span> with 
                a strong foundation in statistical analysis, machine learning, and end-to-end AI system design.
              </p>
              <p>
                My experience spans across <span className="text-primary-400">healthcare</span>, <span className="text-primary-400">finance</span>, 
                and <span className="text-primary-400">real-time decision systems</span>, where I've built predictive models 
                and deployed scalable solutions using modern MLOps practices.
              </p>
              <p>
                I combine rigorous data analysis with advanced techniques in <span className="text-primary-400">NLP</span>, 
                <span className="text-primary-400"> Computer Vision</span>, and <span className="text-primary-400">Time-Series Analysis</span>.
                My work includes everything from exploratory data analysis to production deployment, 
                and I'm passionate about mentoring teams in data-driven approaches.
              </p>
              <p className="text-primary-400 font-semibold">
                🏆 Kaggle Top-700 Contributor Worldwide
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Key Skills</h3>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700 hover:border-primary-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Languages */}
          <div className="card">
            <h3 className="text-xl font-bold mb-4 text-primary-400">Languages</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇩🇿</span>
                <span className="text-slate-300"><span className="font-semibold">Arabic</span> - Native</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇬🇧</span>
                <span className="text-slate-300"><span className="font-semibold">English</span> - Fluent</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🇫🇷</span>
                <span className="text-slate-300"><span className="font-semibold">French</span> - Intermediate</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
