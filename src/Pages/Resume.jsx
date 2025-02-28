import React from 'react';
import {useParams} from 'react-router-dom'
const Resume = () => {
  const {resume} = useParams()
  return (
    <div className="p-5 mt-20 font-sans bg-gray-200"> {resume}
      <header className="text-center mb-5">
        <h1 className="text-3xl font-bold">John Doe</h1>
        <p>Email: john.doe@example.com | Phone: (123) 456-7890</p>
        <p>LinkedIn: linkedin.com/in/johndoe | GitHub: github.com/johndoe</p>
      </header>
      
      <section>
        <h2 className="text-2xl font-semibold">Professional Summary</h2>
        <p>
          Experienced software engineer with a strong background in developing scalable web applications and working across the full stack. Proficient in JavaScript, React, Node.js, and other modern web technologies.
        </p>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold">Skills</h2>
        <ul className="list-disc list-inside">
          <li>JavaScript, React, Node.js</li>
          <li>HTML, CSS, SASS</li>
          <li>RESTful APIs, GraphQL</li>
          <li>Git, GitHub, CI/CD</li>
          <li>Agile methodologies</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <div>
          <h3 className="text-xl font-medium">Software Engineer</h3>
          <p>XYZ Company | Jan 2020 - Present</p>
          <ul className="list-disc list-inside">
            <li>Developed and maintained web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
            <li>Optimized applications for maximum speed and scalability.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">Junior Developer</h3>
          <p>ABC Company | Jun 2018 - Dec 2019</p>
          <ul className="list-disc list-inside">
            <li>Assisted in the development of web applications using JavaScript and HTML/CSS.</li>
            <li>Participated in code reviews and contributed to team knowledge sharing.</li>
            <li>Worked on bug fixing and improving application performance.</li>
          </ul>
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold">Education</h2>
        <p>Bachelor of Science in Computer Science</p>
        <p>University of Somewhere | Graduated May 2018</p>
      </section>
      
      <footer className="text-center mt-5">
        <p>© 2023 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Resume;