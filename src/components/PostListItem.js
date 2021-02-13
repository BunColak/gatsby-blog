import React from 'react'
import { Link } from 'gatsby'
import { generateExcerpt } from '../utils'

const PostListItem = ({ node }) => {
  const tags = node.tags || []

  return (
        <>
            <div className="mt-10">
                <Link className="text-lg" to={`/${node.slug.current}`}>{node.title}</Link>
                <div className="flex mb-4 text-sm text-gray-600 lg:mb-2 dark:text-gray-400">
                    <div>{node.releaseDate}</div>
                    <div className="flex flex-wrap justify-start">
                        {tags.map(({ tagTitle: tag }) => <Link className="ml-4 italic text-gray-600 dark:text-gray-400" to={`/tag/${tag}`} key={tag}>#{tag}</Link>)}
                    </div>
                </div>
                <div className="mt-1 text-sm leading-snug text-gray-900 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: generateExcerpt(node.content) }} />
            </div>
        </>
  )
}

export default PostListItem
