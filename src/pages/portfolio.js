import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

const portfolioLinkStyle = css({
  textDecoration: `none`,
  color: `#ccc`,
  "&:hover": {
    color: `#fff`,
    textDecoration: `none`
  },
  display: `flex`,
  flexFlow: `column`,
  alignContent: `space-around`,
  justifyContent: `center`,
  height: `100%`,
  width: `100%`,
  border: `1px solid #e3e3e3`
});

const flexContainer = css({
  display: `flex`,
  flexFlow: `row wrap`,
  width: `100%`,
  justifyContent: `space-around`,
});

const flexChild = css({
  margin: `5px`,
  padding: `5px`,
  flexGrow: 1,
  background: `#222`,
  height: 175,
  minWidth: 200,
  textAlign: `center`,
  "&:hover": {backgroundColor: `#e5e5e5`},
});

const flexChildText = css({
  textDecoration: `none`,
  color: `#4b4b4b`,
  "&:hover": {
    color: `#6e6e6e`,
    textDecoration: `none`,
  },
})

export default function PortfolioIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Portfolio</h1>
      <Helmet title={`Portfolio Projects: Russell Schmidt`} />
      <div className={flexContainer}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <div className={flexChild} key={post.id} css={{ background: `url("${post.frontmatter.image}")` }}>
                <Link className={portfolioLinkStyle}
                to={post.frontmatter.path}>
                  <h3 className={flexChildText}>{post.frontmatter.title}</h3>
                  <h4 className={flexChildText}>{post.frontmatter.date}</h4>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export const pageQuery = graphql`
  query PortfolioQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/portfolio/.*\\.md$/"}}
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            type
            image
          }
        }
      }
    }
  }
`;
