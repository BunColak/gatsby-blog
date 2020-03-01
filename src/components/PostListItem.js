import React from 'react'
import { Link } from 'gatsby'

const PostListItem = ({ node }) => {
    const tags = node.frontmatter.tags || []

    return (
        <>
            <div className="mt-10">
                <Link className="text-lg" to={node.fields.slug}>{node.frontmatter.title}</Link>
                <div className="text-gray-600 text-sm flex mb-4 lg:mb-2">
                    <div>{node.frontmatter.date}</div>
                    <div className="flex flex-wrap justify-start">
                        {tags.map(tag => <Link className="ml-4 italic text-gray-600" to={`/${tag}`} key={tag}>#{tag}</Link>)}
                    </div>
                </div>
                <p className="leading-snug text-sm text-gray-900 mt-1">{node.excerpt}</p>
            </div>
        </>
    )
}

export default PostListItem
