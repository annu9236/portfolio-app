import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Education from './components/Education';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      
      <a href="#contact" className="work-banner">Available for Work</a>
    </>
  )
}

export default App