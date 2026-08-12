'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
  className = 'object-cover',
  quality = 75,
  fill = true,
  width,
  height,
}) {
  const [loaded, setLoaded] = useState(false)
  const isLoaded = loaded || priority

  const imageClassName = `${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`

  const sharedProps = {
    src,
    alt,
    quality,
    priority,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    onLoad: () => setLoaded(true),
    className: imageClassName,
  }

  if (fill) {
    return (
      <>
        {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />}
        <Image {...sharedProps} fill sizes={sizes} />
      </>
    )
  }

  return (
    <Image
      {...sharedProps}
      width={width}
      height={height}
      sizes={sizes}
    />
  )
}
