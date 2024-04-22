import { School } from "./School";

export function SchoolList({
  schools,
  setSchools,
  filteredSchools,
  onSetFilteredSchools,
  editSchool,
}) {
  function toggleSeen(schoolId) {
    const school = schools.find((proj) => proj.id === schoolId);

    school.isSeen = !school.isSeen;

    setSchools([...schools]);

    if (school.isSeen) {
      const updatedFilteredSchools = filteredSchools.filter(
        (proj) => proj.id !== schoolId
      );
      onSetFilteredSchools(updatedFilteredSchools);
    } else {
      onSetFilteredSchools([...filteredSchools, school]);
    }
    console.log(filteredSchools);
  }

  function handleClearSchool(schoolId) {
    const filteredSchools = schools.filter((s) => s.id !== schoolId);
    setSchools(filteredSchools);
  }
  return (
    <div>
      {schools.map((school) => (
        <School
          toggleSeen={() => toggleSeen(school.id)}
          key={school.id}
          school={school}
          handleClearSchool={handleClearSchool}
          editSchool={editSchool}
        />
      ))}
    </div>
  );
}
