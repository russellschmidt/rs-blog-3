import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import g from 'glamorous';
import { css } from 'glamor';

const showUp = css.keyframes('showup', {
  '0%': {position: 'relative', opacity:'0', transform: 'rotate(2880deg)'},
  '70%': {position: 'relative', opacity:'1', transform: 'rotate(360deg)' },
  '90%': {position: 'relative', opacity:'1', transform: 'rotate(0deg)' },
  '100%': {position: 'relative', opacity:'1', transform: 'rotate(0deg)'},
})

const slideIn = css.keyframes('slidein', {
  '0%': { marginLeft:'-400px' },
  '20%': { marginLeft:'-400px' },
  '90%': { marginLeft:'0' },
  '100%': { marginLeft:'0' },
})

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
  minWidth: 280,
  textAlign: 'left',
  border: '1px solid #e5e5e5',
  '&:hover': {
    boxShadow: `0 2px 4px #C2ABCE`,
    cursor: 'pointer',
  },
});

const flexChildText = css({
  color: '#453045',
  fontSize: '1rem',
  width: '100%',
  height: '100%',
  textDecoration: 'none',
  paddingLeft: '0.5rem',
  margin: '0 auto',
  overflow: 'hidden',
  '&:hover': {
    textDecoration: 'none',
    color: '#96879E',
  },
});

const flexChildTextFirstLetter = css({
  display: 'inline-block',
  animation: `${showUp} 7s 1 ease-in-out`,
})

const flexChildTextRest = css({
  animation: `${slideIn} 7s 1 ease-out`,
})

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
                  <h3 className={flexChildText}>
                    <span className={flexChildTextFirstLetter}>{post.frontmatter.title.charAt(0)}</span>
                    <span className={flexChildTextRest}>{post.frontmatter.title.substr(1)}</span>
                  </h3>
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
