---
path: "/blog/gatsby-rss-feed/"
date: "2018-04-10T16:20:11.200Z"
title: "Gatsby Feeder"
type: "blog"
---

I have one person in the world that subscribed to my old Jekyll rss feed and snice moving to Gatsby, I cut off that special baby boy. My oldest friend! What a monster. The problem is that the default Gatsby RSS feed [gatsby-plugin-feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/?=) uses an out-of-the-box configuration that is not compatible with the starter I had built my site on.

### tl;dr make sure your graphQl query matches

### Slugs and Paths
I was using `path` as defined in my frontmatter, but the out of the box config for the `gatsby-plugin-feed` uses `slug` as a field to pull the relative path to each blog post for the feed. I also use both portfolio and blog posts so I wanted to include my `type` frontmatter data designation. 

In order to get mine to work, my config is below. I would CMD+F for 'slug' and then make sure that it is using whatever your term and query structure is using. I would also remove this line `filter: {frontmatter: { draft: { ne: true } }}` unless you are using drafts. I don't use drafts because I always push straight to ,master and then to production on my blog. It's my blog and here, there are no rules.

![push to production most interesting dev in the world](http://m.memegen.com/3warlq.jpg)

### LAST THING / POSTSCRIPT
I am getting some UTF-8 encoding error at line 3,500 or so of my feed, but its otherwise working. I am not sure what this is or why the error pops up there of all places, from a very early blog post (April 2016).

```javascript
{
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      id
                      html
                      frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        path
                        type
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
          },
        ],
      },
    },
```