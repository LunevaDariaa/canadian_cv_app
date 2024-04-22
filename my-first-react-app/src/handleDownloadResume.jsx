import { jsPDF } from "jspdf";

export function handleDownloadResume() {
  const doc = new jsPDF("portrait", "pt", "a4");
  const resume = document.querySelector("#resume-pdf");

  // Clone the resume container
  const clonedResume = resume.cloneNode(true);

  // Remove the className attribute from the cloned element
  clonedResume.removeAttribute("class");

  // Append the cloned resume to the document body temporarily
  document.body.appendChild(clonedResume);

  // Generate the PDF
  doc.html(clonedResume).then(() => {
    // Save the PDF file
    doc.save("resume.pdf");

    // Remove the cloned resume from the document body after generating the PDF
    document.body.removeChild(clonedResume);
  });
}
