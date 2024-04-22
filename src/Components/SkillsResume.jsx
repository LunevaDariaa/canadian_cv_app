export function SkillsResume({ skills }) {
  return (
    <>
      <div className="skills-list-resume">
        {skills.map((skill) => (
          <div className="skill-resume">{skill}</div>
        ))}
      </div>
    </>
  );
}
