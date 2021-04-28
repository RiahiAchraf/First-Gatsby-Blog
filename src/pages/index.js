import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <p>Welcome To My Home Page.</p>
      <Link to="/about/">Learn about me &rarr;</Link>
    </Layout>
  );
};

export default Home;
