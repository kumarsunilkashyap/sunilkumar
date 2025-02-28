import React from "react";
import { NavLink } from "react-router-dom";
import HomePagePhoto from "../assets/HomePagePhoto.png";
const HomePage = () => {
  return (
    <div
      id="home"
      className="flex flex-col min-h-screen bg-gradient-to-r from-gray-500 to-purple-400 text-white w-full p-6 mx-auto"
    > 
      <main className="container flex px-4 py-15 md:py-20 mx-auto">
        <section className="flex flex-col justify-around md:flex-row">
          <div className="w-full p-6 text-center md:w-1/2 md:text-left">
            <h2 className= "mb-4 text-4xl font-extrabold">
              Welcome to My Portfolio
            </h2>
            <p className = "mb-6 leading-8 text-lg">
              I am a passionate web developer creating dynamic and responsive
              websites, and dashboards in Microsoft Excel and Power BI. Explore
              my projects and connect with me on social media.
            </p>
            <div className="flex justify-center md:justify-start">
              <NavLink
                to="project"
                className="px-6 py-3 mr-4 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-700 rounded-full shadow-lg hover:bg-blue-900 hover:scale-105"
              >
                View Projects
              </NavLink>
              <NavLink
                to="resume"
                className="px-6 py-3 text-lg font-semibold text-white transition duration-300 ease-in-out transform bg-blue-700 rounded-full shadow-lg hover:bg-blue-900 hover:scale-105"
              >
                My Resume
              </NavLink>
            </div>
          </div>
          <div className="w-full p-6 text-center md:w-1/2 md:text-right">
            <img
              src={HomePagePhoto}
              alt="Profile"
              className="h-auto mx-auto rounded-md shadow-2xl md:w-auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
