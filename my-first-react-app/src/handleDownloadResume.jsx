import { jsPDF } from "jspdf";

export function handleDownloadResume() {
  const doc = new jsPDF("portrait", "pt", "a4");

  doc.html(document.querySelector("#resume-pdf")).then(() => {
    // Save the PDF file
    doc.save("resume.pdf");
  });
}
