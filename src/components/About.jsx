import collegeLogo from '../assets/images/Manhattan College.png'
import authorImg from '../assets/images/justinimg.jpg'
import './About.css'

function About() {
  return (
    <div className="about_sect" id="about_section_id">
      <div className="about_me_title bottom_spacer">
        <p className="section_title">About Me</p>
      </div>

      <div className="about_sect_content">
        <div className="bio_info">
          <img src={collegeLogo} alt="Manhattan College logo" className="mc_logo_img" />

          <p className="about_paragraph">
            Hello! I’m Justin Balbuena, a passionate software engineer based in New York.
            I am currently a junior at Manhattan College, where I am pursuing my degree in Computer Science.
            My interests lie in coding, problem-solving, and continuously learning new technologies and frameworks.
          </p>
        </div>

        <img src={authorImg} alt="Justin Balbuena" className="author_img" />
      </div>
    </div>
  )
}

export default About
