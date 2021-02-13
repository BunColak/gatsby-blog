import React from 'react'
import { graphql, Link } from 'gatsby'
import marked from 'marked'
import hljs from 'highlight.js'
import Layout from './layout'
import SEO from './seo'

marked.use({
  highlight: (code, language) => {
    return hljs.highlightAuto(code).value
  }
})

const BlogLayout = ({ data }) => {
  const post = data.sanityBlogPost
  const tags = post.tags || []

  const content = marked(post.content)

  return (
    <Layout>
      <SEO title={post.title} description={post.content.substring(0, 200)} />
      <h1 className="mb-2 text-center">{post.title}</h1>
      <div className="mb-4 text-sm text-center text-gray-600 dark:text-gray-400">
        {post.releaseDate}
        <div className="flex flex-wrap justify-center">
          {tags.map(({ tagTitle: tag }) => <Link className="mx-2 font-bold" to={`/tag/${tag}`} key={tag}>#{tag}</Link>)}
        </div>
      </div>
      <div className="markdown-body dark:text-gray-200" dangerouslySetInnerHTML={{ __html: content }} />
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
