import React from "react"
import { graphql } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"

const BlogLayout = ({ data, ...rest }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1 className="text-center mb-2">{post.frontmatter.title}</h1>
      <div className="text-center mb-4 text-gray-600 text-sm">
        {post.frontmatter.date} {tags.map(tag => <span className="mx-2 font-bold" key={tag}>#{tag}</span>)}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        tags
      }
    }
  }
`

export default BlogLayout