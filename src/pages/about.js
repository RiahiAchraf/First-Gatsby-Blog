import React from "react";
import { Link } from "gatsby";

const About = () => {
  return (
    <>
      <h2>It's About Page</h2>
      <p>This is my About Page</p>
      <Link to="/">&rarr; Back to Home page</Link>
    </>
  );
};

export default About;
