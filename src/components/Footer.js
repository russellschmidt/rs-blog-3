import React from "react";
import Link from "gatsby-link";
import g from "glamorous";
import { css } from "glamor";

const slideItIn = css.keyframes('slideItIn', {
  '0%': {
    marginLeft: '200%',
    width: '300%',
  },
  '100%': {
    marginLeft: '0%',
    width: '300%',
  }
});

const bottomPulsate = css.keyframes('bottomPulsate', {
  '0%': { opacity: 0.85, textShadow: `0 0 20px #ff0000` },
  '25%': { opacity: 0.55, textShadow: `0 0 25px #bb3322` },
  '50%': { opacity: 0.75, textShadow: `0 0 20px #dd2222` },
  '75%': { opacity: 0.55, textShadow: `0 0 25px #aa4433` },
  '100%': { opacity: 0.85, textShadow: `0 0 20px #ff0000` },
});

const componentGrid = css({
  display: `grid`,
  gridTemplateColumns: `repeat(12, 8%)`,
  gridTemplateRows: `33px 33px`,
  borderTop: `1px solid #888`,
  width: `100%`,
  justifyContent: `space-evenly`,
});

const iconP = css({
  margin: 0,
  padding: `5px 0 0`,
  '@media (min-width: 768px)': {
    animation: `${slideItIn} 2s`,
  }
});

const iconA = css({
  margin: 0,
  padding: 0,
});

const iconImg = css({
  width: 20,
  height: 20,
});

const iconSquare = css({
  "&:hover": {
    borderRadius: `20%`,
  },
});

const iconCircle = css({
  "&:hover": {
    borderRadius: `50%`,
  },
});

const iconLinkedIn = css({
  "&:hover": {
    background: `rgba(0, 119, 181, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(0, 119, 181, 0.8)`
  },
});

const iconGithub = css({
  "&:hover": {
    background: `rgba(24, 23, 23, 0.3)`,
    boxShadow: `0 0 6px 3px rgba(24, 23, 23, 0.5)`
  },
});

const iconTwitter = css({
  "&:hover": {
    background: `rgba(29, 161, 242, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(29, 161, 242, 0.8)`
  },
});

const iconInstagram = css({
  "&:hover": {
    background: `rgba(228, 64, 95, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(228, 64, 95, 0.8)`
  },
});

const iconGooglePlus = css({
  "&:hover": {
    background: `rgba(220, 78, 65, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(220, 78, 65, 0.8)`
  },
});

const iconSnapchat = css({
  "&:hover": {
    background: `rgba(255, 252, 0, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(255, 252, 0, 0.8)`
  },
});

const iconSteam = css({
  "&:hover": {
    background: `rgba(0, 0, 0, 0.3)`,
    boxShadow: `0 0 6px 3px rgba(0, 0, 0, 0.5)`
  },
});

const iconPinterest = css({
  "&:hover": {
    background: `rgba(189, 8, 28, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(189, 8, 28, 0.8)`
  },
});

const iconCodeWars = css({
  "&:hover": {
    background: `rgba(173, 44, 39, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(173, 44, 39, 0.8)`
  },
});

const iconStackOverflow = css({
  "&:hover": {
    background: `rgba(254, 122, 22, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(254, 122, 22, 0.8)`
  },
});

const navLink = css({
  color: `#000`,
  fontStyle: `normal`,
  "&:hover": {
    textDecoration: `none`,
    animation: `${bottomPulsate} 2s ease-in infinite`,
  },
});

const footerParagraph = css({
  gridColumn: `span 3`,
  fontSize: 8,
  textAlign: `right`,
  textTransform: `uppercase`,
  "@media (min-width: 768px)": {
    fontSize: 12,
    fontWeight: 600,
    textAlign: `left`,
    margin: `auto 0`,
    gridColumn: `span 2`,
    animation: `${slideItIn} 2s`,
  }
});

const copyrightParagraph = css({
  gridColumn: `span 3`,
  fontSize: 8,
  textAlign: `right`,
  textTransform: `none`,
  "@media (min-width: 768px)": {
    fontSize: 12,
    fontWeight: 600,
    textAlign: `left`,
    margin: `auto 0`,
    gridColumn: `span 6`,
    animation: `${slideItIn} 2s`,
  }
});

const IconSquare = (props) => {
  return (
    <p className={iconP}>
      <a className={iconA} href={props.url} target="_blank"><img className={`${iconImg} ${iconSquare} ${iconGithub}`} src={props.imgUrl} alt={props.altText}/></a>
    </p> 
  )
}

const IconCircle = (props) => {
  return (
    <p className={iconP}>
      <a className={iconA} href={props.url} target="_blank"><img className={`${iconImg} ${iconCircle} ${iconGithub}`} src={props.imgUrl} alt={props.altText}/></a>
    </p> 
  )
}

const FooterLink = (props) => {
  return (
    <p className={footerParagraph}> 
      <Link className={navLink} to={props.url} css={{ }}>{props.urlName}</Link>
    </p>
  )
}

export default () => (
  <footer className={componentGrid}>
    <p css={{
      gridColumn: `span 2`,
      fontSize: 9,
      margin: `auto 0`,
      textTransform: `uppercase`,
      "@media (min-width: 768px)": {
        fontSize: 14,
        animation: `${slideItIn} 2s`,
      }
    }}><Link to="/contact-me/" className={navLink} css={{fontWeight: `600`,}}>Contact Me</Link></p>
    <IconSquare
      url="https://linkedin.com/in/russellschmidt" 
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/linkedin.svg"
      altText="LinkedIn russellschmidt profile"
    />
    <IconCircle
      url="https://github.com/russellschmidt" 
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/github.svg"
      altText="GitHub russellschmidt profile"
    />
    <IconCircle
      url="https://twitter.com/russ_eel"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/twitter.svg"
      altText="Twitter profile @russ-eel"
    />
    <IconSquare
      url="https://www.instagram.com/russ_eel/"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/instagram.svg"
      altText="Instagram @russ_eel"
    />
    <IconCircle
      url="https://plus.google.com/u/0/115439838839649200716"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/googleplus.svg"
      altText="Google+ Google Plus everyone's favorite social site"
    />
    <IconSquare
      url="http://snapchat.com/add/rms-one"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/snapchat.svg"
      altText="Snapchat @rms-one"
    />
    <IconCircle
      url="http://steamcommunity.com/id/russ-eel/"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/steam.svg"
      altText="Steam user russ-eel"
    />
    <IconCircle
      url="https://www.pinterest.com/rschmidt0378/"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/pinterest.svg"
      altText="Pinterest rschmidt0378"
    />
    <IconCircle
      url="https://www.codewars.com/users/russellschmidt"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/codewars.svg"
      altText="CodeWars Russell Schmidt profile"
    />
    <IconSquare
      url="https://stackoverflow.com/users/1834685/russell-schmidt"
      imgUrl="https://s3.amazonaws.com/russell-personal/social-icons/stackoverflow.svg"
      altText="Stack Overflow Russell Schmidt profile"
    />
    <p className={copyrightParagraph}>
      &copy; {new Date().getFullYear()} Russell Schmidt - All Rights Reserved
    </p>
    <FooterLink url="/privacy/" urlName="Privacy Policy" />
    <FooterLink url="/terms-of-service/" urlName="Terms of Service" />
    <FooterLink url="/sitemap.xml" urlName="Site Map" />
  </footer>
);
