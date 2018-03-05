import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import { rhythm } from "../utils/typography";

let container = css({
  height: `calc(100vh - 100px)`,
});

let innerContainer = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `auto`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

let imageContainer = css({
  gridColumn: `span 3`,
  " img ": {
    width: `100%`,
    margin: 0,
    padding: 0,
  }
});

let sidebarContainer = css({

});

let articleContainer = css({

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
        <img src={portraitCarousel[0]} alt="Pictures of me" />
      </div>
      <div className={sidebarContainer}>
      </div>
      <div className={articleContainer}>
      </div>
    </div>
  </div>
);
