// src/pages/Portfolio.jsx
import projectsData from '../data/projects.json';

function Portfolio() {
  return (
    <section className="portfolio">
      <h1>My projects</h1>
      <div className="projects-grid">
        {projectsData.projects.map(project => (
          <div key={project.id} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} />
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Link to project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;