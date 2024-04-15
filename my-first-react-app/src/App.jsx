import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  faEye,
  faEyeSlash,
  faUserGraduate,
  faUser,
  faPlus,
  faMinus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { Experience } from "./Experience";

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

export function Button({ children, onClick, style }) {
  return (
    <button style={style} className="bn3637 bn37" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  // Personal Info
  const [fullName, setFullName] = useState("Daria Luneva");
  const [city, setCity] = useState("Toronto");
  const [province, setProvince] = useState("ON");
  const [phoneNum, setPhoneNum] = useState("+1");
  const [mail, setMail] = useState("xxx.xxxx@gmail.com");

  // Experience
  const [projects, setProjects] = useState([]);
  const [companyName, setCompanyName] = useState("YWT Comp.");
  const [positionTitle, setPositionTitle] = useState("Manager");
  const [startDateExperience, setStartDateExperience] = useState("2022-01-01");
  const [endtDateExperience, setEndDateExperience] = useState("2022-10-01");
  const [location, setLocation] = useState("Toronto");
  const [jobDescription, setJobDescription] = useState(" Created..");

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
        projects={projects}
        setProjects={setProjects}
        companyName={companyName}
        onSetCompanyName={setCompanyName}
        positionTitle={positionTitle}
        onSetPositionTitle={setPositionTitle}
        startDateExperience={startDateExperience}
        onSetStartDateExperience={setStartDateExperience}
        endtDateExperience={endtDateExperience}
        onSetEndDateExperience={setEndDateExperience}
        location={location}
        onSetLocation={setLocation}
        jobDescription={jobDescription}
        onSetJobDescription={setJobDescription}
      />
      <Resume
        projects={projects}
        fullName={fullName}
        city={city}
        province={province}
        phoneNum={phoneNum}
        mail={mail}
        companyName={companyName}
        positionTitle={positionTitle}
        startDateExperience={startDateExperience}
        endtDateExperience={endtDateExperience}
        location={location}
        jobDescription={jobDescription}
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
  projects,
  setProjects,
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
        projects={projects}
        setProjects={setProjects}
        companyName={companyName}
        onSetCompanyName={onSetCompanyName}
        positionTitle={positionTitle}
        onSetPositionTitle={onSetPositionTitle}
        startDateExperience={startDateExperience}
        onSetStartDateExperience={onSetStartDateExperience}
        endtDateExperience={endtDateExperience}
        onSetEndDateExperience={onSetEndDateExperience}
        location={location}
        onSetLocation={onSetLocation}
        jobDescription={jobDescription}
        onSetJobDescription={onSetJobDescription}
      />
      <Education />
    </div>
  );
}
// companyName,
// positionTitle,
// startDateExperience,
// endtDateExperience,
// location,
// jobDescription,

function Resume({ projects, fullName, city, province, phoneNum, mail }) {
  return (
    <div className="resume">
      <div className="personal-info-display">
        <h2>{fullName}</h2>
        <p>{`${city}, ${province}   |   ${phoneNum}   |   ${mail}`}</p>
      </div>
      <div className="experience">
        <h4>Professional Experience</h4>

        {projects.map((project) => (
          <JobResume key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function JobResume({ project }) {
  const {
    companyName,
    endtDateExperience,
    jobDescription,
    location,
    positionTitle,
    startDateExperience,
  } = project;

  const jobPoints = jobDescription.split("\n");
  const filteredJobPoints = jobPoints.filter((point) => point.trim() !== "");
  const startYear = new Date(startDateExperience).getFullYear();
  const startMonth = new Date(startDateExperience).getMonth();

  const endYear = new Date(endtDateExperience).getFullYear();
  const endMonth = new Date(endtDateExperience).getMonth();
  return (
    <div className="experience-full">
      <div className="experience-heading">
        <div className="experience-heading-title">
          <div>{positionTitle}</div>
          <div>{`${companyName} | ${location}`}</div>
        </div>

        <div className="experience-heading-dates">
          <div>{`${startYear}/${startMonth} - ${endYear}/${endMonth}`}</div>
        </div>
      </div>
      <ul>
        {filteredJobPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
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
        </form>
      )}
    </div>
  );
}
export function JobList({ projects, setProjects }) {
  function handleClearProject(projectId) {
    const filteredProjects = projects.filter((proj) => proj.id !== projectId);
    setProjects(filteredProjects);
  }
  return (
    <div>
      {projects.map((project) => (
        <Job
          key={project.id}
          project={project}
          handleClearProject={handleClearProject}
        />
      ))}
    </div>
  );
}
export function Job({ project, handleClearProject }) {
  const [isSeen, setIsSeen] = useState(true);
  const { id, companyName } = project;
  function toggleSeen() {
    setIsSeen((seen) => !seen);
  }
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

function Education() {
  const [isModuleOpened, setIsModuleOpened] = useState(false);

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
