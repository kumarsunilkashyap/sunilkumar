import React from "react";

const skills = [
  { name: "Advanced Excel", level: "Advanced" },
  { name: "Power BI", level: "Intermediate" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "CSS", level: "Intermediate" },
  { name: "HTML", level: "Intermediate" },
];

const Skill = () => {
  return (
    <div className="min-h-screen p-10 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">My Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li
            key={index}
            className="flex justify-between items-center hover:bg-slate-400 transition-all duration-300 p-4 bg-white rounded-lg shadow-sm mb-2"
          >
            <span className="text-lg font-bold">{skill.name}</span>
            <span className="text-sm text-gray-600">{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
