import { JobResume } from "./JobResume";

export function Resume({
  projects,
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
        {projects.map((project) => (
          <JobResume key={project.id} project={project} />
        ))}
      </div>
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
