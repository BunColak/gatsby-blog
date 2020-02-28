import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const edges = data.allMarkdownRemark.edges || []

  return (
    <Layout>
      <SEO title="Home" />
      {edges.map(edge => {
        const node = edge.node
        const tags = node.frontmatter.tags || []

        return (
          <div className="mt-10" key={node.id}>
            <Link className="text-lg" to={node.fields.slug}>{node.frontmatter.title}</Link>
            <div className="text-gray-600 text-sm">
              <span>{node.frontmatter.date}</span>
              {tags.map(tag => <span className="ml-4 italic" key={tag}>#{tag}</span>)}
            </div>
            <p className="leading-snug text-sm text-gray-900 mt-1">{node.excerpt}</p>
          </div>
        )
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
          excerpt
        }
      }
    }
  }
`

export default IndexPage
