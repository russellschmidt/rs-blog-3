module.exports = {
  siteMetadata: {
    title: 'rusl.io: Russell Schmidt\'s developer blog and portfolio',
    author: 'Russell Schmidt',
    description: 'Portfolio, blog, and biography of the world\'s most incredible Russell Schmidt from Los Angeles, CA, USA.',
    siteUrl: 'https://www.rusl.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-glamor',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [],
        precision: 5,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-65699622-1', // ,
      }, //
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'img',
    //     path: `${__dirname}/src/img/`,
    //   },
    // },
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
      },
    },
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
                  url: site.siteMetadata.siteUrl + edge.node.fields.path,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.path,
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
  ],
};
