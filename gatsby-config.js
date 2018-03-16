module.exports = {
  siteMetadata: {
    title: 'Russell Schmidt\'s developer blog and portfolio',
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`,
      },
    },
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
  ],
};
