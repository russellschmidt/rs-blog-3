import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import { rhythm } from "../utils/typography";

let container = css({
  height: `100%`
});

let innerContainer = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `auto`,
  width: `100%`,
  minHeight: `calc(100vh-300px)`,
  justifyContent: `space-evenly`,
  "@media (max-width: 767px)": {
    gridTemplateRows: `40% auto`,
  }
});

let imageContainer = css({
  gridColumn: `span 12`,
  margin: `0 auto`,
  width: `100%`,
  " img ": {
    width: `100%`,
    margin: `0`,
    padding: 0,
  },
  "@media (min-width: 768px)": {
    gridColumn: `span 6`,
  }
});

let articleContainer = css({
  gridColumn: `span 8`,
  "@media (min-width: 768px)": {
    gridColumn: `span 4`,
  }
});

let sidenavContainer = css({
  gridColumn: `span 4`,
  ' h6': {
    fontStyle: `normal`,
    margin: `0 0 0.4rem 0`,
    textTransform: `uppercase`,
    fontSize: rhythm(0.5),
    "@media (max-width: 767px)": {
      fontSize: `0.5rem`,
    }
  },
  ' a': {
    fontSize: rhythm(0.5),
    color: `#555`,
    fontSize: rhythm(0.45),
    "@media (max-width: 767px)": {
      fontSize: `0.4rem`,
    }
  },
  ' ul': {
    listStyleType: `none`,
    margin: `0 0 0.8rem 0`
  },
  ' li': {
    margin: 0,
  },
  "@media (min-width: 768px)": {
    gridColumn: `span 2`,
  }
});

let portraitCarousel = [
  `https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-1.jpg`,
  `https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-2.jpg`,
  `https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-3.jpg`,
  `https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-4.jpg`,
  `https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-5.jpg`
];


export default () => (
  <div className={container}>
    <Helmet title={`About Russell Schmidt, a developer in Los Angeles, CA`}/>
    <h1>About</h1>
    <div className={innerContainer}>
      <div className={imageContainer}>
        <img src={portraitCarousel[1]} alt="Pictures of me" />
        <div>
          
        </div>
      </div>
      <div className={articleContainer}>
      </div>
      <div className={sidenavContainer}>
        <h6>Links</h6>
        <ul>
          <li><a href="https://storage.googleapis.com/russellmschmidt-net-portfolio/resume/Schmidt_Russell_Resume.pdf" target="_blank">Resume</a></li>
        </ul>
        <h6>Contributions</h6>
        <ul>
          <li><a href="https://github.com/stympy/faker" target="_blank">Faker</a></li>
          <li><a href="https://github.com/botpress/botpress/pull/177" target="_blank">Botpress</a></li>
          <li><a href="https://github.com/andrewngu/sound-redux/pull/99" target="_blank">SoundRedux</a></li>
        </ul>
      </div>
    </div>
  </div>
);
