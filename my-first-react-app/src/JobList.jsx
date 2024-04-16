import { Job } from "./Job";

export function JobList({ projects, setProjects }) {
  function handleClearProject(projectId) {
    const filteredProjects = projects.filter((proj) => proj.id !== projectId);
    setProjects(filteredProjects);
  }
  return (
    <div>
      {projects.map((project) => (
        <Job
          key={project.id}
          project={project}
          handleClearProject={handleClearProject}
        />
      ))}
    </div>
  );
}
