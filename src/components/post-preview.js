import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

const postPreview = ({ post }) => (
  <article>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <Link to={post.slug}>Read this post &rarr;</Link>
  </article>
);

export default postPreview;
