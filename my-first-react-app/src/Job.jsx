import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export function Job({ project, handleClearProject, isSeen, toggleSeen }) {
  // const [isSeen, setIsSeen] = useState(true);
  const { id, companyName } = project;

  return (
    <>
      <div className="job" key={id}>
        <p className="job-company">{companyName}</p>
        <button className="seen-btn" onClick={toggleSeen}>
          <FontAwesomeIcon
            icon={isSeen ? faEye : faEyeSlash}
            className="eye-icon"
          />
        </button>
        <button className="seen-btn">
          <FontAwesomeIcon
            onClick={() => handleClearProject(id)}
            style={{ fontSize: "20px" }}
            icon={faTrashCan}
          />
        </button>
      </div>
    </>
  );
}
