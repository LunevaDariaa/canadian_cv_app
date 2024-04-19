import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./App";
import { SchoolList } from "./SchoolList";

export function Education({
  schoolName,
  onSetSchool,
  degree,
  onSetDegree,
  startDateEducation,
  onSetStartDateEducation,
  endDateEducation,
  onSetEndDateEducation,
  schoolLocation,
  onSetSchoolLocation,
}) {
  const [schools, setSchools] = useState([]);
  const [isModuleOpened, setIsModuleOpened] = useState(false);
  const [newSchool, setNewSchool] = useState(false);

  function handleNewSchool(e) {
    e.preventDefault();
    const id = Date.now();
    const newEducation = {
      id,
      schoolName,
      degree,
      startDateEducation,
      endDateEducation,
      schoolLocation,
    };
    setSchools([...schools, newEducation]); // Update the projects array state

    onSetSchool("");
    onSetDegree("");
    onSetStartDateEducation("");
    onSetEndDateEducation("");
    onSetSchoolLocation("");
    handleAddSchool();
  }

  function handleAddSchool() {
    setNewSchool((s) => !s);
  }

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }

  return (
    <div className="module">
      <div className="module-info">
        <h1>
          <FontAwesomeIcon className="icon" icon={faUserGraduate} /> Education
        </h1>
        <button onClick={handleOpenModule}>
          <FontAwesomeIcon
            style={{ fontSize: "20px" }}
            icon={!isModuleOpened ? faPlus : faMinus}
          />
        </button>
      </div>
      {isModuleOpened && newSchool && (
        <form>
          <input
            type="text"
            value={schoolName}
            placeholder="School"
            onChange={(e) => onSetSchool(e.target.value)}
            required
          />
          <input
            type="text"
            value={degree}
            placeholder="Degree"
            onChange={(e) => onSetDegree(e.target.value)}
            required
          />
          <input
            type="date"
            value={startDateEducation}
            placeholder="Start Date"
            onChange={(e) => onSetStartDateEducation(e.target.value)}
            required
          />
          <input
            type="date"
            value={endDateEducation}
            onChange={(e) => onSetEndDateEducation(e.target.value)}
            placeholder="End Date"
          />
          <input
            type="text"
            value={schoolLocation}
            onChange={(e) => onSetSchoolLocation(e.target.value)}
            placeholder="Location"
            required
          />
          <Button onClick={handleAddSchool}>Cancel</Button>
          <Button onClick={handleNewSchool}>Save</Button>
        </form>
      )}
      {isModuleOpened && (
        <>
          <SchoolList schools={schools} setSchools={setSchools} />
          {!newSchool && <Button onClick={handleAddSchool}> + New</Button>}
        </>
      )}
    </div>
  );
}
