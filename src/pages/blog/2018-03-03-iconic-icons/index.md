---
path: "/blog/iconic-icons/"
date: "2018-03-03T16:20:11.200Z"
title: "Iconic Icons"
type: "blog"
---

I wanted to use social links in my portfolio, which led to a fun hunt for icons. The idea is that you can just click on the iconic icons / logos for each of these companies and link to my portfolio.

So the best source of icons I found was <https://simpleicons>. They have a ton of variety, its free to download as they should be, and they are all SVG. I was making that Italian chef air kissing gesture all day in joy. Check them out.

Here are some great ones:
<div style="display: flex; flex-flow: row wrap; justify-content: center;">
  <img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/icons/adobeillustrator.svg" alt="[Adobe Illustrator]" style="max-width: 500px"/>
  <img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/icons/angular.svg" alt="[Angular]" style="max-width: 500px"/>
  <img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/icons/freecodecamp.svg" alt="[FreeCodeCamp]" style="max-width: 500px"/>
  <img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/icons/graphql.svg" alt="[GraphQL]" style="max-width: 500px"/>
  <img src="https://storage.googleapis.com/russellmschmidt-net-portfolio/icons/ycombinator.svg" alt="[Y Combinator]" style="max-width: 500px"/>
</div>

There are so many of them that I think I will also use these for my about section to show things I know, and it keeps a kind of nice design language going.

The site also features the main color for each, which is cool because I could make a nice halo-on-hover effect for the social icons in the footer. I am using `glamor` and `glamorous` in Gatsby so the CSS syntax is not your standard fare, these cool packages have you input CSS selectors and values as objects / key-value pairs. What is nice is you can also import stylesheets into Gatsby so you are writing CSS rules in 3-4 different ways in the same project. I say that is nice because I am sold on the concept of writing CSS for components so you are React-like but for more static pages like my contact page, its just not worth writing a one-off page as React components.

Without further adieu, here is my CSS for the hover on halo animation.

```javascript
let bottomPulsate = css.keyframes('bottomPulsate', {
  '0%': { opacity: 0.85, textShadow: `0 0 20px #ff0000` },
  '25%': { opacity: 0.55, textShadow: `0 0 25px #bb3322` },
  '50%': { opacity: 0.75, textShadow: `0 0 20px #dd2222` },
  '75%': { opacity: 0.55, textShadow: `0 0 25px #aa4433` },
  '100%': { opacity: 0.85, textShadow: `0 0 20px #ff0000` },
});

let iconImg = css({
  width: 20,
  height: 20,
});

let iconSquare = css({
  "&:hover": {
    borderRadius: `20%`,
  },
});

let iconCircle = css({
  "&:hover": {
    borderRadius: `50%`,
  },
});

let iconLinkedIn = css({
  "&:hover": {
    background: `rgba(0, 119, 181, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(0, 119, 181, 0.8)`
  },
});

let iconGithub = css({
  "&:hover": {
    background: `rgba(24, 23, 23, 0.3)`,
    boxShadow: `0 0 6px 3px rgba(24, 23, 23, 0.5)`
  },
});

let iconTwitter = css({
  "&:hover": {
    background: `rgba(29, 161, 242, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(29, 161, 242, 0.8)`
  },
});

let iconInstagram = css({
  "&:hover": {
    background: `rgba(228, 64, 95, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(228, 64, 95, 0.8)`
  },
});

let iconGooglePlus = css({
  "&:hover": {
    background: `rgba(220, 78, 65, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(220, 78, 65, 0.8)`
  },
});

let iconSnapchat = css({
  "&:hover": {
    background: `rgba(255, 252, 0, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(255, 252, 0, 0.8)`
  },
});

let iconSteam = css({
  "&:hover": {
    background: `rgba(0, 0, 0, 0.3)`,
    boxShadow: `0 0 6px 3px rgba(0, 0, 0, 0.5)`
  },
});

let iconPinterest = css({
  "&:hover": {
    background: `rgba(189, 8, 28, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(189, 8, 28, 0.8)`
  },
});

let iconCodeWars = css({
  "&:hover": {
    background: `rgba(173, 44, 39, 0.75)`,
    boxShadow: `0 0 6px 3px rgba(173, 44, 39, 0.8)`
  },
});

let iconStackOverflow = css({
  "&:hover": {
    background: `rgba(254, 122, 22, 0.75)`,
    boxShadow: `0 0 6px 2px rgba(254, 122, 22, 0.8)`
  },
});

let navLink = css({
  color: `#000`,
  fontStyle: `normal`,
  "&:hover": {
    textDecoration: `none`,
    animation: `${bottomPulsate} 2s ease-in infinite`,
  },
});
```
