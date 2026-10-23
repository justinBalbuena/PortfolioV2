import headshotImg from '../assets/images/justinimg_headshotV2.jpg'
import linkedinIcon from '../assets/images/icons/sites/linkedin.png'
import githubIcon from '../assets/images/icons/sites/githubImg.png'
import './Banner.css'

function Banner() {
  return (
    <header className="banner bottom_spacer">
      <div className="banner_content">
        <div className="banner_text_sect">
          <p className="banner_greeting">Hi, I'm</p>
          <h1 className="banner_text">Justin Balbuena</h1>
          <p className="banner_subtext">Software Engineer</p>
          <p className="banner_intro">
            Computer Science student at Manhattan College in New York, building web apps, games, and tools
            with JavaScript, Python, and Node.js.
          </p>

          <div className="banner_buttons">
            <a href="#projects_section_id" className="banner_button banner_button_primary">View Projects</a>
            <a href="#about_section_id" className="banner_button banner_button_secondary">About Me</a>
          </div>

          <div className="banner_socials">
            <a href="https://www.linkedin.com/in/justintbalbuena/" target="_blank" rel="noreferrer" className="banner_social">
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://github.com/justinBalbuena" target="_blank" rel="noreferrer" className="banner_social">
              <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="banner_photo_wrap">
          <img src={headshotImg} alt="Justin Balbuena" className="banner_photo" />
        </div>
      </div>
    </header>
  )
}

export default Banner
