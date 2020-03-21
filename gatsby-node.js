const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    console.log(node);
    
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `date`,
      value: new Date(node.frontmatter.date),
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
        group(field:frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/PostLayout.js`),
      context: {
        slug: node.fields.slug,
      }
    })
  })

  result.data.allMarkdownRemark.group.forEach(({ fieldValue }) => {
    createPage({
      path: `tag/${fieldValue}`,
      component: path.resolve(`./src/components/TagLayout.js`),
      context: {
        tag: fieldValue,
      }
    })
  })
}