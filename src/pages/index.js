import React from "react";
import { Link } from "gatsby";

const Home = () => {
  return (
    <>
      <h2>It's Home Page</h2>
      <p>Welcome To My Home Page.</p>
      <Link to="/about/">&rarr; Go To About Page</Link>
    </>
  );
};

export default Home;
