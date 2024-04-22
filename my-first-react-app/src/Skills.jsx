import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Button";
import { SkillList } from "./SkillList";

export function Skills({ skills, onSetSkills }) {
  const [isModuleOpened, setIsModuleOpened] = useState(false);
  const [newSkill, setNewSkill] = useState("");
  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }

  function handleSkillAdding(e) {
    e.preventDefault();
    if (newSkill.trim() !== "") {
      // Check if newSkill is not empty
      onSetSkills([...skills, newSkill]);
      setNewSkill("");
    }
  }

  return (
    <div className="module">
      <div className="module-info">
        <h1>
          <FontAwesomeIcon className="icon" icon={faUser} />
          Skills
        </h1>
        <button onClick={handleOpenModule}>
          <FontAwesomeIcon
            icon={!isModuleOpened ? faPlus : faMinus}
            style={{ fontSize: "20px" }}
          />
        </button>
      </div>
      {isModuleOpened && (
        <div>
          <form className="skill-form" onSubmit={handleSkillAdding}>
            <input
              className="skills-input"
              placeholder="Add Skill"
              onChange={(e) => setNewSkill(e.target.value)}
              value={newSkill}
            ></input>
            <Button>Add</Button>
          </form>
          <SkillList skills={skills} onSetSkills={onSetSkills} />
        </div>
      )}
    </div>
  );
}
