import { Skill } from "./Skill";

export function SkillList({ skills, onSetSkills }) {
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
