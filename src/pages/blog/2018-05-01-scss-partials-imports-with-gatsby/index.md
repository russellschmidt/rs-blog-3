---
path: "/blog/scss-partials-imports-with-gatsby/"
date: "2018-05-01T16:20:11.200Z"
title: "SCSS Partials Importing with Gatsby"
type: "blog"
---

If you want to use a mix of inline and .scss files like me because the inline syntax is kinda verbose at times, and you miss the shorthands of .scss, well you are in luck, because I finally figured out how to import using `@import`. By 'I figured out' I mean I found a Stack Overflow post and took a 70 hour React tutorial that more or less set the table.

Three easy steps.

1. Install [gatsby-plugin-postcss-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-postcss-sass/) which takes a `yarn add gatsby-plugin-postcss-sass` and some config in the `gatsby-config` file 

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-postcss-sass`,
    options: {
      postCssPlugins: [],
      precision: 8,
    },
  },
];
```

2. Create a `src/styles` directory with a main `.scss` file at the root importing the other files in whatever structure you see fit.
3. Import this main `.scss` file into `./src/layouts/index.js` - this was the tricky part for me, as I had been thinking it was going in the `./src/html.js` file as you would throw this in `app.js` in React. That is not correct and it makes somewhat more sense to have this go in a layouts file, as it gives you more flexibility if you have multiple layouts but also just makes more sense as a logical grouping even if it is a departure from the norms of React.

Here is the Stack Overflow post that was helpful. <https://stackoverflow.com/questions/46874886/implementing-a-css-reset-in-gatsbyjs>
