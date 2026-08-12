export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Initial HVAC Consultation and Assessment',
      description:
        'We begin with a thorough assessment of your home comfort needs and existing HVAC systems to understand your requirements.',
    },
    {
      number: '02',
      title: 'Customized HVAC Solutions',
      description:
        'Based on our assessment, we develop tailored HVAC solutions that address your specific heating, cooling, and water needs.',
    },
    {
      number: '03',
      title: 'Professional HVAC Installation and Service',
      description:
        'Our certified technicians execute the installation or service with precision, ensuring optimal performance and efficiency.',
    },
    {
      number: '04',
      title: 'Follow-Up and HVAC Support',
      description:
        'We provide ongoing support and maintenance to ensure your HVAC systems continue to operate at peak performance.',
    },
  ]

  return (
    <section id="process" className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="section-title">How We Deliver Exceptional HVAC Services</h2>
          <p className="section-subtitle">
            Our proven process ensures you receive the best HVAC solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group text-center bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 border border-transparent hover:border-primary/25 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold mx-auto mb-5 transition-transform duration-300 group-hover:scale-110">
                {step.number}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
