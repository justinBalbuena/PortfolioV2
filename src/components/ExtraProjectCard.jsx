import './ExtraProjectCard.css'

function ExtraProjectCard({ project }) {
  return (
    <article className="extra_project_card">
      <h2 className="extra_project_title">
        <a href={project.url} className="nav_link" target="_blank" rel="noreferrer">
          {project.title}
        </a>
      </h2>
      <p className="project_text">{project.description}</p>

      <div className="extra_project_icons">
        {project.icons.map((icon) => (
          <img key={icon.alt} src={icon.src} alt={icon.alt} title={icon.alt} />
        ))}
      </div>
    </article>
  )
}

export default ExtraProjectCard
