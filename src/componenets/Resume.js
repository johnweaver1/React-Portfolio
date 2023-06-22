import React from "react";
import "../styles/resume.css";
import resume from "../images/JW-Resume-2023.pdf";

export default function Resume() {
  return (
<div>
    <div id="resume"></div>

    <section id="resumeContainer">
      <div className="container">
        <h2 id="resTitle">Resume</h2>
        <div className="container mt-4">
     <a target="_blank"
            rel="noopener noreferrer" href={resume} download="John Weaver's Resume">
     <button className="btn btn-outline-dark">Download Resume</button>
    </a>   
</div>



        
      </div>


     

    </section>

    </div>
  );
}
