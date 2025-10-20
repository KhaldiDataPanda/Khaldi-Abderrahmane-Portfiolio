import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Education from '../components/sections/Education'
import Workshops from '../components/sections/Workshops'
import Certificates from '../components/sections/Certificates'
import Contact from '../components/sections/Contact'

const HomePage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Workshops />
      <Certificates />
      <Contact />
    </main>
  )
}

export default HomePage
