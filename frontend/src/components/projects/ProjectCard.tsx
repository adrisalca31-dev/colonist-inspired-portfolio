import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__header">
        <div>
          <span className="project-card__category">
            {project.category}
          </span>

          <span
            className={`project-card__status project-card__status--${project.status}`}
          >
            {project.status.replace("-", " ")}
          </span>
        </div>

        {project.featured && (
          <span className="project-card__featured">
            FEATURED
          </span>
        )}
      </div>

      <div className="project-card__body">
        <h2>{project.title}</h2>

        <p className="project-card__tagline">
          {project.tagline}
        </p>

        <p className="project-card__description">
          {project.description}
        </p>

        <div className="project-card__technologies">
          {project.technologies.slice(0, 5).map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>

      <footer className="project-card__footer">
        <span>{project.year}</span>

        <button type="button">
          OPEN PROJECT
          <span aria-hidden="true">→</span>
        </button>
      </footer>
    </article>
  );
}

export default ProjectCard;