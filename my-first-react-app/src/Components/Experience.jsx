import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { JobList } from "./JobList";

export function Experience({
  projects,
  setProjects,
  filteredJobs,
  onSetFilteredJobs,
  companyName,
  onSetCompanyName,
  positionTitle,
  onSetPositionTitle,
  startDateExperience,
  onSetStartDateExperience,
  endtDateExperience,
  onSetEndDateExperience,
  location,
  onSetLocation,
  jobDescription,
  onSetJobDescription,
}) {
  const [isModuleOpened, setIsModuleOpened] = useState(false);
  const [newJob, setNewJob] = useState(false);
  const [editProjectId, setEditProjectId] = useState(null); // Track the id of the project being edited

  function handleNewProject(e) {
    e.preventDefault();
    if (editProjectId !== null) {
      const updatedProjects = projects.map((proj) => {
        if (proj.id === editProjectId) {
          return {
            ...proj, // Keep existing project properties
            companyName,
            positionTitle,
            startDateExperience,
            endtDateExperience,
            location,
            jobDescription,
          };
        }
        return proj;
      });
      setProjects(updatedProjects); // Update the projects array state with the updated project
      setEditProjectId(null); // Reset the editProjectId after updating
    } else {
      // Otherwise, it's a new project
      const id = Date.now();
      const newProj = {
        id,
        companyName,
        positionTitle,
        startDateExperience,
        endtDateExperience,
        location,
        jobDescription,
      };
      setProjects([...projects, newProj]); // Update the projects array state with the new project
    }

    // Reset input values
    onSetCompanyName("");
    onSetPositionTitle("");
    onSetStartDateExperience("");
    onSetEndDateExperience("");
    onSetLocation("");
    onSetJobDescription("");

    handleNewJob(); // Close the form after saving
  }

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }

  function handleNewJob() {
    setNewJob(!newJob); // Toggle the state directly
  }

  function editProject(projectId) {
    setEditProjectId(projectId); // Set the editProjectId to the id of the project being edited
    setNewJob(true); // Open the form for editing
    const projectToEdit = projects.find((proj) => proj.id === projectId);
    console.log(projectToEdit);
    if (projectToEdit) {
      // Populate the input fields with the data of the project being edited
      onSetCompanyName(projectToEdit.companyName || "");
      onSetPositionTitle(projectToEdit.positionTitle || "");
      onSetStartDateExperience(projectToEdit.startDateExperience || "");
      onSetEndDateExperience(projectToEdit.endtDateExperience || "");
      onSetLocation(projectToEdit.location || "");
      onSetJobDescription(projectToEdit.jobDescription || "");
    }
  }
  return (
    <div className="module">
      <div className="module-info">
        <h1>
          <FontAwesomeIcon className="icon" icon={faBusinessTime} /> Experience
        </h1>
        <button onClick={handleOpenModule}>
          <FontAwesomeIcon
            style={{ fontSize: "20px" }}
            icon={!isModuleOpened ? faPlus : faMinus}
          />
        </button>
      </div>
      {newJob && isModuleOpened && (
        <form onSubmit={handleNewProject}>
          <input
            type="text"
            value={companyName}
            placeholder="Company name"
            required
            onChange={(e) => onSetCompanyName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Position Title"
            value={positionTitle}
            onChange={(e) => onSetPositionTitle(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Start Date"
            value={startDateExperience}
            onChange={(e) => onSetStartDateExperience(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="End Date"
            value={endtDateExperience}
            onChange={(e) => onSetEndDateExperience(e.target.value)}
          />
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => onSetLocation(e.target.value)}
            required
          />
          <textarea
            type="text"
            minLength="20"
            style={{
              resize: "vertical",
              minHeight: "100px",
              outline: "none",
            }}
            value={jobDescription}
            onChange={(e) => onSetJobDescription(e.target.value)}
            placeholder="Description.."
            required
          ></textarea>
          <Button onClick={handleNewJob}>Cancel</Button>
          <Button type="submit">Save</Button>
        </form>
      )}
      {isModuleOpened && (
        <>
          <JobList
            projects={projects}
            setProjects={setProjects}
            filteredJobs={filteredJobs}
            onSetFilteredJobs={onSetFilteredJobs}
            editProject={editProject}
          />
          {!newJob && <Button onClick={handleNewJob}> + New</Button>}
        </>
      )}
    </div>
  );
}
