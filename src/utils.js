import marked from 'marked'

const generateExcerpt = (content) => marked(`${content.substring(0, 300).trim()}...`)

export { generateExcerpt }
