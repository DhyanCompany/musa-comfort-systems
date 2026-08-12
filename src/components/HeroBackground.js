import OptimizedImage from './OptimizedImage'

export default function HeroBackground({
  src,
  alt,
  priority = false,
  imageClassName = '',
}) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-secondary">
      <OptimizedImage
        src={src}
        alt={alt}
        priority={priority}
        sizes="100vw"
        quality={80}
        className={`hero-bg-image ${imageClassName}`.trim()}
      />
    </div>
  )
}
