import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostListItem from "../components/PostListItem"

const IndexPage = ({ data }) => {
  const edges = data.allSanityBlogPost.edges || []

  return (
    <Layout>
      <SEO title="Home" />
      {edges.map(edge => {
        const node = edge.node

        return <PostListItem key={node.releaseDate} node={node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    allSanityBlogPost(sort: { fields: releaseDate, order: DESC }) {
      edges {
        node {
          tags {
            tagTitle
          }
          title
          releaseDate
          content
          slug {
            current
          }
        }
      }
    }
  }
`

export default IndexPage
