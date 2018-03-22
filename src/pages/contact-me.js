import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import g from "glamorous";
import { css } from "glamor";

import "../styles/formStyling.scss";

const ImageContainer = (props) => {
  const imageClass = `imageContainer ${props.imageClass}`
  return (
    <div className={imageClass}>
      <img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/leif-erikson.svg" alt="Leif Ericson statue in Reykjavik, the discoverer of America for the Europeans" />
    </div>
  )
}

const Form = (props) => {
  return (
    <form action="https://formspree.io/russ@russellschmidt.net"
        method="POST">
      <input className="contactFormInput" type="text" name="name" placeholder="Your Name"/>
      <input className="contactFormInput" type="email" name="_replyto" placeholder="you@mail.com"/>
      <select className="contactFormInput" name="reason">
        <option value="project">I need help with a web or mobile app project</option>
        <option value="hire">I represent a company looking to hire a developer</option>
        <option value="friendship">I am here for friendship</option>
        <option value="other">Some other reason</option>
      </select>
      <textarea className="contactFormInput" name="subject" placeholder="Describe what you would like to discuss with me in more detail">&nbsp;</textarea>
      <input type="text" name="_gotcha" css={{ display: `none`}} />
      <input type="hidden" name="_next" value="//rusl.io/" />
      <div className="submitContainer"><input type="submit" value="Send"/></div>
    </form>
  )
}

export default () => (
  <div className="contactContainer">
    <Helmet title={`Contact Russell Schmidt via Email via Web Form`} />
    <div className="headerContainer">
      <h1>Contact Me!</h1>
    </div>
    <ImageContainer imageClass="leftImageContainer" />
    <Form />
    <ImageContainer imageClass="rightImageContainer" />
  </div>
);
