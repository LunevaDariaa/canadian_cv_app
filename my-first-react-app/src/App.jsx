import { useState } from "react";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FormSidebar } from "./FormSidebar";
import { Resume } from "./Resume";

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

export default function App() {
  // Personal Info
  const [fullName, setFullName] = useState("John Doe");
  const [city, setCity] = useState("Toronto");
  const [province, setProvince] = useState("ON");
  const [phoneNum, setPhoneNum] = useState("+1");
  const [mail, setMail] = useState("xxx.xxxx@gmail.com");
  const [summary, setSummary] = useState(
    "Dynamic and motivated individual seeking a challenging position where I can utilize my skills in problem-solving, communication, and teamwork to contribute to the success of a forward-thinking organization."
  );
  // Experience
  const [projects, setProjects] = useState([
    {
      companyName: "XYZ Corporation",
      endtDateExperience: "2022-10-01",
      id: 1713811769483,
      jobDescription:
        "Provided exceptional customer service to clients via phone, email, and in-person interactions. \nResolved customer inquiries and complaints promptly and efficiently, maintaining a high level of satisfaction \nCollaborated with cross-functional teams to streamline processes and improve customer experience \nAssisted in training new customer service representatives, sharing best practices and company policies",
      location: "Toronto",
      positionTitle: "Manager",
      startDateExperience: "2024-01-27",
    },
  ]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [startDateExperience, setStartDateExperience] = useState("");
  const [endtDateExperience, setEndDateExperience] = useState("");
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  //Education
  const [schools, setSchools] = useState([
    {
      degree: "Bachelor of Science in Business Administration",
      endDateEducation: "2019-09-10",
      id: 1713811943301,
      isSeen: true,
      schoolLocation: " Anytown, USA",
      schoolName: "Anytown University",
      startDateEducation: "2013-09-01",
    },
  ]);
  const [filteredSchools, setFilteredSchools] = useState([]);
  const [schoolName, setSchool] = useState("Ryazan State Univercity");
  const [degree, setDegree] = useState("Master's degree");
  const [startDateEducation, setStartDateEducation] = useState("2015-09-01");
  const [endDateEducation, setEndDateEducation] = useState("2019-09-10");
  const [schoolLocation, setSchoolLocation] = useState("Russia, Ryazan");

  //Skills
  const [skills, setSkills] = useState([
    "Proficient in Microsoft Office Suite",
    "Excellent communication skills",
    "Strong analytical and problem-solving abilities",
    "Team player with demonstrated leadership qualities",
    " Adaptability and willingness to learn new skills",
    "Fluent in English",
  ]);

  function clearAll() {
    setFullName("");
    setCity("");
    setProvince("");
    setPhoneNum("");
    setMail("");
    setSummary("");
    setProjects([]);
    setFilteredJobs([]);
    setCompanyName("");
    setPositionTitle("");
    setStartDateExperience("");
    setEndDateExperience("");
    setLocation("");
    setJobDescription("");
    setSchools([]);
    setFilteredSchools([]);
    setSchool("");
    setDegree("");
    setStartDateEducation("");
    setEndDateEducation("");
    setSchoolLocation("");
    setSkills([]);
  }

  return (
    <div className="app">
      <FormSidebar
        // header
        clearAll={clearAll}
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
