import React, { Component } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import g from 'glamorous';
import { css } from 'glamor';

import { rhythm } from '../utils/typography';
import Gold from '../components/MedalGold.js';
import Silver from '../components/MedalSilver.js';
import Bronze from '../components/MedalBronze.js';
import ImageCarousel from '../components/ImageCarousel.js';

const throb = css.keyframes('throb', {
  '0%': { borderBottom: '1px dotted #f92300' },
  '7.7%': { borderBottom: '1px dotted #ff2100' },
  '15.4%': { borderBottom: '1px dotted #ffa100' },
  '23.1%': { borderBottom: '1px dotted #ddff00' },
  '30.8%': { borderBottom: '1px dotted #5dff00' },
  '38.5%': { borderBottom: '1px dotted #00ff21' },
  '46.2%': { borderBottom: '1px dotted #00ffa1' },
  '53.9%': { borderBottom: '1px dotted #00ddff' },
  '61.6%': { borderBottom: '1px dotted #005dff' },
  '69.3%': { borderBottom: '1px dotted #2200ff' },
  '77%': { borderBottom: '1px dotted #a100ff' },
  '84.7%': { borderBottom: '1px dotted #ff00dc' },
  '92.4%': { borderBottom: '1px dotted #ff005d' },
  '100%': { borderBottom: '1px dotted #f92300' },
});

const container = css({
  height: '100%',
  ' ul': {
    listStyleType: 'none',
    listStylePosition: 'outside',
    margin: '0 0 1rem 0',
  },
  ' li, a': {
    margin: 0,
    padding: 0,
  },
  ' a': {
    fontSize: 14,
    '&:hover': {
      textDecoration: 'none',
      color: '#f92300',
      fontWeight: 600,
      animation: `${throb} 3s 1s ease-in-out infinite`,
    },
  },
  ' li': {
    fontSize: 12,
  },
  ' p': {
    fontSize: 14,
    width: '90%',
    marginBottom: 10,
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
    ' p': {
      marginBottom: '1rem',
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

const AboutArticle = () => {
  return (
    <article>
      <h3>Let's Make Something Cool</h3>
      <p>I am experienced in frontend and backend website development. <Link to="/contact-me/">Please reach out</Link> if you need someone to help maintain your current website or want to build something new.</p>
      <p>Not sure what architecture or language to use? I have a broad exposure to different architectures, having built and maintained websites using React, Ruby on Rails, WordPress &amp; WooCommerce, Shopify, Squarespace, Jekyll, and Gatsby.</p>
      <p>Not sure if I am a good fit? Me neither! But I've worked with corporate and nonprofit organizations to help them meet their online goals, and am generally pretty agreeable. I hope we can create something together!</p>
    </article>
  )
}

const BioArticle = () => {
  return (        
    <article>
      <h3>Biography</h3>
      <p>Hi visitor! Thanks for your interest in me, I am flattered. I hope to get to know you, too.</p>
      <p>My work interests are making websites and native apps for you <Link to="/about-me/">(hit me up)</Link>! I love design and making sites.</p>
      <p>When I am not dreaming about working with you in my spare time, which is rarely, I can be found: reading, playing with my dog-daughter (aka my DogTer&trade;) Violet, traveling, visiting museums and galleries, baseball, yoga, and having fun with my wife, in no particular order other than wife is first (hi, Janet!).</p>
      <p>For media consumption, I enjoy binge watching science fiction, especially when set in dystopian hellscapes, and also historical dramas. I don't have a favorite music genre, but loud and fast is generally best.</p>
    </article>
  )
}

const EdArticle = () => {
  return (
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
            <li><a href="https://economics.harvard.edu/" target="_blank">Economics Department</a></li>
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
  )
}


const ResumeList = () => {
  return (
    <ul>
      <li><a href="https://storage.googleapis.com/russellmschmidt-net-portfolio/resume/Schmidt_Russell__Resume.pdf" target="_blank">Resume</a></li>
    </ul>
  )
}

const LanguagesList = () => {
  return (
    <ul>
      <li>Angular v1 <Bronze /></li>
      <li>CSS <Gold /></li>
      <li>Gatsby <Silver /></li>
      <li>HTML <Gold /></li>
      <li>JavaScript <Gold /></li>
      <li>Jekyll <Bronze /></li>
      <li>jQuery <Silver /></li>
      <li>Meteor <Bronze /></li>
      <li>PHP <Bronze /></li>
      <li>React <Silver /></li>
      <li>React Native <Bronze /></li>
      <li>Ruby <Silver /></li>
      <li>Ruby on Rails <Silver /></li>
      <li>SASS/SCSS <Gold /></li>
      <li>Shopify <Gold /></li>
      <li>Squarespace <Gold /></li>
      <li>Swift <Bronze /></li>
      <li>WooCommerce <Silver /></li>
      <li>WordPress <Gold /></li>
    </ul>
  )
}

const DatabasesList = () => {
  return (
    <ul>
      <li>Firebase <Bronze /></li>
      <li>GraphQL <Bronze /></li>
      <li>MongoDB <Bronze /></li>
      <li>PostgreSQL <Silver /></li>
      <li>SQL <Silver /></li>
    </ul>
  )
}

const OpenSourceContributionsList = () => {
  return (
    <ul>
      <li><a href="https://github.com/stympy/faker" target="_blank">Faker</a></li>
      <li><a href="https://github.com/botpress/botpress/pull/177" target="_blank">Botpress</a></li>
      <li><a href="https://github.com/andrewngu/sound-redux/pull/99" target="_blank">SoundRedux</a></li>
    </ul>
  )
}

const OpenSourceProjectsList = () => {
  return (
    <ul>
      <li><a href="https://github.com/russellschmidt/climate-cents" target="_blank">Ruby on Rails Crowdfunding</a></li>
    </ul>
  )  
}

const CreditsList = () => {
  return (
    <ul>
      <li>Icons sourced from <a href="https://icons8.com/" target="_blank">icons8.com</a></li>
    </ul>
  )
}

export default () => (
  <div className={container}>
    <Helmet title="About Russell Schmidt, a developer in Los Angeles, CA" />
    <h1>About</h1>
    <div className={innerContainer}>
      <div className={imageContainer}>
        <ImageCarousel />
        <AboutArticle />
      </div>
      <div className={articleContainer}>
        <BioArticle />
        <EdArticle />
      </div>
      <div className={sidenavContainer}>
        <h3>Links</h3>
        <h6>CV</h6>
        <ResumeList />
        <h6>Languages & Frameworks</h6>
        <LanguagesList />
        <h6>Databases & Backend</h6>
        <DatabasesList />
        <h6>Open Source Contributions</h6>
        <OpenSourceContributionsList />
        <h6>Open Source Projects</h6>
        <OpenSourceProjectsList />
        <h6>Icons</h6>
        <CreditsList />

      </div>
    </div>
  </div>
);
