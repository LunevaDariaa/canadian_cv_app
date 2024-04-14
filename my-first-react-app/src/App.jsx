import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const provinces = [
  "AB",
  "BC",
  "MB",
  "NB",
  "NL",
  "NS",
  "NT",
  "NU",
  "ON",
  "PE",
  "QC",
  "SK",
  "YT",
];

function Button({ children, onClick, style }) {
  return (
    <button style={style} className="bn3637 bn37" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [fullName, setFullName] = useState("Daria Luneva");
  const [city, setCity] = useState("Toronto");
  const [province, setProvince] = useState("ON");
  const [phoneNum, setPhoneNum] = useState("+1");
  const [mail, setMail] = useState("xxx.xxxx@gmail.com");
  const [companyName, setCompanyName] = useState("YWT Comp.");

  return (
    <div className="app">
      <FormSidebar
        // main info
        fullName={fullName}
        onSetFullName={setFullName}
        city={city}
        onSetCity={setCity}
        province={province}
        onSetProvince={setProvince}
        phoneNum={phoneNum}
        onSetPhoneNum={setPhoneNum}
        mail={mail}
        onSetMail={setMail}
        // experience
        companyName={companyName}
        onSetCompanyName={setCompanyName}
      />
      <Resume
        fullName={fullName}
        city={city}
        province={province}
        phoneNum={phoneNum}
        mail={mail}
        companyName={companyName}
      />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Content</h1>
      <Button>Clear</Button>
    </div>
  );
}

function FormSidebar({
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
  companyName,
  onSetCompanyName,
}) {
  return (
    <div className="form-sidebar">
      <Header />
      <PersonalInfo
        fullName={fullName}
        onSetFullName={onSetFullName}
        city={city}
        onSetCity={onSetCity}
        province={province}
        onSetProvince={onSetProvince}
        phoneNum={phoneNum}
        onSetPhoneNum={onSetPhoneNum}
        mail={mail}
        onSetMail={onSetMail}
      />
      <Experience
        companyName={companyName}
        onSetCompanyName={onSetCompanyName}
      />
      <Education />
    </div>
  );
}

function Resume({ fullName, city, province, phoneNum, mail, companyName }) {
  return (
    <div className="resume">
      <div className="personal-info-display">
        <h2>{fullName}</h2>
        <p>{`${city}   |   ${province}   |   ${phoneNum}   |   ${mail}`}</p>
      </div>
      <div className="experience">
        <h4>Professional Experience</h4>
        <div className="experience-heading">{companyName}</div>
      </div>
    </div>
  );
}

function PersonalInfo({
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
}) {
  const [isModuleOpened, setIsModuleOpened] = useState(true);

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }
  return (
    <div className="module">
      <div className="module-info">
        <h1>Personal Information</h1>
        <button onClick={handleOpenModule}>
          {!isModuleOpened ? "+" : "-"}
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
        </form>
      )}
    </div>
  );
}

function Experience({ companyName, onSetCompanyName }) {
  const [isSeen, setIsSeen] = useState(false);

  function toggleSeen() {
    setIsSeen((prevSeen) => !prevSeen);
  }
  const [isModuleOpened, setIsModuleOpened] = useState(false);
  const [newJob, setNewJob] = useState(false);
  const [project, setProject] = useState(null);
  const projects = [];

  function createNewProject() {}

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }

  function handleNewJob() {
    setNewJob(!newJob); // Toggle the state directly
  }

  return (
    <div className="module">
      <div className="module-info">
        <h1>💼 Experience</h1>
        <button onClick={handleOpenModule}>
          {!isModuleOpened ? "+" : "-"}
        </button>
      </div>
      {newJob && isModuleOpened && (
        <form>
          <input
            type="text"
            value={companyName}
            placeholder="Company name"
            required
            onChange={onSetCompanyName}
          />
          <input type="text" placeholder="Position Title" required />
          <input type="date" placeholder="Start Date" required />
          <input type="date" placeholder="End Date" />
          <input type="text" placeholder="Location" required />
          <textarea
            type="text"
            minLength="20"
            placeholder="Description.."
          ></textarea>
        </form>
      )}
      {isModuleOpened && (
        <>
          <Button onClick={handleNewJob}> + Education</Button>
          <Job isSeen={isSeen} toggleSeen={toggleSeen}></Job>
        </>
      )}
    </div>
  );
}

function Job({ isSeen, toggleSeen }) {
  return (
    <div className="job">
      <p className="job-company">VGH Corporation</p>
      <button className="seen-btn" onClick={toggleSeen}>
        <FontAwesomeIcon
          icon={isSeen ? faEye : faEyeSlash}
          className="eye-icon"
        />
      </button>
    </div>
  );
}

function Education() {
  const [isModuleOpened, setIsModuleOpened] = useState(false);

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }

  return (
    <div className="module">
      <div className="module-info">
        <h1>👩‍🎓 Education</h1>
        <button onClick={handleOpenModule}>
          {!isModuleOpened ? "+" : "-"}
        </button>
      </div>
      {isModuleOpened && (
        <form>
          <input type="text" placeholder="School" required />
          <input type="text" placeholder="Degree" required />
          <input type="date" placeholder="Start Date" required />
          <input type="date" placeholder="End Date" />
          <input type="text" placeholder="Location" required />
        </form>
      )}
    </div>
  );
}

function Skills() {
  return <div></div>;
}
