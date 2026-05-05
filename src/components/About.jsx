const stats = [
  { value: '10+', label: 'Years in Service', bg: 'bg-steel', text: 'text-white', sub: 'text-white/50' },
  { value: '22+', label: 'Destinations Covered', bg: 'bg-gold', text: 'text-steel', sub: 'text-steel/60' },
  { value: '5000+', label: 'Happy Passengers', bg: 'bg-smoke', text: 'text-steel', sub: 'text-gray-400' },
  { value: '24/7', label: 'Availability', bg: 'bg-steel', text: 'text-gold', sub: 'text-white/50' },
]

const reasons = [
  { title: 'Fixed Transparent Prices', desc: 'What you see is what you pay. Our fare chart is public and there are no hidden charges.' },
  { title: 'Experienced Local Drivers', desc: 'All drivers are from Surat, know the routes well, and are trained for professional behavior.' },
  { title: 'Clean, Well-Maintained Fleet', desc: 'Our Sedan, Ertiga and Innova are sanitised regularly and serviced on schedule.' },
  { title: 'Always On Time', desc: 'We value your schedule. Pre-booked rides are always dispatched early.' },
]

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
)

export default function About() {
  return (
    <section id="about" className="bg-cream py-20 px-6 lg:px-10 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] font-black tracking-[3px] text-gold uppercase mb-2">ABOUT US</p>
            <h2 className="font-dm font-black text-4xl sm:text-5xl text-steel uppercase leading-tight tracking-tight mb-6">
              SURAT'S<br />RELIABLE<br />CAB SERVICE
            </h2>

            {/* Accent line */}
            <div className="w-16 h-1 bg-gold mb-6" />

            <p className="text-gray-600 text-base leading-relaxed mb-5">
              <strong className="text-steel">ESSKAY TRAVELS</strong> has been serving passengers in and around Surat for over a decade. We started with a single car and a commitment to punctuality and honesty — values we still hold at the core of everything we do.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Whether you need a quick ride to Hajira or a long journey to Goa, we have the right vehicle and the right driver for you. Our fixed-rate fare chart means you always know your price before you book.
            </p>

            <div className="space-y-4">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white border border-gray-100 hover:border-gold/30 transition-colors">
                  <div className="w-8 h-8 bg-gold flex items-center justify-center flex-shrink-0 text-steel mt-0.5">
                    <CheckIcon />
                  </div>
                  <div>
                    <p className="font-black text-steel text-sm uppercase tracking-wide mb-0.5">{r.title}</p>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats grid */}
          <div>
            <div className="grid grid-cols-2 gap-0 border-2 border-steel mb-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`p-8 flex flex-col gap-2 ${s.bg} ${i === 1 || i === 2 ? '' : ''} ${i < 2 ? 'border-b-2 border-steel' : ''} ${i % 2 === 0 ? 'border-r-2 border-steel' : ''}`}
                >
                  <p className={`font-black text-4xl xl:text-5xl leading-none ${s.text}`}>
                    {s.value}
                  </p>
                  <p className={`text-[11px] tracking-[2px] font-bold uppercase ${s.sub}`}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Map / Address card */}
            <div className="bg-steel text-white p-6">
              <p className="text-[10px] font-black tracking-[2.5px] uppercase text-gold mb-3">FIND US</p>
              <p className="font-black text-lg uppercase tracking-wide mb-2">ESSKAY TRAVELS</p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Based in Surat, Gujarat.<br />Serving all of Gujarat, Maharashtra & beyond.
              </p>
              <a
                href="https://maps.app.goo.gl/fPfHxFgDc6bzKH8X8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-steel px-5 py-2.5 font-black text-[12px] uppercase tracking-wider no-underline hover:bg-gold-light transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                VIEW ON MAP
              </a>
            </div>

            {/* Testimonial card */}
            <div className="mt-4 bg-white border border-gray-200 p-6">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#E8A400">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
                <span className="text-[10px] text-gray-400 ml-1 font-bold uppercase tracking-wide">5.0 · Google</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "Booked ESSKAY for Surat to Mumbai. Driver was on time, car was clean, price was exactly as quoted. Will book again!"
              </p>
              <p className="text-steel font-black text-xs mt-3 uppercase tracking-wide">— Priya S., Surat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
