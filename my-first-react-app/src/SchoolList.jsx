import { Job } from "./App";

export function SchoolList({ schools, setSchools }) {
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
