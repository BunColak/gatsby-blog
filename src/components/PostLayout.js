import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./layout"
import SEO from "./seo"

const BlogLayout = ({ data }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags || []
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1 className="text-center mb-2">{post.frontmatter.title}</h1>
      <div className="text-center mb-4 text-gray-600 text-sm">
        {post.frontmatter.date}
        <div className="flex flex-wrap justify-center">
          {tags.map(tag => <Link className="mx-2 font-bold" to={`/tag/${tag}`} key={tag}>#{tag}</Link>)}
        </div>
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
      excerpt(pruneLength: 300)
    }
  }
`

export default BlogLayout