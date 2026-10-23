function ProjectCard({ project, imageFirst, animationClass }) {
  const image = <img src={project.image} alt={project.title} className="project_img" />

  return (
    <div className={`favorite_project project_card large_bottom_spacer ${imageFirst ? 'image_first' : ''} ${animationClass}`}>
      {imageFirst && image}

      <div>
        <h2 className="bottom_spacer">
          <a href={project.url} target="_blank" rel="noreferrer" className="nav_link">
            {project.title}
          </a>
        </h2>
        <p className="project_text">{project.description}</p>
      </div>

      {!imageFirst && image}
    </div>
  )
}

export default ProjectCard
