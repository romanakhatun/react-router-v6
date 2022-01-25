import React from "react";

const About = () => {
  return (
    <div className="page about">
      <img src="/assets/picture.png" alt="pic" />
      <br />
      <p>
        My name is Romana Khatun. I am 17 years old. I like programming and
        building web applications
      </p>
      <p>
        I work with the following technologies:{" "}
        <strong>React.js, Next.js, Node.js, TypeScript, TailwindCSS</strong>
      </p>
      <br />
      <div className="socialIcon">
        <a
          href="http://github.com/romanakhatun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <span>,</span>
        <a
          href="https://www.linkedin.com/in/romanakhatun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default About;
