import React from "react";
import { useParams } from "react-router-dom";
import "tailwindcss/tailwind.css";

const Resume = () => {
  const { resume } = useParams();
  return (
    <div className="p-10 max-auto pb-16 flex flex-col font-sans bg-gray-200 shadow-lg rounded-lg">
      {}
      <header className="text-center mb-5 leading-relaxed">
        <h1 className="text-4xl font-bold hover:text-blue-500 transition duration-300">
          Sunil Kumar Kashyap
        </h1>
        <p>
          Email:{" "}
          <a
            href="mailto:john.doe@example.com"
            className="text-blue-500 hover:underline"
          >
            john.doe@example.com
          </a>{" "}
          | Phone:{" "}
          <a href="tel:+1234567890" className="text-blue-500 hover:underline">
            (123) 456-7890
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/johndoe"
            className="text-blue-500 hover:underline"
          >
            linkedin.com/in/johndoe
          </a>{" "}
          | GitHub:{" "}
          <a
            href="https://github.com/johndoe"
            className="text-blue-500 hover:underline"
          >
            github.com/johndoe
          </a>
        </p>
      </header>

      <section className="leading-7">
        <h2 className="text-xl font-bold mb-2">Professional Summary</h2>
        <p className="mb-4">
          I am a passionate web developer with a strong focus on creating
          dynamic and responsive websites, and intuitive dashboards using
          Microsoft Excel and Power BI. With a keen eye for detail and a
          commitment to excellence, I bring innovative solutions to the table,
          ensuring that my projects are not only visually appealing but also
          highly functional. Explore my diverse portfolio of projects and
          connect with me on social media to stay updated on my latest work and
          insights.
        </p>
      </section>

      <section className="leading-7">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="hover:text-blue-500 transition duration-300">
            JavaScript, React, Node.js
          </li>
          <li className="hover:text-blue-500 transition duration-300">
            HTML, CSS, TAILWIND CSS
          </li>

          <li className="hover:text-blue-500 transition duration-300">
            Git, GitHub,
          </li>
        </ul>
      </section>

      <section className="leading-7">
        <h2 className="text-xl font-bold mb-2">Experience</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold hover:text-blue-500 transition duration-300">
            Software Engineer
          </h3>
          <p>XYZ Company | Jan 2020 - Present</p>
          <ul className="list-disc list-inside">
            <li className="hover:text-blue-500 transition duration-300">
              Developed and maintained web applications using React and Node.js.
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Collaborated with cross-functional teams to define, design, and
              ship new features.
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Optimized applications for maximum speed and scalability.
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold hover:text-blue-500 transition duration-300">
            Junior Developer
          </h3>
          <p>ABC Company | Jun 2018 - Dec 2019</p>
          <ul className="list-disc list-inside">
            <li className="hover:text-blue-500 transition duration-300">
              Assisted in the development of web applications using JavaScript
              and HTML/CSS.
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Participated in code reviews and contributed to team knowledge
              sharing.
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Worked on bug fixing and improving application performance.
            </li>
          </ul>
        </div>
      </section>

      <section className="leading-7">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        <p>Bachelor of Science in Computer Science</p>
        <p>University of Somewhere | Graduated May 2018</p>
      </section>
    </div>
  );
};

export default Resume;
