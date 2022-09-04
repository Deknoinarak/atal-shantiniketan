import React from "react";
import NitiAimLogoBlack from "../assets/img/niti-aim-logo-black.png"
import NitiAimLogoWhite from "../assets/img/niti-aim-logo-white.png"

export const About = () => {
  return (
    <div className="container sm:mx-auto py-5 px-5">
      <h1 className="text-4xl font-bold mt-10">About Us</h1>
      <div className="grid grid-cols-2 mt-5 gap-5">
        <div>
          <p>
            ATL is a workspace where young minds can give shape to their ideas
            through hands on do-it-yourself mode; and learn innovation skills.
            Young children will get a chance to work with tools and equipment to
            understand the concepts of STEM (Science, Technology, Engineering
            and Math). ATL would contain educational and learning 'do it
            yourself' kits and equipment on - science, electronics, robotics,
            open-source microcontroller boards, sensors and 3D printers and
            computers. Other desirable facilities include meeting rooms and
            video conferencing facility.
          </p>
          <br />
          <p>
            In order to foster inventiveness among students, ATL can conduct
            different activities ranging from regional and national level
            competitions, exhibitions, workshops on problem solving, designing
            and fabrication of products, lecture series etc. at periodic
            intervals.
          </p>
        </div>
        <a href="https://aim.gov.in/index.php" target="_blank">
          <img className="dark:hidden block" src={NitiAimLogoBlack} />
          <img className="dark:block hidden" src={NitiAimLogoWhite} />
        </a>
      </div>
    </div>
  );
};
