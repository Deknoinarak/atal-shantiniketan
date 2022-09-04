import React from "react";
import NitiAimLogoBlack from "../assets/img/niti-aim-logo-black.png";
import NitiAimLogoWhite from "../assets/img/niti-aim-logo-white.png";
import ShantiniketanLogo from "../assets/img/shantiniketan-logo.png";
// import ShantiniketanLogoWhite from "../assets/img/shantiniketan-logo-white.png";

export const About = () => {
  return (
    <div className="container sm:mx-auto py-5 px-5">
      <h1 className="text-4xl font-bold mt-10">About Us</h1>
      <div className="grid sm:grid-cols-2 my-5 gap-5">
        <div className="text-sm sm:text-base">
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
      <hr/>
      <div className="grid sm:grid-cols-4 my-5 gap-5">
        <a href="http://shantiniketankop.edu.in/" target="_blank">
          <img src={ShantiniketanLogo} />
          {/* <img className="dark:block hidden" src={ShantiniketanLogoWhite} /> */}
        </a>
        <div className="text-sm sm:text-base col-span-3">
          <p>
            Our school stands for learning through explorations,
            experimentation, and experience. Shantiniketan is one among those,
            to proudly share a common vision across the nation to cultivate
            innovators in India by setting up of the Atal Tinkering Lab (ATL)
            aims to foster scientific temper, innovations, and creativity
            amongst the young learners of today. Its indeed a proud moment for
            the shantiniketan family to inaugurate ATL lab on our campus with
            the auspicious hands of our Honourable chief guest Dr. Bharat
            Kotkar. On January 26, 2022, We got a chance to witness the moment.
            It is for the grades 4-12.
          </p>
          <br />
          <p>
            We believe in STEAM - Science, Technology, Engineering, Arts, Maths.
            We believe that in ATAL, just teaching will not help the students to
            learn, So we've created a new term called Start-ups. You can create
            a Start-up and if it's good enough, We can allow you to work on the
            project! This will help the kid to learn and just understand better.
          </p>
        </div>
      </div>
    </div>
  );
};
