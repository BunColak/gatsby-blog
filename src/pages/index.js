import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostListItem from "../components/PostListItem"

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges || []

  return (
    <Layout>
      <SEO title="Home" />
      {edges.map(edge => {
        const node = edge.node

        return <PostListItem node={node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            tags
            title
            tags
            date
          }
          fields {
            slug
          }
          excerpt(pruneLength: 300)
        }
      }
    }
  }
`

export default IndexPage
