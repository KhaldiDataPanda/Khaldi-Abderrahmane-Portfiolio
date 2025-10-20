import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { getOrganizedProjects } from '../../data/projectsData'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const projects = getOrganizedProjects()

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          
          <p className="text-center text-slate-400 mb-12 max-w-3xl mx-auto">
            A collection of projects spanning Machine Learning, Deep Learning, NLP, Computer Vision, and more.
            Projects are organized with live demos and detailed implementations first.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className="card h-full flex flex-col group hover:scale-105 transition-transform duration-300">
      {/* Project Image */}
      {project.hasPic && (
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23334155" width="400" height="300"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EProject Image%3C/text%3E%3C/svg%3E'
            }}
          />
          {project.hasDemo && (
            <div className="absolute top-2 right-2 bg-primary-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              Live Demo
            </div>
          )}
        </div>
      )}
      
      {/* Category Badge */}
      <span className="text-primary-400 text-sm font-mono mb-2">{project.category}</span>
      
      {/* Title */}
      <h3 className="text-xl font-bold mb-2 text-slate-100 group-hover:text-primary-400 transition-colors">
        {project.title}
      </h3>
      
      {/* Description */}
      <p className="text-slate-400 text-sm mb-4 flex-grow">
        {project.description}
      </p>
      
      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
            +{project.tags.length - 3}
          </span>
        )}
      </div>
      
      {/* Actions */}
      <div className="flex gap-3 mt-auto">
        <Link
          to={`/project/${project.id}`}
          className="flex-1 btn-secondary text-center text-sm py-2"
        >
          View Details
        </Link>
        {project.hasDemo && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-4 flex items-center gap-2"
          >
            <FiExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default Projects
