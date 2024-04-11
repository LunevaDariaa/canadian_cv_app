import { useState } from "react";

const provinces = [
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

function Button({ children }) {
  return <button className="bn3637 bn37">{children}</button>;
}

export default function App() {
  const [fullName, setFullName] = useState("Daria Luneva");
  const [city, setCity] = useState("Toronto");
  const [province, setProvince] = useState("ON");

  return (
    <div className="app">
      <FormSidebar
        fullName={fullName}
        onSetFullName={setFullName}
        city={city}
        onSetCity={setCity}
        province={province}
        onSetProvince={setProvince}
      />
      <Resume fullName={fullName} city={city} province={province} />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Content</h1>
      <Button>Clear</Button>
    </div>
  );
}

function FormSidebar({
  fullName,
  onSetFullName,
  city,
  onSetCity,
  province,
  onSetProvince,
}) {
  return (
    <div className="form-sidebar">
      <Header />
      <PersonalInfo
        fullName={fullName}
        onSetFullName={onSetFullName}
        city={city}
        onSetCity={onSetCity}
        province={province}
        onSetProvince={onSetProvince}
      />
      <Experience />
      <Education />
    </div>
  );
}

function Resume({ fullName, city, province }) {
  return (
    <div className="resume">
      <div className="personal-info-display">
        <h2>{fullName}</h2>
        <p>
          {city} | {province}
        </p>
      </div>
    </div>
  );
}

function PersonalInfo({
  fullName,
  onSetFullName,
  city,
  onSetCity,
  province,
  onSetProvince,
}) {
  const [isModuleOpened, setIsModuleOpened] = useState(true);

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }
  console.log(fullName);
  return (
    <div className="module">
      <div className="module-info">
        <h1>Personal Information</h1>
        <button onClick={handleOpenModule}>
          {!isModuleOpened ? "+" : "-"}
        </button>
      </div>
      {isModuleOpened && (
        <form>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => onSetFullName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => onSetCity(e.target.value)}
            required
          />
          <select
            value={province}
            onClick={(e) => onSetProvince(e.target.value)}
          >
            {provinces.map((prov) => (
              <option>{prov}</option>
            ))}
          </select>
          <input type="number" placeholder="Phone Number" required />
          <input type="mail" placeholder="Mail" required />
        </form>
      )}
    </div>
  );
}

function Experience() {
  const [isModuleOpened, setIsModuleOpened] = useState(true);

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }
  return (
    <div className="module">
      <div className="module-info">
        <h1>💼 Experience</h1>
        <button onClick={handleOpenModule}>
          {!isModuleOpened ? "+" : "-"}
        </button>
      </div>
      {isModuleOpened && (
        <form>
          <input type="text" placeholder="Company name" required />
          <input type="text" placeholder="Position Title" required />
          <input type="date" placeholder="Start Date" required />
          <input type="date" placeholder="End Date" />
          <input type="text" placeholder="Location" required />
          <textarea
            type="text"
            minLength="20"
            placeholder="Description.."
          ></textarea>
        </form>
      )}
    </div>
  );
}

function Education() {
  const [isModuleOpened, setIsModuleOpened] = useState(true);

  function handleOpenModule() {
    setIsModuleOpened((open) => !open);
  }

  return (
    <div className="module">
      <div className="module-info">
        <h1>👩‍🎓 Education</h1>
        <button onClick={handleOpenModule}>
          {!isModuleOpened ? "+" : "-"}
        </button>
      </div>
      {isModuleOpened && (
        <form>
          <input type="text" placeholder="School" required />
          <input type="text" placeholder="Degree" required />
          <input type="date" placeholder="Start Date" required />
          <input type="date" placeholder="End Date" />
          <input type="text" placeholder="Location" required />
        </form>
      )}
    </div>
  );
}

function Skills() {
  return <div></div>;
}
