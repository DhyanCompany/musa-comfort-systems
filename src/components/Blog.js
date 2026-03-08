import Image from 'next/image'

export default function Blog() {
  const blogPosts = [
    {
      title: "Heat Pump Not Working? A Toronto Homeowner's Troubleshooting Guide",
      description: "Learn how to troubleshoot common heat pump issues and when to call for professional HVAC service.",
      image: "https://images.unsplash.com/photo-1584308796739-7c1e8a208dfc?w=600&h=400&fit=crop",
      date: "2 weeks ago"
    },
    {
      title: "Furnace Replacement in Toronto: Your Step-by-Step Guide from Quote to Installation",
      description: "Complete guide to furnace replacement process, costs, and what to expect during installation.",
      image: "https://images.unsplash.com/photo-1605281317010-fe0b331db992?w=600&h=400&fit=crop",
      date: "1 month ago"
    },
    {
      title: "Stop! Don't Rent a Furnace in Toronto or Ottawa Until You Read This",
      description: "Important considerations before renting a furnace - costs, benefits, and alternatives to consider.",
      image: "https://images.unsplash.com/photo-1621905251189-48b8e399b5aa?w=600&h=400&fit=crop",
      date: "1 month ago"
    }
  ]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            HVAC Insights & Heating and Cooling Tips from Our Blog
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed with the latest HVAC tips, energy-saving advice, and heating and cooling insights. Explore our blog for expert guidance and practical HVAC solutions to keep your home running efficiently year-round.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
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
