// Skills.js
import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Power Bi",
  "Excel Dashboard",
  "Python",
];

const Skills = () => {
  return (
    <div className="py-10 min-h-screen bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <ul className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="px-4 py-2 text-2xl bg-white shadow rounded transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-100 hover:shadow-lg"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
