export default function ServiceArea() {
  const cities = [
    "Hamilton", "Burlington", "Oakville", "Guelph", "Cambridge", "Kitchener",
    "Waterloo", "Brantford", "Woodstock", "London", "Mississauga", "Brampton",
    "Toronto", "Vaughan", "Markham", "Richmond Hill", "Collingwood", "Barrie",
    "Innisfil", "Newmarket", "Aurora", "Shelburne", "Orangeville", "Ajax",
    "Pickering", "Whitby", "Oshawa"
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            HVAC Services Proudly Serving Communities Across Ontario
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            From Toronto to London, Musa Comfort Systems provides top-tier HVAC services to homes across multiple Ontario locations. Find out if we're in your area and experience exceptional heating and cooling solutions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="font-medium">{city}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/service-area" className="btn-primary text-lg">
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  )
}
