import { useState } from "react";

function Button() {
  return <button className="bn3637 bn37">Clear</button>;
}

export default function App() {
  return (
    <div className="app">
      <FormSidebar />
      <Resume />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Content</h1>
      <Button />
    </div>
  );
}

function FormSidebar() {
  return (
    <div className="form-sidebar">
      <Header />
    </div>
  );
}

function Resume() {
  return <div className="resume"></div>;
}

function PersonalInfo() {
  return <div></div>;
}

function Experience() {
  return <div></div>;
}

function Education() {
  return <div></div>;
}

function Skills() {
  return <div></div>;
}
