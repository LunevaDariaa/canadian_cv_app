import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEyeSlash,
  faEye,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export function School({ school, handleClearSchool, toggleSeen }) {
  const { id, schoolName, isSeen } = school;

  return (
    <>
      <div className="job" key={id}>
        <p className="job-company">{schoolName}</p>
        <button className="seen-btn" onClick={toggleSeen}>
          <FontAwesomeIcon
            icon={isSeen ? faEye : faEyeSlash}
            className="eye-icon"
          />
        </button>
        <button className="seen-btn">
          <FontAwesomeIcon
            onClick={() => handleClearSchool(id)}
            style={{ fontSize: "20px" }}
            icon={faTrashCan}
          />
        </button>
      </div>
    </>
  );
}
