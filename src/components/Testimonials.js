export default function Testimonials() {
  const testimonials = [
    {
      name: "Linda T.",
      rating: 5,
      text: "Excellent service! The technicians were professional, knowledgeable, and completed our furnace installation perfectly. Highly recommend!",
      time: "3 months ago"
    },
    {
      name: "James R.",
      rating: 5,
      text: "Outstanding experience from start to finish. They installed our new air conditioner and it works great. Very professional team.",
      time: "2 months ago"
    },
    {
      name: "Sarah M.",
      rating: 5,
      text: "Great customer service and competitive pricing. They repaired our water heater quickly and efficiently. Will definitely use again.",
      time: "1 month ago"
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="text-6xl font-bold text-primary mb-4">03</div>
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Customer Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Hear from satisfied homeowners who trust our company for their HVAC services. Discover why our prompt heating and cooling solutions, expert HVAC service, and friendly approach make us the go-to choice for year-round comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <div className="font-semibold text-secondary">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="btn-primary">
              Read More Testimonials
            </a>
            <a href="#" className="btn-secondary">
              Write a Review
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
