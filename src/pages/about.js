import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import g from 'glamorous';
import { css } from 'glamor';

import { rhythm } from '../utils/typography';

const container = css({
  height: '100%',
  ' ul': {
    listStyleType: 'none',
    listStylePosition: 'outside',
    margin: '0 0 1rem 0',
  },
  ' li, a': {
    fontSize: 12,
    margin: 0,
    padding: 0
  },
  '@media (min-width: 768px)': {
    ' h3': {
      margin: '0 0 1rem 0',
    },
    ' h6': {
      margin: '0 0 0.3rem 0',
      fontStyle: 'normal',
    }
  }
});

const innerContainer = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 8%)',
  gridTemplateRows: 'auto',
  width: '100%',
  minHeight: 'calc(100vh-300px)',
  justifyContent: 'space-evenly',
  '@media (max-width: 767px)': {
    gridTemplateRows: '40% auto',
  },
});

const imageContainer = css({
  gridColumn: 'span 12',
  '@media (min-width: 768px)': {
    gridColumn: 'span 6',
    width: '90%'
  },
});

const articleContainer = css({
  gridColumn: 'span 8',
  '@media (min-width: 768px)': {
    gridColumn: 'span 4',
    width: '92%',
  },
});


const sidenavContainer = css({
  gridColumn: 'span 4',
  '@media (min-width: 768px)': {
    gridColumn: 'span 2',
  },
});

const portraitCarousel = [
  'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-1.jpg',
  'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-2.jpg',
  'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-3.jpg',
  'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-4.jpg',
  'https://storage.googleapis.com/russellmschmidt-net-portfolio/portraits/russell-portrait-5.jpg',
];


export default () => (
  <div className={container}>
    <Helmet title="About Russell Schmidt, a developer in Los Angeles, CA" />
    <h1>About</h1>
    <div className={innerContainer}>
      <div className={imageContainer}>
        <img src={portraitCarousel[1]} alt="Pictures of Russell Schmidt" />
      </div>
      <div className={articleContainer}>
        <article>
          <h3>Biography</h3>
          <p></p>
        </article>
        <article>
          <h3>Education</h3>
          <ul>
            <li>
              <h6>Master of Science in Integrated Design, Business and Technology</h6>
              <ul>
                <li>University of Southern California (USC)</li>
                <li>Iovine and Young Academy</li>
                <li>2019 (candidate)</li>
                <li><a href="https://design.usc.edu/about/" target="_blank">Design@USC</a></li>
              </ul>
            </li>
            <li>
              <h6>Bachelor of Arts in Economics</h6>
              <ul>
                <li>Harvard University</li>
                <li>2001</li>
                <li><a href="https://economics.harvard.edu/" target="_blank">Economics</a></li>
              </ul>
            </li>
            <li>
              <h6>Software Engineering Apprenticeship</h6>
              <ul>
                <li>Bloc</li>
                <li>2017</li>
                <li><a href="https://blog.bloc.io/announcing-software-engineering-track/" target="_blank">Software Engineering Track</a></li>
              </ul>
            </li>
            <li>
              <h6>Certificate in Mobile Development (iOS/Swift)</h6>
              <ul>
              <li>General Assembly</li>
                <li>2015</li>
                <li><a href="https://generalassemb.ly/education/ios-development" target="_blank">iOS Development</a></li>
              </ul>
            </li>
            <li>
              <h6>Certificate in Entrepreneurship</h6>
              <ul>
                <li>Goldman Sachs' 10,000 Small Businesses</li>
                <li>2014</li>
                <li><a href="http://www.goldmansachs.com/citizenship/10000-small-businesses/US/" target="_blank">GS10KSB</a></li>
              </ul>
            </li>
            <li>
              <h6>Certificate in Digital Marketing</h6>
              <ul>
              <li>General Assembly</li>
                <li>2013</li>
                <li><a href="https://generalassemb.ly/education/digital-marketing" target="_blank">Digital Marketing &amp; Strategy</a></li>
              </ul>
            </li>
            <li>
              <h6>Back-End Web Development</h6>
              <ul>
                <li>General Assembly</li>
                <li>2012</li>
                <li><a href="https://generalassemb.ly/education/back-end-web-development" target="_blank">Back-End Web Development</a></li>
              </ul>
            </li>
          </ul>
        </article>
      </div>
      <div className={sidenavContainer}>
        <h3>Links</h3>
        <h6>CV</h6>
        <ul>
          <li><a href="https://storage.googleapis.com/russellmschmidt-net-portfolio/resume/Schmidt_Russell_Resume.pdf" target="_blank">Resume</a></li>
        </ul>
        <h6>Languages & Frameworks</h6>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS/SCSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
          <li>React Native</li>
          <li>Gatsby</li>
          <li>Angular v1</li>
          <li>Meteor</li>
          <li>Ruby</li>
          <li>Ruby on Rails</li>
          <li>Jekyll</li>
          <li>PHP</li>
          <li>WordPress</li>
        </ul>
        <h6>Databases & Backend</h6>
        <ul>
          <li>SQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>Firebase</li>
        </ul>
        <h6>Open Source Contributions</h6>
        <ul>
          <li><a href="https://github.com/stympy/faker" target="_blank">Faker</a></li>
          <li><a href="https://github.com/botpress/botpress/pull/177" target="_blank">Botpress</a></li>
          <li><a href="https://github.com/andrewngu/sound-redux/pull/99" target="_blank">SoundRedux</a></li>
        </ul>
      </div>
    </div>
  </div>
);
