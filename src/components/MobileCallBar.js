export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-[0_-4px_20px_rgba(0,0,0,0.15)] safe-bottom">
      <div className="grid grid-cols-2 divide-x divide-white/25">
        <a
          href="tel:647-929-1730"
          className="flex items-center justify-center gap-2 py-3.5 px-3 text-white font-bold text-sm active:bg-primary-dark transition-colors"
        >
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 py-3.5 px-3 text-white font-bold text-sm active:bg-primary-dark transition-colors"
        >
          <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Get In Touch
        </a>
      </div>
    </div>
  )
}
