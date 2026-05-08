import { useInView } from '../hooks/useInView'

const CityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const RouteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 000-7H5.5a3.5 3.5 0 010-7H16"/><circle cx="18" cy="5" r="3"/>
  </svg>
)
const CarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2"/>
    <circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
  </svg>
)
const AirportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
)
const GroupIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)

const services = [
  { icon: CityIcon,    num: '01', name: 'Local City Taxi',       sub: 'WITHIN SURAT',              desc: 'Fast, reliable city rides across Surat. Airport drops, market visits, office commutes — always on time.', cta: 'From ₹800', featured: true },
  { icon: RouteIcon,   num: '02', name: 'Intercity Travel',      sub: 'SURAT TO ANY DESTINATION',  desc: 'Fixed-rate rides to Mumbai, Ahmedabad, Pune, Goa, and 20+ destinations across India.',             cta: 'Fixed Rates' },
  { icon: AirportIcon, num: '03', name: 'Airport Transfer',      sub: 'SURAT AIRPORT · MUMBAI',    desc: 'Punctual pickup and drop to Surat & Mumbai Airport. Pre-book for zero stress.',                    cta: 'Book Ahead' },
  { icon: CarIcon,     num: '04', name: 'One-Way Outstation',    sub: 'SURAT TO ANYWHERE',         desc: 'Only paying one-way? No problem — transparent one-way drop rates with no return baggage.',          cta: 'One-Way Rates' },
  { icon: ClockIcon,   num: '05', name: '24/7 On-Call',          sub: 'ROUND THE CLOCK',           desc: 'Emergency travel? Late night? Early morning? ESSKAY is available 24 hours, 7 days a week.',        cta: 'Always Open' },
  { icon: GroupIcon,   num: '06', name: 'Group & Family Trips',  sub: 'ERTIGA · INNOVA · FLEET',   desc: 'Travel together in comfort. Book an Ertiga or Innova for family vacations or group outings.',      cta: 'Up to 7 Seats' },
]

export default function Services() {
  const [ref, inView] = useInView()

  return (
    <section id="services" className="bg-cream py-24 px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className={`text-[10px] font-black tracking-[3px] text-gold uppercase mb-3 anim-up ${inView ? 'in-view' : ''}`}>
              02 — WHAT WE OFFER
            </p>
            <h2 className={`font-dm font-black text-steel uppercase leading-[0.88] tracking-tighter anim-up d1 ${inView ? 'in-view' : ''}`}
              style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}>
              OUR<br />SERVICES
            </h2>
          </div>
          <p className={`text-gray-400 text-sm max-w-xs leading-relaxed sm:text-right anim-up d2 ${inView ? 'in-view' : ''}`}>
            From quick city rides to long-distance intercity travel — ESSKAY covers it all.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            const delays = ['', 'd1', 'd2', 'd3', 'd4', 'd5']
            return (
              <div key={i}
                className={`group relative p-8 flex flex-col gap-5 cursor-pointer overflow-hidden transition-all duration-400 rounded-2xl anim-up ${delays[i]} ${inView ? 'in-view' : ''} ${
                  s.featured ? 'bg-steel shadow-xl' : 'bg-white hover:bg-steel border border-gray-100 hover:border-transparent shadow-sm hover:shadow-xl'
                }`}>

                {/* Ghost number */}
                <span className={`absolute -top-4 -right-2 font-black text-[80px] leading-none select-none pointer-events-none transition-colors duration-400 ${
                  s.featured ? 'text-white/5' : 'text-gray-100 group-hover:text-white/5'
                }`}>{s.num}</span>

                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  s.featured ? 'bg-gold text-steel' : 'bg-smoke text-steel group-hover:bg-gold group-hover:text-steel'
                }`}>
                  <Icon />
                </div>

                {s.featured && (
                  <span className="self-start text-[9px] font-black tracking-[2px] uppercase px-2.5 py-1 bg-gold/20 text-gold border border-gold/30">
                    ★ MOST BOOKED
                  </span>
                )}

                <div className="flex-1 relative z-10">
                  <p className="text-gold text-[9px] font-black tracking-[2px] uppercase mb-2">{s.sub}</p>
                  <h3 className={`font-black uppercase text-lg leading-tight mb-3 transition-colors duration-300 ${
                    s.featured ? 'text-white' : 'text-steel group-hover:text-white'
                  }`}>{s.name}</h3>
                  <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                    s.featured ? 'text-white/60' : 'text-gray-500 group-hover:text-white/60'
                  }`}>{s.desc}</p>
                </div>

                <div className={`border-t pt-4 flex items-center justify-between transition-colors duration-300 relative z-10 ${
                  s.featured ? 'border-white/15' : 'border-gray-100 group-hover:border-white/15'
                }`}>
                  <p className={`font-black text-sm transition-colors duration-300 ${
                    s.featured ? 'text-gold' : 'text-steel group-hover:text-gold'
                  }`}>{s.cta}</p>
                  <a href="#contact"
                    className={`text-[10px] font-black tracking-wider uppercase no-underline transition-all duration-300 px-4 py-1.5 rounded-full border ${
                      s.featured
                        ? 'border-gold/40 text-gold hover:bg-gold hover:text-steel hover:border-gold'
                        : 'border-gray-200 text-gray-400 group-hover:border-gold group-hover:text-gold hover:bg-gold hover:text-steel'
                    }`}>
                    BOOK →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div className={`mt-6 bg-gold p-7 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5 anim-up d3 ${inView ? 'in-view' : ''}`}>
          <div>
            <p className="font-black text-steel uppercase tracking-wide text-xl">Not sure which service to book?</p>
            <p className="text-steel/60 text-sm mt-1">Call or WhatsApp — we'll help you find the right option.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:+919109105155"
              className="bg-steel text-white px-7 py-3 rounded-full font-black text-[13px] uppercase tracking-wider no-underline hover:bg-steel-light transition-colors">
              CALL NOW
            </a>
            <a href="https://wa.me/+919109105155" target="_blank" rel="noopener noreferrer"
              className="border-2 border-steel text-steel px-7 py-3 rounded-full font-black text-[13px] uppercase tracking-wider no-underline hover:bg-steel hover:text-white transition-colors">
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
