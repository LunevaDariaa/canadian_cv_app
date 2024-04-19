import { Job } from "./Job";

export function JobList({ projects, setProjects }) {
  const [isSeen, setIsSeen] = useState(true);

  // function toggleSeen(projectId) {
  //   setIsSeen((seen) => !seen);
  //   const filteredProject = projects.filter((proj) => proj.id === projectId);

  //   if (isSeen === false) {
  //     projects.filter((proj) => proj.id !== filteredProject.id);
  //   }
  //   if (isSeen === true) setProjects(...projects, filteredProject);
  // }
  function toggleSeen(projectId) {
    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id === projectId) {
          return { ...project, isSeen: !project.isSeen };
        }
        return project;
      });
    });
  }

  function handleClearProject(projectId) {
    const filteredProjects = projects.filter((proj) => proj.id !== projectId);
    setProjects(filteredProjects);
  }
  return (
    <div>
      {projects.map((project) => (
        <Job
          toggleSeen={() => toggleSeen(project.id)}
          isSeen={isSeen}
          key={project.id}
          project={project}
          handleClearProject={handleClearProject}
        />
      ))}
    </div>
  );
}
