export default function ServiceArea() {
  const cities = [
    'Hamilton', 'Burlington', 'Oakville', 'Guelph', 'Cambridge', 'Kitchener',
    'Waterloo', 'Brantford', 'Woodstock', 'London', 'Mississauga', 'Brampton',
    'Toronto', 'Vaughan', 'Markham', 'Richmond Hill', 'Collingwood', 'Barrie',
    'Innisfil', 'Newmarket', 'Aurora', 'Shelburne', 'Orangeville', 'Ajax',
    'Pickering', 'Whitby', 'Oshawa',
  ]

  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">HVAC Services Across Ontario</h2>
          <p className="section-subtitle">
            From Toronto to London, Musa Comfort Systems provides top-tier HVAC services to homes across Ontario.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-card p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {cities.map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-2.5 sm:p-3 bg-surface rounded-lg hover:bg-primary hover:text-white hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-default text-sm sm:text-base"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium truncate">{city}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12">
          <a href="/service-area" className="btn-primary text-lg hover:scale-105">
            View Full Service Area
          </a>
        </div>
      </div>
    </section>
  )
}
