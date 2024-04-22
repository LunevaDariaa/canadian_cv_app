import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Header } from "./Header";
import { Education } from "./Education";
import { PersonalInfo } from "./PersonalInfo";

export function FormSidebar({
  clearAll,
  projects,
  setProjects,
  filteredJobs,
  onSetFilteredJobs,
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
  schools,
  onSetSchools,
  filteredSchools,
  onSetFilteredSchools,
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
  skills,
  onSetSkills,
}) {
  return (
    <div className="form-sidebar">
      <Header clearAll={clearAll} />
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
      <Skills skills={skills} onSetSkills={onSetSkills} />
      <Experience
        projects={projects}
        setProjects={setProjects}
        filteredJobs={filteredJobs}
        onSetFilteredJobs={onSetFilteredJobs}
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
        schools={schools}
        onSetSchools={onSetSchools}
        filteredSchools={filteredSchools}
        onSetFilteredSchools={onSetFilteredSchools}
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
