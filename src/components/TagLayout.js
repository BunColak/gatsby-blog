import React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import SEO from './seo'
import PostListItem from './PostListItem'

const TagLayout = ({ data, pageContext }) => {
  const posts = data.allSanityBlogPost
  const tag = pageContext.tag

  return (
        <Layout>
            <SEO title={`#${tag}`} />
            {posts.edges.map(({ node }) => {
              return <PostListItem key={node.id} node={node} />
            })}
        </Layout>
  )
}

export const query = graphql`
  query($tag: String!){
    allSanityBlogPost(filter: {tags: {elemMatch: {tagTitle: {eq: $tag}}}}) {
      edges {
        node {
            title
            slug {
              current
            }
            releaseDate
            tags {
              tagTitle
            }
            content
        }
      }
    }
  }
`

export default TagLayout
