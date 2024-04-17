import { useState } from "react";
import { jsPDF } from "jspdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  faUserGraduate,
  faUser,
  faEyeSlash,
  faEye,
  faPlus,
  faTrashCan,
  faMinus,
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
  const [summary, setSummary] = useState(
    "Results-driven Computer Programming student adept in both frontend and backend development. Leveraging a background in 3D modeling for visually captivating web experiences. Known for collaborative problem-solving within teams. Dedicated to staying updated with emerging web development trends."
  );
  // Experience
  const [projects, setProjects] = useState([]);
  const [companyName, setCompanyName] = useState("YWT Comp.");
  const [positionTitle, setPositionTitle] = useState("Manager");
  const [startDateExperience, setStartDateExperience] = useState("2022-01-01");
  const [endtDateExperience, setEndDateExperience] = useState("2022-10-01");
  const [location, setLocation] = useState("Toronto");
  const [jobDescription, setJobDescription] = useState(" Created..");
  //Education
  const [schoolName, setSchool] = useState("Ryazan State Univercity");
  const [degree, setDegree] = useState("Master's degree");
  const [startDateEducation, setStartDateEducation] = useState("2015-09-01");
  const [endDateEducation, setEndDateEducation] = useState("2015-09-01");
  const [schoolLocation, setSchoolLocation] = useState("Russia, Ryazan");
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
      />
      <Resume
        projects={projects}
        fullName={fullName}
        city={city}
        province={province}
        phoneNum={phoneNum}
        mail={mail}
        summary={summary}
        onSetSummary={setSummary}
      />
    </div>
  );
}

function Header() {
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
  summary,
  onSetSummary,
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
        summary={summary}
        onSetSummary={onSetSummary}
      />
      <Skills />
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
      <Education
        schoolName={schoolName}
        onSetSchool={onSetSchool}
        degree={degree}
        onSetDegree={onSetDegree}
        startDateEducation={startDateEducation}
        onSetStartDateEducation={onSetStartDateEducation}
        endDateEducation={endDateEducation}
        onSetEndDateEducation={onSetEndDateEducation}
        schoolLocation={schoolLocation}
        onSetSchoolLocation={onSetSchoolLocation}
      />
    </div>
  );
}
// companyName,
// positionTitle,
// startDateExperience,
// endtDateExperience,
// location,
// jobDescription,

function Resume({
  projects,
  fullName,
  city,
  province,
  phoneNum,
  mail,
  summary,
}) {
  return (
    <div className="resume" id="resume-pdf">
      <div className="personal-info-display">
        <h2>{fullName}</h2>
        <p>{`${city}, ${province}   |   ${phoneNum}   |   ${mail}`}</p>
      </div>
      <div className="summary">
        <h5>SUMMARY</h5>
        <div className="text">{summary}</div>
      </div>
      <div className="experience">
        {!(projects.length === 0) && <h5>PROFESSIONAL EXPERIENCE</h5>}
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
function Education({
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

function SchoolList({ schools, setSchools }) {
  function handleClearSchool(schoolId) {
    const filteredSchools = schools.filter((s) => s.id !== schoolId);
    setSchools(filteredSchools);
  }
  return (
    <div>
      {schools.map((school) => (
        <Job
          key={school.id}
          school={school}
          handleClearSchool={handleClearSchool}
        />
      ))}
    </div>
  );
}

function Job({ school, handleClearSchool }) {
  const [isSeen, setIsSeen] = useState(true);
  const { id, schoolName } = school;
  function toggleSeen() {
    setIsSeen((seen) => !seen);
  }
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

function Skills() {
  const [isModuleOpened, setIsModuleOpened] = useState(false);
  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
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
    </div>
  );
}

function handleDownloadResume() {
  const doc = new jsPDF("portrait", "pt", "a4");

  doc.html(document.querySelector("#resume-pdf")).then(() => {
    // Save the PDF file
    doc.save("resume.pdf");
  });
}
