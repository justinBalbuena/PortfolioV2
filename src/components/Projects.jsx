import { useEffect, useRef, useState } from 'react'
import { favoriteProjects, moreProjects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ExtraProjectCard from './ExtraProjectCard'
import pythonIcon from '../assets/images/icons/languages/python_transparent_icon.png'
import nodejsIcon from '../assets/images/icons/languages/nodejs_transparent_icon.png'
import './Projects.css'

function Projects() {
  const favoritesRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  // Slide all favorite project cards in once the first one is half visible
  useEffect(() => {
    const firstCard = favoritesRef.current?.querySelector('.favorite_project')
    if (!firstCard) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(firstCard)
    return () => observer.disconnect()
  }, [])

  return (
    <div id="projects_section_id">
      <div className="projects_section">
        <div className="projects_title bottom_spacer">
          <p className="section_title">Projects</p>
        </div>

        <hr className="bottom_spacer" />

        <div className="favorite_projects" ref={favoritesRef}>
          <div className="fav_projects_header bottom_spacer">
            <h1>My Favorite Projects</h1>

            <img src={pythonIcon} alt="Python" className="very_small_language_icon" />
            <img src={nodejsIcon} alt="Node.js" className="very_small_language_icon" />
          </div>

          {favoriteProjects.map((project, index) => {
            const fromLeft = index % 2 === 0
            const animationClass = revealed ? (fromLeft ? 'sliding_from_left' : 'sliding_from_right') : ''

            return (
              <ProjectCard
                key={project.title}
                project={project}
                imageFirst={!fromLeft}
                animationClass={animationClass}
              />
            )
          })}
        </div>

        <hr className="bottom_spacer" />

        <div>
          <h1 className="bottom_spacer">More Projects</h1>

          <div className="more_projects_section">
            {moreProjects.map((project) => (
              <ExtraProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
