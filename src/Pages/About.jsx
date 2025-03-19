import React from "react";
import HomePagePhoto from "../assets/HomePagePhoto.png";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col min-h-screen bg-gradient-to-r from-gray-500 to-purple-400 text-white w-full p-6 overflow-auto"
    >
      <main className="container flex flex-col items-center justify-center px-4 py-10 mx-auto md:flex-row md:py-20">
        <section className="flex flex-col items-center justify-center md:flex-row">
          {/* Image Section */}
          <div className="w-full p-2 md:w-1/4">
            <img
              src={HomePagePhoto}
              alt="Profile"
              className="h-auto mx-auto rounded-lg shadow-lg md:max-w-xs"
            />
          </div>

          {/* Text Section */}
          <div className="w-full p-4 text-center md:w-3/4 md:text-left">
            <h2 className="mb-6 text-3xl font-extrabold md:text-4xl">
              About Me
            </h2>
            <p className="mb-4 text-lg leading-7 text-gray-200 md:leading-8">
              My name is Sunil Kumar Kashyap, and I hold a Bachelor's degree
              from Kanpur University, completed in 2016. I have further enhanced
              my skills with certifications in CCC and O Level from NIELIT.
              Additionally, I have completed a Full Stack Web Development
              certification from PW Skill. I am currently residing in Uttar
              Pradesh. Throughout my academic and professional journey, I have
              developed a strong foundation in Microsoft Excel and Power BI,
              which has equipped me with the skills and knowledge needed to
              excel in this domain. I am eager to bring my expertise and
              enthusiasm to your esteemed organization.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
