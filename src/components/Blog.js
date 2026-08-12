import OptimizedImage from './OptimizedImage'

export default function Blog() {
  const blogPosts = [
    {
      title: "Heat Pump Not Working? A Toronto Homeowner's Troubleshooting Guide",
      excerpt: "Common heat pump issues and how to fix them quickly and safely.",
      image: "/heat-pump-troubleshooting-guide.jpg",
      date: "March 15, 2026"
    },
    {
      title: "Furnace Replacement in Toronto: Your Step-by-Step Guide from Quote to Installation",
      description: "Complete guide to furnace replacement process, costs, and what to expect during installation.",
      image: "/OIP (8).webp",
      date: "1 month ago"
    },
    {
      title: "Stop! Don't Rent a Furnace in Toronto or Ottawa Until You Read This",
      description: "Important considerations before renting a furnace - costs, benefits, and alternatives to consider.",
      image: "/Cheaper-1.jpg",
      date: "1 month ago"
    }
  ]

  return (
    <section id="blog" className="section-spacing bg-white">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="section-title">HVAC Insights & Tips from Our Blog</h2>
          <p className="section-subtitle">
            Stay informed with the latest HVAC tips, energy-saving advice, and heating and cooling insights. Explore our blog for expert guidance and practical HVAC solutions to keep your home running efficiently year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="card">
              <div className="h-44 sm:h-48 relative bg-gray-200">
                <OptimizedImage src={post.image} alt={post.title} quality={70} />
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2 sm:mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{post.description || post.excerpt}</p>
                <a href="#" className="text-primary font-semibold hover:text-primary/90 transition-colors">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-secondary text-lg">
            View All Blog Posts
          </a>
        </div>
      </div>
    </section>
  )
}
