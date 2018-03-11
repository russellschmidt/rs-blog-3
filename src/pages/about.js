import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import g from 'glamorous';
import { css } from 'glamor';

import { rhythm } from '../utils/typography';
import Gold from '../components/MedalGold.js';
import Silver from '../components/MedalSilver.js';
import Bronze from '../components/MedalBronze.js';
import ImageCarousel from '../components/ImageCarousel.js';

const container = css({
  height: '100%',
  ' ul': {
    listStyleType: 'none',
    listStylePosition: 'outside',
    margin: '0 0 1rem 0',
  },
  ' li, a': {
    fontSize: 14,
    margin: 0,
    padding: 0,
  },
  ' p':{
    fontSize: 14,
    width: '90%',
  },
  ' span img': {
    maxHeight: 14,
  },
  ' h3': {
    margin: '1rem 0',
  },
  ' h6': {
    margin: '0.3rem 0',
    fontStyle: 'normal',
  },
  ' figure>img': {
    marginBottom: 5,
  },
  ' figcaption': {
    textAlign: 'center',
  },
  '@media (min-width: 768px)': {
    ' h3': {
      margin: '0 0 1rem 0',
    },
    ' h6': {
      margin: '0 0 0.3rem 0',
      fontStyle: 'normal',
    },
    ' li, a, p': {
      fontSize: 12,
    },
    ' span img': {
      maxHeight: 12,
    },
    ' figcaption': {
      fontSize: 12,
    },
  },
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
    width: '90%',
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

export default () => (
  <div className={container}>
    <Helmet title="About Russell Schmidt, a developer in Los Angeles, CA" />
    <h1>About</h1>
    <div className={innerContainer}>
      <div className={imageContainer}>
        <ImageCarousel/>
        <article>
        <h3>Biography</h3>
        <p> </p>
      </article>
      </div>
      <div className={articleContainer}>
        <article>
          <h3>Let's Make Something Cool</h3>
          <p>I am experienced in frontend and backend website development. <Link to="/contact-me/">Please reach out</Link> if you need someone to help maintain your current website or want to build something new.</p>
          <p>Not sure what architecture or language to use? I have a broad exposure to different architectures, having built and maintained websites using React, Ruby on Rails, WordPress &amp; WooCommerce, Shopify, Squarespace, Jekyll, and Gatsby.</p>
          <p>Not sure if I am a good fit? Me neither! But I've worked with corporate and nonprofit organizations to help them meet their online goals, and am generally pretty agreeable. I hope we can create something together!</p>
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
                <li><a href="https://economics.harvard.edu/" target="_blank">Department of the Dismal Science</a></li>
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
          <li>HTML <Gold/></li>
          <li>CSS <Gold/></li>
          <li>SASS/SCSS <Gold/></li>
          <li>JavaScript <Gold/></li>
          <li>jQuery <Silver/></li>
          <li>React <Silver/></li>
          <li>React Native <Bronze/></li>
          <li>Gatsby <Silver/></li>
          <li>Angular v1 <Bronze/></li>
          <li>Meteor <Bronze/></li>
          <li>Ruby <Silver/></li>
          <li>Ruby on Rails <Silver/></li>
          <li>Jekyll <Bronze/></li>
          <li>PHP <Bronze/></li>
          <li>WordPress <Gold/></li>
          <li>Swift <Bronze/></li>
        </ul>
        <h6>Databases & Backend</h6>
        <ul>
          <li>SQL <Silver/></li>
          <li>PostgreSQL <Silver/></li>
          <li>MongoDB <Bronze/></li>
          <li>GraphQL <Bronze/></li>
          <li>Firebase <Bronze/></li>
        </ul>
        <h6>Open Source Contributions</h6>
        <ul>
          <li><a href="https://github.com/stympy/faker" target="_blank">Faker</a></li>
          <li><a href="https://github.com/botpress/botpress/pull/177" target="_blank">Botpress</a></li>
          <li><a href="https://github.com/andrewngu/sound-redux/pull/99" target="_blank">SoundRedux</a></li>
        </ul>
        <h6>Open Source Projects</h6>
        <ul>
          <li><a href="https://github.com/russellschmidt/climate-cents" target="_blank">Ruby on Rails Crowdfunding</a></li>
        </ul>
        <h6>Icons</h6>
        <ul>
          <li>Icons sourced from <a href="https://icons8.com/" target="_blank">icons8.com</a></li>
        </ul>
      </div>
    </div>
  </div>
);
