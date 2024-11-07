interface ImageLoaderProps {
  src: string;
  width?: number;
  quality?: number;
}

export default function imageLoader({ src }: ImageLoaderProps): string {
  // If the source is already a full URL, return it as-is
  if (src.startsWith('http')) {
    return src;
  }

  // Remove leading slash if it exists to avoid double slashes
  const cleanSrc = src.startsWith('/') ? src.slice(1) : src;
  
  // Get the base path from env or default to empty string
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  // Combine base path and source path
  return `${basePath}/${cleanSrc}`;
}