const path = require(`path`)
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSanityBlogPost {
        edges {
          node {
              id
              slug {
                current
              }     
          }
        }
      }
      allSanityTag {
        edges {
          node {
            tagTitle
          }
        }
      }
    }
  `)

  result.data.allSanityBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: node.slug.current,
      component: path.resolve(`./src/components/PostLayout.js`),
      context: {
        id: node.id,
      }
    })
  })

  result.data.allSanityTag.edges.forEach(({ node }) => {
    createPage({
      path: `tag/${node.tagTitle}`,
      component: path.resolve(`./src/components/TagLayout.js`),
      context: {
        tag: node.tagTitle,
      }
    })
  })
}