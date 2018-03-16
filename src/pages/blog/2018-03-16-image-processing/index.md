---
path: "/blog/image-processing/"
date: "2018-03-16T16:20:11.200Z"
title: "Image Processing in Gatsby"
type: "blog"
---

The true title of this post ought to be something about pulling images from frontmatter / markdown blog posts via graphql and inputting them into the blog template. Or, it should be: why am I having so much trouble with image plugins and is this the Holy Grail in understanding Gatsby.

The three plugins are:
`gatsby-image`
`gatsby-transformer-sharp`
`gatsby-plugin-sharp`

I don't understand this yet so I am going to write down the links I have found and will revisit in order to have a reference for later and to close my browser tabs. If possible, I would love to get something akin to image processing in Gatsby for morons going.

<https://github.com/gatsbyjs/gatsby/issues/1576>

This is a good link and is something I need to reproduce in a throwaway project, just a simple test of whether we can get this to even work.

<https://github.com/gatsbyjs/gatsby/issues/1384>

Beginner problems.

<https://github.com/gatsbyjs/gatsby/blob/master/www/src/templates/template-blog-post.js#L199-L206>

This is the gold standard Gatsby blog itself with a ton of complexity and interesting things going on. It would make sense to go through the repo and see how everything is wired together.

<https://github.com/gatsbyjs/gatsby/blob/master/www/src/templates/template-contributor-page.js>

The contributor page utilizes avatar thumbnails and might be a rich vein to mine.

<https://using-gatsby-image.gatsbyjs.org/>

The `gatsby-image` plugin's home with links to docs. [Official Gatsby docs on `gatsby-image`.](https://www.gatsbyjs.org/packages/gatsby-image/)

<https://image-processing.gatsbyjs.org/>

The ` gatsby-transformer-sharp` plugin's home, has great explanations of the various options available.

<https://www.gatsbyjs.org/packages/gatsby-plugin-sharp/>

Source docs for the `gatsby-plugin-sharp` plugin.

<https://github.com/gatsbyjs/gatsby/issues/2054>

A poor soul struggling as I have to get a thumbnail working.

<https://github.com/gatsbyjs/gatsby/issues/1749>

Discussion here centers around a difference between `childImageSharp` and `allImageSharp` and I thought those names were just arbitrary before. It also covers file location. Again this problem is screaming out for better documentation.

Also curious if I have to have the image files local. I would much prefer to put them in Google Cloud Storage or S3 rather than bloat the size of my project.

<https://github.com/gatsbyjs/gatsby/issues/950>

This is a further discussion of getting links to work in Gatsby. It looks pretty relevant to what I was trying to do. There is some Gatsby magic taking place in the background with file processing and transformations, and also ocean-sized gaps in my understanding of GraphQL. 

<https://github.com/gatsbyjs/gatsby/issues/3531>

This was the exact error I was getting, so that's something. Though the solution was a fixed typo so, of questionable value to this project.

<https://github.com/assemble/grunt-assemble-i18n/issues/57>

Frontmatter Arrays look like HAML if I was to be so bold as to try to put images in an array for the blog posts, which I would like to do so I could do a slideshow on hover in the templates.

--- 

<https://hackernoon.com/how-graphql-replaces-redux-3fff8289221d>

This link has nothing to do with image processing but everything to do with why GraphQL is pretty cool and worth learning if you are learning and using React.

<https://www.gatsbyjs.org/docs/querying-with-graphql/>

Just great documentation as usual from the core Gatsby team about GraphQL