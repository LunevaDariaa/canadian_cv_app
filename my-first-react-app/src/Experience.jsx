import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Button, JobList } from "./App";

export function Experience({
  projects,
  setProjects,
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
  const [isSeen, setIsSeen] = useState(false);

  function toggleSeen() {
    setIsSeen((prevSeen) => !prevSeen);
  }
  const [isModuleOpened, setIsModuleOpened] = useState(false);
  const [newJob, setNewJob] = useState(false);

  function handleNewProject(e) {
    e.preventDefault();
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
        <form>
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
            value={jobDescription}
            onChange={(e) => onSetJobDescription(e.target.value)}
            placeholder="Description.."
          ></textarea>
          <Button
            onClick={handleNewJob}
            style={{
              backgroundColor: "rgb(182, 199, 228)",
              borderRadius: "2px",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleNewProject}
            style={{
              backgroundColor: "rgb(182, 199, 228)",
              borderRadius: "2px",
            }}
          >
            Save
          </Button>
        </form>
      )}
      {isModuleOpened && (
        <>
          <JobList projects={projects} setProjects={setProjects} />
          {!newJob && <Button onClick={handleNewJob}> + New</Button>}
        </>
      )}
    </div>
  );
}
