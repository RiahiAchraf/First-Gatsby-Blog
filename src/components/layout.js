import React from "react";
import { Global, css } from "@emotion/react";
import { Helmet } from "react-helmet";

import Header from "./header";
import UseSiteMetadata from "../hooks/use-sitemetadata";

const Layout = ({ children }) => {
  const { title, description } = UseSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          * + * {
            margin-top: 1rem;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: --apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 18px;
            line-height: 1.4;

            /* Remove Margin Top For Gatsby Main Div*/
            > div {
              margin-top: 0;
            }
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header />
      <main
        css={css`
          width: 550px;
          max-width: 90vw;
          margin: 2rem auto 4rem;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
