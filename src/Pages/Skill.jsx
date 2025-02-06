import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "GitHub",
  "Advanced Excel",
  "Power Bi",
  "Tally Prime",
];

const Skill = () => {
  return (
    <>
      <div id="skill" className="min-h-screen p-5 bg-gray-100">
        <h2 className="mb-8 text-3xl font-bold text-center">My Skill</h2>
        <ul className="grid md:grid-cols-4 grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="p-3 text-center  bg-white rounded-lg  hover:bg-gray-200 shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Skill;
