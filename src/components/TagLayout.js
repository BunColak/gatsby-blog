import React from 'react'
import Layout from './layout';
import SEO from './seo';
import PostListItem from './PostListItem';

const TagLayout = ({data, pageContext}) => {
    const posts = data.allMarkdownRemark
    const tag = pageContext.tag
    
    return (
        <Layout>
            <SEO title={`#${tag}`} />
            {posts.edges.map(({node}) => {
                return <PostListItem key={node.id} node={node} />
            })}
        </Layout>
    )
}

export const query = graphql`
  query($tag: String!){
    allMarkdownRemark(filter: {frontmatter: {tags: {in: [$tag]}}}) {
      edges {
        node {
          frontmatter {
            title
            date
            tags
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



export default TagLayout
