import type { Project } from "../../data/projects";

type ProjectsWindowProps = {
  projects: Project[];
  onClose: () => void;
  onOpenProject: (projectId: string) => void;
};

function ProjectsWindow({
  projects,
  onClose,
  onOpenProject,
}: ProjectsWindowProps) {
  return (
    <section
      className="projects-window"
      role="dialog"
      aria-modal="false"
      aria-labelledby="projects-window-title"
    >
      <header className="projects-window__header">
        <div className="projects-window__traffic-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="projects-window__title">
          <span
            className="projects-window__title-icon"
            aria-hidden="true"
          >
            📁
          </span>

          <span id="projects-window-title">
            Projects
          </span>
        </div>

        <button
          type="button"
          className="projects-window__close"
          onClick={onClose}
          aria-label="Close Projects"
        >
          <span />
          <span />
        </button>
      </header>

      <div className="projects-window__toolbar">
        <span>
          {projects.length} {projects.length === 1 ? "project" : "projects"}
        </span>

        <span>
          Developer Portfolio
        </span>
      </div>

      <div className="projects-window__content">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className="project-folder"
            onDoubleClick={() => onOpenProject(project.id)}
            onClick={() => onOpenProject(project.id)}
            aria-label={`Open ${project.title}`}
          >
            <span
              className="project-folder__icon"
              aria-hidden="true"
            />

            <span className="project-folder__name">
              {project.title}
            </span>

            <span className="project-folder__meta">
              {project.status === "in-development"
                ? "In development"
                : project.status === "completed"
                  ? "Completed"
                  : "Experimental"}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ProjectsWindow;