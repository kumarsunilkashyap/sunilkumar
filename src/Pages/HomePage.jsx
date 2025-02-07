import React from "react";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <div id="home" className="flex flex-col min-h-screen bg-gray-100">
      <main className="container flex px-4 py-15 md:py-20 mx-auto">
        <section className="flex flex-col justify-around   md:flex-row">
          <div className="w-full p-6 text-center md:w-1/2 md:text-left">
            <h2 className="mb-4 text-3xl font-bold">Welcome to My Portfolio</h2>
            <p className="mb-4 leading-7">
              I am a passionate web developer in creating dynamic and responsive
              websites and create a dashboard in Microsoft Excel and Power BI.
              Explore my projects and connect with me on social media.
            </p>

            <NavLink
              to="project"
              className="px-4 py-2 text-white transition duration-300 ease-in-out transform bg-blue-500 rounded hover:bg-blue-700 hover:scale-105"
            >
              View Projects
            </NavLink>
            <NavLink
              to="gdgdfgd"
              className=" ml-5 px-4 py-2 text-white transition duration-300 ease-in-out transform bg-blue-500 rounded hover:bg-blue-700 hover:scale-105"
            >
              My Resume
            </NavLink>
          </div>
          <div className="w-full p-6 text-center md:w-full md:text-right">
            <img
              src="HomePagePhoto.png"
              alt="Profile"
              className="h-auto mx-auto rounded shadow-lg md:w-auto"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
