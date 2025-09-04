import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import AboutPortfolio from './components/AboutPortfolio/AboutPortfolio'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <>
      {/* Navegación fija */}
      <Header />
      
      {/* Sección principal */}
      <Hero />
      
      {/* Sección sobre mí */}
      <About />
      
      {/* Sección habilidades */}
      <Skills />

      {/* Sección de información del proyecto */}
      <AboutPortfolio />

      {/* Sección proyectos */}
      <Projects />
      
      {/* Sección de contacto */}
      <Contact />
      
      {/* Footer */}
      <Footer />
      
    </>
  )
}

export default App
