export function JobResume({ project }) {
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
