import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import './App.css'

function App() {
  return (
    <>
      <div className="page">
        <NavBar />

        <div className="page_content_sect" id="home_id">
          <Banner />
          <About />
        </div>

        <Projects />
      </div>
      <footer className="footer" />
    </>
  )
}

export default App
