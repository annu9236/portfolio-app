import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Navbar />
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
