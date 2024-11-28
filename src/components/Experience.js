import React from "react";
import AboutImg from "../assets/ifslogo.png";

const Experience = () => {
  const config = {
    line1:
      " Developed and maintained the IFS CRM Cloud Application (23R2, 24R1, and 24R2 releases), specializing in Marble, ReactJS, and PL/SQL.",
    line2:
      " Designed and implemented Test Automated Runs (TAR), unit tests, and UI automated tests using Katalon Studio to streamline the software development lifecycle.",
    line3:
      " Utilized Jira, Bitbucket, Jenkins, Grafana, Git, VSCode, IFS Developer Studio, PL/SQL Developer, and SourceTree for version control and project management.",
    line4:
      "Developed and implemented automated test scripts using Katalon Studio for over 15 key queries achieved a reduction of manual testing time by approximately 25 hours per month while maintainingrigorous quality standards throughout to streamline the software development lifecycle",
  };

  return (
    <section
      className="flex flex-col md:flex-row bg-black px-50 p-5 gap-60 "
      id="experince"
    >
      <div className="flex flex-col items-center gap-2 px-10 py-5 text-white">
        <h1 className="text-4xl border-b-4 border-primary mb-5 w-[300px] font-bold">
          Work Experience
        </h1>
        <img className="w-[200px] h-auto object-contain" src={AboutImg} />
      </div>

      <div className="md:w-1/2 px-6 flex items-center justify-center">
        <div className="flex flex-col text-white space-y-8">
          <p>{config.line1}</p>
          <p>{config.line2}</p>
          <p>{config.line3}</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
