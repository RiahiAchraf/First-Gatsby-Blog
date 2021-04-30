import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import UsePosts from "../hooks//use-post";
import PostPreview from "../components/post-preview";

const Home = () => {
  const posts = UsePosts();

  return (
    <Layout>
      <h1>Home</h1>
      <p>Welcome To My Home Page.</p>
      <Link to="/about/">Learn about me &rarr;</Link>
      <h2>Read my blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Home;
