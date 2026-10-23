import linkedinIcon from '../assets/images/icons/sites/linkedin.png'
import githubIcon from '../assets/images/icons/sites/githubImg.png'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="nav_bar">
      <div className="nav_name">Justin Balbuena</div>

      <div className="nav_links_sect">
        <a href="#home_id" className="nav_link">Home</a>
        <a href="#about_section_id" className="nav_link">About</a>
        <a href="#projects_section_id" className="nav_link">Projects</a>

        <a href="https://www.linkedin.com/in/justintbalbuena/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social_icon" />
        </a>
        <a href="https://github.com/justinBalbuena" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" className="social_icon" />
        </a>
      </div>
    </nav>
  )
}

export default NavBar
