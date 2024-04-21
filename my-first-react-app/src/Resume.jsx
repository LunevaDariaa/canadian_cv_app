import { JobResume } from "./JobResume";

export function Resume({
  projects,
  filteredJobs,
  schools,
  filteredSchools,
  fullName,
  city,
  province,
  phoneNum,
  mail,
  summary,
  skills,
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
      <div className="skills_resume">
        <SkillsResume skills={skills} />
      </div>
      <div className="experience">
        {!(projects.length === 0) && <h5>PROFESSIONAL EXPERIENCE</h5>}
        {projects.map(
          (project) =>
            !filteredJobs.some(
              (filteredJob) => filteredJob.id === project.id
            ) && <JobResume key={project.id} project={project} />
        )}
      </div>
      <div className="education">
        {!(schools.length === 0) && <h5>EDUCATION</h5>}
        {schools.map(
          (school) =>
            !filteredSchools.some(
              (filteredSchool) => filteredSchool.id === school.id
            ) && <SchoolResume key={school.id} school={school} />
        )}
      </div>
    </div>
  );
}

function SchoolResume({ school }) {
  const {
    degree,
    startDateEducation,
    endDateEducation,
    schoolLocation,
    schoolName,
  } = school;

  const startYear = new Date(startDateEducation).getFullYear();
  const startMonth = new Date(startDateEducation).getMonth();
  const endYear = new Date(endDateEducation).getFullYear();
  const endMonth = new Date(endDateEducation).getMonth();

  return (
    <div className="education">
      <div className="main-info-education-resume">
        <div>{degree}</div>
        <div className="heading-dates-education-resume">{`${startYear}/${startMonth} - ${endYear}/${endMonth}`}</div>
      </div>
      <div>{`${schoolName} , ${schoolLocation}`}</div>
    </div>
  );
}

function SkillsResume({ skills }) {
  return (
    <>
      <h5>SKILLS</h5>
      <div className="skills-list-resume">
        {skills.map((skill) => (
          <div className="skill-resume">{skill}</div>
        ))}
      </div>
    </>
  );
}
