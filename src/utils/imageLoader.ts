interface ImageLoaderProps {
  src: string;
  width?: number;  // Make width optional since we're not using it
  quality?: number; // Make quality optional since we're not using it
}

export default function imageLoader({ src }: ImageLoaderProps): string {
  // If the source is a remote URL, return it directly
  if (src.startsWith('http')) {
    return src
  }
  
  // For local images, prepend the base path if it exists
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  return `${basePath}${src}`
}