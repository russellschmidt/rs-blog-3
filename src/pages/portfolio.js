import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import g from 'glamorous';
import { css } from 'glamor';

const portfolioLinkStyle = css({
  textDecoration: 'none',
  height: '100%',
  width: '100%',
  '&:hover': {
    textDecoration: 'none',
  },
});

const flexContainer = css({
  display: 'flex',
  flexFlow: 'row wrap',
  padding: '1rem',
  width: '100%',
  justifyContent: 'space-evenly',
  alignItems: 'flex-start',
  alignContent: 'space-around',
});

const flexChild = css({
  margin: '5px',
  padding: '5px',
  background: '#222',
  height: 175,
  flex: '1 0 30%',
  textAlign: 'left',
  border: '1px solid #e5e5e5',
  '&:hover': {
    boxShadow: `0 2px 4px #4b4b4b`,
    cursor: 'pointer',
  },
});

const flexChildText = css({
  color: '#96879E',
  fontSize: '1rem',
  width: '100%',
  height: '100%',
  textDecoration: 'none',
  paddingLeft: '0.5rem',
  margin: '0 auto',
  '&:hover': {
    textDecoration: 'none',
    color: '#632A7F',
  },
});

const bgMaker = (img) => (img ? `url("${img}") no-repeat` : `content-box radial-gradient(#d5d5d5, #fff)`);

export default function PortfolioIndex({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <h1>Portfolio</h1>
      <Helmet title="Portfolio Projects: Russell Schmidt" />
      <div className={flexContainer}>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, i) => (
              <div 
                className={flexChild} 
                key={i} 
                css={{ background: `${bgMaker(post.frontmatter.image)}` 
              }}>
                <Link className={portfolioLinkStyle}
                to={post.frontmatter.path}>
                  <h3 className={flexChildText}>{post.frontmatter.title}</h3>
                </Link>
              </div>
            ))}
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
