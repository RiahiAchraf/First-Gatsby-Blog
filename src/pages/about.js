import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const About = () => {
  return (
    <Layout>
      <h1>About</h1>
      <p>This is my About Page</p>
      <Link to="/">&rarr; Back to home</Link>
    </Layout>
  );
};

export default About;
