export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial HVAC Consultation and Assessment",
      description: "We begin with a thorough assessment of your home comfort needs and existing HVAC systems to understand your requirements."
    },
    {
      number: "02", 
      title: "Customized HVAC Solutions",
      description: "Based on our assessment, we develop tailored HVAC solutions that address your specific heating, cooling, and water needs."
    },
    {
      number: "03",
      title: "Professional HVAC Installation and Service", 
      description: "Our certified technicians execute the installation or service with precision, ensuring optimal performance and efficiency."
    },
    {
      number: "04",
      title: "Follow-Up and HVAC Support",
      description: "We provide ongoing support and maintenance to ensure your HVAC systems continue to operate at peak performance."
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            How We Deliver Exceptional HVAC Services in Greater Toronto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures you receive the best HVAC solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
