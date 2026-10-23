function ExtraProjectCard({ project }) {
  return (
    <div className="extra_projects large_bottom_spacer">
      <div>
        <h2>
          <a href={project.url} className="nav_link" target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h2>
        <p className="project_text bottom_spacer">{project.description}</p>

        <div className="projects_icons">
          {project.icons.map((icon) => (
            <img key={icon.alt} src={icon.src} alt={icon.alt} className={icon.className} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExtraProjectCard
