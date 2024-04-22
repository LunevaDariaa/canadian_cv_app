import { handleDownloadResume } from "../handleDownloadResume";
import { Button } from "./Button";

export function Header({ clearAll }) {
  return (
    <div className="header">
      <h1>Content</h1>
      <Button onClick={handleDownloadResume}>Download PDF</Button>
      <Button
        onClick={clearAll}
        style={{ borderRadius: "10px", backgroundColor: "#f8afa6" }}
      >
        Clear
      </Button>
    </div>
  );
}
