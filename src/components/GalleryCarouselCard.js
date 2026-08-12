'use client'

import { useState } from 'react'
import OptimizedImage from './OptimizedImage'

export default function GalleryCarouselCard({
  title,
  category,
  images,
  description,
  details = [],
  imageHeight = 'h-44 sm:h-48',
}) {
  const [current, setCurrent] = useState(0)

  const goTo = (index) => {
    setCurrent((index + images.length) % images.length)
  }

  return (
    <div className="group card service-card">
      <div className={`relative bg-gray-200 overflow-hidden ${imageHeight}`}>
        <OptimizedImage
          src={images[current]}
          alt={`${title} - photo ${current + 1}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          quality={70}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-xl"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-xl"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === current ? 'bg-primary' : 'bg-white/70'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <div className="text-xs sm:text-sm font-semibold text-primary mb-1 uppercase">{category}</div>
        <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-3">{description}</p>
        {details.length > 0 && (
          <ul className="text-sm text-gray-600 space-y-1">
            {details.map((detail, index) => (
              <li key={index}>• {detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
