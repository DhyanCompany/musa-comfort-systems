import OptimizedImage from './OptimizedImage'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#f7fcff] via-white to-[#dff3ff] pt-24 md:pt-32">
      <div className="absolute right-0 top-0 h-full w-[49%] hidden lg:block bg-secondary" />
      <div className="relative container-custom grid lg:grid-cols-[.92fr_1.08fr] items-center min-h-[620px] lg:min-h-[590px] gap-8 py-12 lg:py-0">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow mb-4">Your comfort is our priority</p>
          <h1 className="font-bold leading-[1.05] tracking-tight mb-5">
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-secondary">Reliable Heating &amp; Cooling</span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-primary mt-1">for Your Home or Business</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mb-6">
            Professional HVAC solutions across Ontario. Quality work, honest service, and customer satisfaction on every visit.
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-7 text-secondary">
            {[['✓', 'TSSA Approved'], ['10+', 'Years Experience'], ['⌂', 'Residential & Commercial']].map(([icon, label]) => (
              <div key={label} className="text-center sm:text-left">
                <div className="font-extrabold text-lg text-primary">{icon}</div>
                <div className="text-[11px] sm:text-xs font-bold leading-tight">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/contact" className="btn-primary hover:scale-[1.02]">Get a Free Quote&nbsp; →</a>
            <a href="tel:647-929-1730" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary py-3 px-6 min-h-[44px] font-bold text-secondary hover:bg-primary hover:text-white transition-all">☎ &nbsp;647-929-1730</a>
          </div>
        </div>
        <div className="relative h-[300px] sm:h-[390px] lg:h-[590px] lg:-mr-8 overflow-hidden rounded-2xl lg:rounded-none shadow-2xl">
          <OptimizedImage src="/musa-comfort-fleet.jpeg" alt="Musa Comfort Systems service vehicle" priority sizes="(max-width: 1024px) 100vw, 60vw" quality={88} className="object-cover object-[58%_top]" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/35 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-secondary/95 p-4 text-white shadow-xl">
            <p className="font-bold text-sm text-accent uppercase tracking-wider">Complete HVAC Services</p>
            <p className="font-semibold text-lg">Comfort All Year Round</p>
          </div>
        </div>
      </div>
    </section>
  )
}
