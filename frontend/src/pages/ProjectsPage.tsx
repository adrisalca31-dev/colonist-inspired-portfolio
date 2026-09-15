import { useState } from "react";
import Desktop from "../components/projects/Desktop";
import ProjectDetail from "../components/projects/ProjectDetail";
import ProjectsWindow from "../components/projects/ProjectsWindow";
import { projects } from "../data/projects";

import "../styles/projects.css";

type ProjectsPageProps = {
  onBack: () => void;
};

function ProjectsPage({ onBack }: ProjectsPageProps) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  const handleOpenProjects = () => {
    setIsProjectsOpen(true);
  };

  const handleCloseProjects = () => {
    setIsProjectsOpen(false);
    setSelectedProjectId(null);
  };

  const handleOpenProject = (projectId: string) => {
    setSelectedProjectId(projectId);
  };

  const handleCloseProject = () => {
    setSelectedProjectId(null);
  };

  return (
    <main className="projects-environment">
      <Desktop
        onOpenProjects={handleOpenProjects}
        onBack={onBack}
      />

      {isProjectsOpen && (
        <ProjectsWindow
          projects={projects}
          onClose={handleCloseProjects}
          onOpenProject={handleOpenProject}
        />
      )}

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={handleCloseProject}
        />
      )}
    </main>
  );
}

export default ProjectsPage;