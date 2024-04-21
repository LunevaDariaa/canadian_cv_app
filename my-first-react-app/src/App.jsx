import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faPlus,
  faCheck,
  faMinus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FormSidebar } from "./FormSidebar";
import { Resume } from "./Resume";
import { handleDownloadResume } from "./handleDownloadResume";

export const provinces = [
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
  const [summary, setSummary] = useState(
    "Results-driven Computer Programming student adept in both frontend and backend development. Leveraging a background in 3D modeling for visually captivating web experiences. Known for collaborative problem-solving within teams. Dedicated to staying updated with emerging web development trends."
  );
  // Experience
  const [projects, setProjects] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [companyName, setCompanyName] = useState("YWT Comp.");
  const [positionTitle, setPositionTitle] = useState("Manager");
  const [startDateExperience, setStartDateExperience] = useState("2022-01-01");
  const [endtDateExperience, setEndDateExperience] = useState("2022-10-01");
  const [location, setLocation] = useState("Toronto");
  const [jobDescription, setJobDescription] = useState(
    ` Contributed artistically and technically to the realization of engaging 3D content for Online Digital Museum MalovMetaArt, creation totally accurate replication of artworks and attention to detail.
    Worked closely with multidisciplinary teams to conceptualize, create, and iterate on 3D assets, ensuring they aligned with project goals and maintained a consistent visual identity.
    Leveraged creativity and adaptability to meet project demands, producing high-quality 3D models and animations that added depth and dimension to the final products.`
  );
  //Education
  const [schools, setSchools] = useState([]);
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [schoolName, setSchool] = useState("Ryazan State Univercity");
  const [degree, setDegree] = useState("Master's degree");
  const [startDateEducation, setStartDateEducation] = useState("2015-09-01");
  const [endDateEducation, setEndDateEducation] = useState("2015-09-01");
  const [schoolLocation, setSchoolLocation] = useState("Russia, Ryazan");

  //Skills
  const [skills, setSkills] = useState([
    "JavaScript",
    "Adaptability and flexibility",
    "REST",
    "Logical reasoning",
    "SQL",
    "CSS, HTML",
    "React",
    "Git and Github",
  ]);

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
        summary={summary}
        onSetSummary={setSummary}
        // experience
        projects={projects}
        setProjects={setProjects}
        filteredJobs={filteredJobs}
        onSetFilteredJobs={setFilteredJobs}
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
        //Education
        schools={schools}
        onSetSchools={setSchools}
        filteredSchools={filteredSchools}
        onSetFilteredSchools={setFilteredSchools}
        schoolName={schoolName}
        onSetSchool={setSchool}
        degree={degree}
        onSetDegree={setDegree}
        startDateEducation={startDateEducation}
        onSetStartDateEducation={setStartDateEducation}
        endDateEducation={endDateEducation}
        onSetEndDateEducation={setEndDateEducation}
        schoolLocation={schoolLocation}
        onSetSchoolLocation={setSchoolLocation}
        //Skills
        skills={skills}
        onSetSkills={setSkills}
      />
      <Resume
        projects={projects}
        filteredJobs={filteredJobs}
        schools={schools}
        filteredSchools={filteredSchools}
        fullName={fullName}
        city={city}
        province={province}
        phoneNum={phoneNum}
        mail={mail}
        summary={summary}
        onSetSummary={setSummary}
        skills={skills}
      />
    </div>
  );
}

export function Header() {
  return (
    <div className="header">
      <h1>Content</h1>
      <Button onClick={handleDownloadResume}>Download PDF</Button>
      <Button style={{ borderRadius: "10px", backgroundColor: "#f8afa6" }}>
        Clear
      </Button>
    </div>
  );
}

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

function SkillList({ skills, onSetSkills }) {
  function removeSkill(skillToRemove) {
    const filteredArr = skills.filter((s) => s !== skillToRemove);
    onSetSkills(filteredArr);
  }
  return (
    <div className="skills">
      {skills.map((s, i) => (
        <Skill removeSkill={removeSkill} key={i} skill={s} />
      ))}
    </div>
  );
}

function Skill({ skill, removeSkill }) {
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
