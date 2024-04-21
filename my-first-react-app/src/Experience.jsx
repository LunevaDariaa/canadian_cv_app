import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./App";
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

  function handleNewProject(e) {
    e.preventDefault();
    const id = Date.now();
    const newProj = {
      id,
      isSeen: true,
      companyName,
      positionTitle,
      startDateExperience,
      endtDateExperience,
      location,
      jobDescription,
    };
    setProjects([...projects, newProj]); // Update the projects array state
    onSetCompanyName("");
    onSetPositionTitle("");
    onSetStartDateExperience("");
    onSetEndDateExperience("");
    onSetLocation("");
    onSetJobDescription("");
    console.log(projects);
    handleNewJob();
  }

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }

  function handleNewJob() {
    setNewJob(!newJob); // Toggle the state directly
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
          />
          {!newJob && <Button onClick={handleNewJob}> + New</Button>}
        </>
      )}
    </div>
  );
}
