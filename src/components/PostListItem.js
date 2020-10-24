import React from 'react'
import { Link } from 'gatsby'
import { generateExcerpt } from '../utils'

const PostListItem = ({ node }) => {
    const tags = node.tags || []

    return (
        <>
            <div className="mt-10">
                <Link className="text-lg" to={`/${node.slug.current}`}>{node.title}</Link>
                <div className="text-gray-600 text-sm flex mb-4 lg:mb-2">
                    <div>{node.releaseDate}</div>
                    <div className="flex flex-wrap justify-start">
                        {tags.map(({tagTitle: tag}) => <Link className="ml-4 italic text-gray-600" to={`/tag/${tag}`} key={tag}>#{tag}</Link>)}
                    </div>
                </div>
                <div className="leading-snug text-sm text-gray-900 mt-1" dangerouslySetInnerHTML={{__html:  generateExcerpt(node.content)}} />
            </div>
        </>
    )
}

export default PostListItem
