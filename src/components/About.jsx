import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

const STATS = [
  { value: 10, suffix: '+',  label: 'Years in Service',       bg: 'bg-steel', text: 'text-white', sub: 'text-white/40' },
  { value: 22, suffix: '+',  label: 'Destinations Covered',   bg: 'bg-gold',  text: 'text-steel', sub: 'text-steel/50' },
  { value: 5000, suffix: '+', label: 'Happy Passengers',      bg: 'bg-smoke', text: 'text-steel', sub: 'text-gray-400' },
  { value: 24,  suffix: '/7', label: 'Availability',          bg: 'bg-steel', text: 'text-gold',  sub: 'text-white/40' },
]

const reasons = [
  { title: 'Fixed Transparent Prices', desc: 'What you see is what you pay. Our fare chart is public — no hidden charges ever.' },
  { title: 'Experienced Local Drivers', desc: 'All drivers are from Surat, know the routes, and are trained for professional conduct.' },
  { title: 'Clean, Well-Maintained Fleet', desc: 'Our Sedan, Ertiga and Innova are sanitised regularly and serviced on schedule.' },
  { title: 'Always On Time', desc: 'We value your schedule. Pre-booked rides are always dispatched early.' },
]

function Counter({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const step = value / (duration / 16)
    let cur = 0
    const timer = setInterval(() => {
      cur += step
      if (cur >= value) { setDisplay(value); clearInterval(timer) }
      else setDisplay(Math.floor(cur))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <>{display}{suffix}</>
}

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
)

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="bg-cream py-24 px-6 lg:px-10 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <p className={`text-[10px] font-black tracking-[3px] text-gold uppercase mb-3 anim-up ${inView ? 'in-view' : ''}`}>
            04 — ABOUT US
          </p>
          <h2 className={`font-dm font-black text-steel uppercase leading-[0.88] tracking-tighter anim-up d1 ${inView ? 'in-view' : ''}`}
            style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
            SURAT'S<br />TRUSTED<br />CAB SERVICE
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — text */}
          <div>
            <div className={`w-16 h-1 bg-gold mb-8 anim-up ${inView ? 'in-view' : ''} d1`} />
            <p className={`text-gray-600 text-lg leading-relaxed mb-5 anim-up d2 ${inView ? 'in-view' : ''}`}>
              <strong className="text-steel">ESSKAY TRAVELS</strong> has been serving passengers in and around Surat for over a decade. We started with a single car and a commitment to punctuality and honesty — values we still hold at the core of everything we do.
            </p>
            <p className={`text-gray-600 text-base leading-relaxed mb-10 anim-up d3 ${inView ? 'in-view' : ''}`}>
              Whether you need a quick ride to Hajira or a long journey to Goa, we have the right vehicle and the right driver for you. Our fixed-rate fare chart means you always know your price before you book.
            </p>

            <div className="space-y-3">
              {reasons.map((r, i) => {
                const ds = ['d2','d3','d4','d5']
                return (
                  <div key={i}
                    className={`flex gap-4 p-5 bg-white border border-gray-100 hover:border-gold/40 hover:shadow-md rounded-2xl transition-all duration-300 anim-up ${ds[i]} ${inView ? 'in-view' : ''}`}>
                    <div className="w-8 h-8 bg-gold flex items-center justify-center flex-shrink-0 text-steel mt-0.5">
                      <CheckIcon />
                    </div>
                    <div>
                      <p className="font-black text-steel text-sm uppercase tracking-wide mb-1">{r.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right — stats + info */}
          <div className={`anim-right d2 ${inView ? 'in-view' : ''}`}>

            {/* Animated stats grid */}
            <div className="grid grid-cols-2 rounded-2xl overflow-hidden shadow-lg mb-6">
              {STATS.map((s, i) => (
                <div key={i}
                  className={`p-8 flex flex-col gap-2 ${s.bg} ${i < 2 ? 'border-b border-white/10' : ''} ${i % 2 === 0 ? 'border-r border-white/10' : ''} group`}>
                  <p className={`font-black leading-none ${s.text} ${inView ? 'num-pop' : 'opacity-0'}`}
                    style={{ fontSize: 'clamp(36px, 5vw, 60px)', animationDelay: `${i * 150}ms` }}>
                    <Counter value={s.value} suffix={s.suffix} inView={inView} />
                  </p>
                  <p className={`text-[10px] tracking-[2px] font-black uppercase ${s.sub}`}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="bg-steel text-white p-7 mb-4 rounded-2xl">
              <p className="text-[10px] font-black tracking-[2.5px] uppercase text-gold mb-3">FIND US</p>
              <p className="font-black text-xl uppercase tracking-wide mb-2">ESSKAY TRAVELS</p>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Based in Surat, Gujarat.<br />Serving Gujarat, Maharashtra &amp; beyond.
              </p>
              <a href="https://maps.app.goo.gl/fPfHxFgDc6bzKH8X8" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-steel px-6 py-2.5 rounded-full font-black text-[12px] uppercase tracking-wider no-underline hover:bg-gold-light transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                VIEW ON MAP
              </a>
            </div>

            {/* Testimonial */}
            <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#E8A400">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
                <span className="text-[10px] text-gray-400 ml-1 font-bold uppercase tracking-wide">5.0 · Google</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic">
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
