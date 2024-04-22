import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { provinces } from "./App";

export function PersonalInfo({
  fullName,
  onSetFullName,
  city,
  onSetCity,
  province,
  onSetProvince,
  phoneNum,
  onSetPhoneNum,
  mail,
  onSetMail,
  summary,
  onSetSummary,
}) {
  const [isModuleOpened, setIsModuleOpened] = useState(true);

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }
  return (
    <div className="module">
      <div className="module-info">
        <h1>
          <FontAwesomeIcon className="icon" icon={faUser} />
          Personal Information
        </h1>
        <button onClick={handleOpenModule}>
          <FontAwesomeIcon
            icon={!isModuleOpened ? faPlus : faMinus}
            style={{ fontSize: "20px" }}
          />
        </button>
      </div>
      {isModuleOpened && (
        <form>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => onSetFullName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => onSetCity(e.target.value)}
            required
          />
          <select
            value={province}
            onChange={(e) => onSetProvince(e.target.value)}
          >
            {provinces.map((prov, i) => (
              <option key={i}>{prov}</option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Phone Number"
            required
            value={phoneNum}
            onChange={(e) => onSetPhoneNum(e.target.value)}
          />
          <input
            type="mail"
            placeholder="Mail"
            required
            value={mail}
            onChange={(e) => onSetMail(e.target.value)}
          />
          <textarea
            type="text"
            style={{
              resize: "vertical",
              minHeight: "100px",
              outline: "none",
            }}
            minLength="20"
            value={summary}
            onChange={(e) => onSetSummary(e.target.value)}
            placeholder="Summary"
          ></textarea>
        </form>
      )}
    </div>
  );
}
