/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Site metadata */
  siteMetadata: {
    title: "Ricky Dodd's Personal Blog",
    siteUrl: "https://rickydodd.github.io/",
    description: "A personal blog developed for and by Ricky Dodd."
  },

  /* Site config */
  plugins: [
    // gatsby-source-filesystem config
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`
      }
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        footnotes: true,
        gfm: true,
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`
            }
          }
        ]
      }
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
            title: "Ricky Dodd's Personal Blog",
            output: "rss.xml",
            query: `
              {
                allMarkdownRemark(sort: {fields: frontmatter___date, order: ASC}) {
                  nodes {
                    frontmatter {
                      title
                      author
                      date
                      description
                    }
                    fields {
                      slug
                    }
                    html
                  }
                }
              }
            `,
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  url: `${ site.siteMetadata.siteUrl }${ node.fields.slug }`,
                  guid: `${ site.siteMetadata.siteUrl }${ node.fields.slug }`
                })
              })
            }
          }
        ]
      }
    }
  ],
}
