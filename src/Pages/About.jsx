import React from "react";
import HomePagePhoto from "../assets/HomePagePhoto.png";
const About = () => {
  return (
    <>
      <div
        id="about"
        className="min-h-screen flex flex-col justify-between p-6 bg-gray-100 md:flex-row"
      >
        <div className="p-4 md:w-1/3">
          <img
            src={HomePagePhoto}
            alt="About"
            className="h-96 rounded-lg shadow-lg"
          />
        </div>
        <div className="p-6 md:w-1/2">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="mb-4 leading-8 text-gray-700">
            My name is Sunil Kumar Kashyap, and I hold a Bachelor's degree from
            Kanpur University, completed in 2016. I have further enhanced my
            skills with certifications in CCC and O Level from NIELIT. And also
            enhanced my skill with certifications full stack web development
            from PW Skill. I am currently residing in Uttar Pradesh. Throughout
            my academic and professional journey, I have developed a strong
            foundation in Microsoft Excel, Power BI, which has equipped me with
            the skills and knowledge needed to excel in this domain. I am eager
            to bring my expertise and enthusiasm to your esteemed organization.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
