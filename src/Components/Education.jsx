import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { SchoolList } from "./SchoolList";

export function Education({
  schools,
  onSetSchools,
  filteredSchools,
  onSetFilteredSchools,
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
  const [isModuleOpened, setIsModuleOpened] = useState(false);
  const [newSchool, setNewSchool] = useState(false);
  const [editSchoolId, setEditSchoolId] = useState(null); // Track the id of the project being edited
  function handleNewSchool(e) {
    e.preventDefault();

    if (editSchoolId !== null) {
      const updatedSchools = schools.map((proj) => {
        if (proj.id === editSchoolId) {
          return {
            ...proj, // Keep existing project properties
            schoolName,
            degree,
            startDateEducation,
            endDateEducation,
            schoolLocation,
          };
        }
        return proj;
      });
      onSetSchools(updatedSchools); // Update the projects array state with the updated project
      setEditSchoolId(null); // Reset the editProjectId after updating
    } else {
      const id = Date.now();
      const newEducation = {
        isSeen: true,
        id,
        schoolName,
        degree,
        startDateEducation,
        endDateEducation,
        schoolLocation,
      };
      onSetSchools([...schools, newEducation]); // Update the projects array state
    }

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

  function editSchool(schoolId) {
    setEditSchoolId(schoolId); // Set the editProjectId to the id of the project being edited
    setNewSchool(true); // Open the form for editing
    const schoolToEdit = schools.find((proj) => proj.id === schoolId);
    console.log(schoolToEdit);
    if (schoolToEdit) {
      // Populate the input fields with the data of the project being edited
      onSetSchool(schoolToEdit.schoolName || "");
      onSetDegree(schoolToEdit.degree || "");
      onSetStartDateEducation(schoolToEdit.startDateEducation || "");
      onSetEndDateEducation(schoolToEdit.endtDateEducation || "");
      onSetSchoolLocation(schoolToEdit.schoolLocation || "");
    }
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
        <form onSubmit={handleNewSchool}>
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
          <Button type="submit">Save</Button>
        </form>
      )}
      {isModuleOpened && (
        <>
          <SchoolList
            schools={schools}
            setSchools={onSetSchools}
            filteredSchools={filteredSchools}
            onSetFilteredSchools={onSetFilteredSchools}
            editSchool={editSchool}
          />
          {!newSchool && <Button onClick={handleAddSchool}> + New</Button>}
        </>
      )}
    </div>
  );
}
