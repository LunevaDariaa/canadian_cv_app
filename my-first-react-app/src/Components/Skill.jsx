import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export function Skill({ skill, removeSkill }) {
  const [isSeen, setIsSeen] = useState(false);

  function toggleSeen() {
    setIsSeen((seen) => !seen);
  }
  return (
    <div className={`skill ${isSeen ? "crossed-out" : ""}`}>
      <FontAwesomeIcon icon={faCheck} onClick={() => toggleSeen()} />
      <span className="skill-text">{skill}</span>
      <FontAwesomeIcon
        style={{ color: "red" }}
        icon={faXmark}
        onClick={() => removeSkill(skill)}
      />
    </div>
  );
}
