export default function imageLoader({ src, width, quality }) {
  // If the source is a remote URL, return it directly
  if (src.startsWith('http')) {
    return src
  }
  
  // For local images, prepend the base path if it exists
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${src}`
}