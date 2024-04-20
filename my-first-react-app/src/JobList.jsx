import React, { useState } from "react"; // Import useState

import { Job } from "./Job";

export function JobList({ projects, setProjects }) {
  function toggleSeen(projectId) {
    const project = projects.find((proj) => proj.id === projectId);

    project.isSeen = !project.isSeen;

    setProjects([...projects]);

    if (project.isSeen) {
      // Remove the project from filteredJobs
      const updatedFilteredJobs = filteredJobs.filter(
        (proj) => proj.id !== projectId
      );
      setFilteredJobs(updatedFilteredJobs);
    } else {
      // Add the project to filteredJobs
      setFilteredJobs([...filteredJobs, project]);
    }
    console.log(filteredJobs);
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
          key={project.id}
          project={project}
          handleClearProject={handleClearProject}
        />
      ))}
    </div>
  );
}
