import type { Project } from "../../data/projects";

type ProjectDetailProps = {
  project: Project;
  onBack: () => void;
};

function ProjectDetail({
  project,
  onBack,
}: ProjectDetailProps) {
  const statusLabel =
    project.status === "in-development"
      ? "In Development"
      : project.status === "completed"
        ? "Completed"
        : "Experimental";

  return (
    <section
      className="project-detail"
      role="dialog"
      aria-modal="false"
      aria-labelledby="project-detail-title"
    >
      <header className="project-detail__header">
        <button
          type="button"
          className="project-detail__back"
          onClick={onBack}
        >
          <span aria-hidden="true">←</span>
          Projects
        </button>

        <div className="project-detail__window-title">
          {project.title}
        </div>

        <span className="project-detail__status">
          {statusLabel}
        </span>
      </header>

      <div className="project-detail__content">
        <section className="project-detail__hero">
          <div className="project-detail__folder-icon" aria-hidden="true" />

          <div>
            <p className="project-detail__eyebrow">
              {project.category}
            </p>

            <h1 id="project-detail-title">
              {project.title}
            </h1>

            <p className="project-detail__tagline">
              {project.tagline}
            </p>
          </div>
        </section>

        <section className="project-detail__section">
          <h2>Overview</h2>

          <p>
            {project.description}
          </p>
        </section>

        <section className="project-detail__section">
          <h2>Tech Stack</h2>

          <div className="project-detail__tags">
            {project.technologies.map((technology) => (
              <span key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </section>

        <section className="project-detail__section">
          <h2>What I Built</h2>

          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        {project.architecture && (
          <section className="project-detail__section">
            <h2>Architecture</h2>

            <p>
              {project.architecture.description}
            </p>

            <ul>
              {project.architecture.components.map((component) => (
                <li key={component}>
                  {component}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.challenges && (
          <section className="project-detail__section">
            <h2>Challenges</h2>

            <ul>
              {project.challenges.map((challenge) => (
                <li key={challenge}>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>
        )}

        {project.learnings && (
          <section className="project-detail__section">
            <h2>What I Learned</h2>

            <ul>
              {project.learnings.map((learning) => (
                <li key={learning}>
                  {learning}
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="project-detail__footer">
          <span>
            {project.year}
          </span>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
            <span aria-hidden="true"> ↗</span>
          </a>
        </footer>
      </div>
    </section>
  );
}

export default ProjectDetail;