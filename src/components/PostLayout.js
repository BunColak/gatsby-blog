import React from "react"
import { graphql, Link } from "gatsby"
import marked from 'marked'
import hljs from 'highlight.js';
import Layout from "./layout"
import SEO from "./seo"

marked.use({
  highlight: (code, language) => {
    return hljs.highlightAuto(code).value;
  }
})

const BlogLayout = ({ data }) => {
  const post = data.sanityBlogPost
  const tags = post.tags || []

  const content = marked(post.content);

  return (
    <Layout>
      <SEO title={post.title} description={post.content.substring(0, 200)} />
      <h1 className="text-center mb-2">{post.title}</h1>
      <div className="text-center mb-4 text-gray-600 text-sm">
        {post.releaseDate}
        <div className="flex flex-wrap justify-center">
          {tags.map(({tagTitle: tag}) => <Link className="mx-2 font-bold" to={`/tag/${tag}`} key={tag}>#{tag}</Link>)}
        </div>
      </div>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    sanityBlogPost(id: { eq: $id }) {
      title
      releaseDate
      content
      tags {
        tagTitle
      }
    }
  }
`

export default BlogLayout