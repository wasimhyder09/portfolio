import {Routes, Route, useLocation} from 'react-router-dom'
import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
import particlesConfig from './helpers/particlesConfig'
import Home from './containers/home'
import About from './containers/about'
import Contact from './containers/contact'
import Portfolio from './containers/portfolio'
import Resume from './containers/resume'
import Skills from './containers/skills'
import Navbar from './components/navBar'
import './App.css'

function App() {
  const particlesInit = async (main) => {
    await loadFull(main)
  }
  const location = useLocation()
  const renderJsParticles = location.pathname === '/'

  return (
    <div className="App">

      {renderJsParticles && <Particles id="particles" options={particlesConfig} init={particlesInit} />}
      {/* navbar component */}
      <Navbar />
      {/* main page content */}
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
