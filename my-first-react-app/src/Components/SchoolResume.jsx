export function SchoolResume({ school }) {
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
