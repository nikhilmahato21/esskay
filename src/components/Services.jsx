const CityIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const RouteIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="19" r="3"/>
    <path d="M9 19h8.5a3.5 3.5 0 000-7H5.5a3.5 3.5 0 010-7H16"/>
    <circle cx="18" cy="5" r="3"/>
  </svg>
)
const CarIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v9a2 2 0 01-2 2h-2"/>
    <circle cx="7.5" cy="17.5" r="2.5"/>
    <circle cx="17.5" cy="17.5" r="2.5"/>
  </svg>
)
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
  </svg>
)
const AirportIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
)
const GroupIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)

const services = [
  {
    icon: CityIcon,
    name: 'Local City Taxi',
    sub: 'WITHIN SURAT',
    desc: 'Fast, reliable city rides across Surat. Airport drops, market visits, office commutes — we\'re always on time.',
    cta: 'From ₹800',
    featured: true,
  },
  {
    icon: RouteIcon,
    name: 'Intercity Travel',
    sub: 'SURAT TO ANY DESTINATION',
    desc: 'Comfortable, fixed-rate rides from Surat to Mumbai, Ahmedabad, Pune, Goa, and 20+ destinations.',
    cta: 'Fixed Rates',
  },
  {
    icon: AirportIcon,
    name: 'Airport Transfer',
    sub: 'SURAT AIRPORT · MUMBAI',
    desc: 'Punctual pickup and drop to Surat Airport, Mumbai Airport and beyond. Pre-book for zero stress.',
    cta: 'Book Ahead',
  },
  {
    icon: CarIcon,
    name: 'Outstation One-Way',
    sub: 'SURAT TO ANYWHERE',
    desc: 'Only paying one-way? No problem. We offer one-way drops at transparent rates with no return baggage.',
    cta: 'One-Way Rates',
  },
  {
    icon: ClockIcon,
    name: '24/7 On-Call Service',
    sub: 'ROUND THE CLOCK',
    desc: 'Emergency travel? Late night? Early morning? ESSKAY TRAVELS is available 24 hours a day, 7 days a week.',
    cta: 'Always Open',
  },
  {
    icon: GroupIcon,
    name: 'Group & Family Trips',
    sub: 'ERTIGA · INNOVA · FLEET',
    desc: 'Travel together in comfort. Book an Ertiga or Innova for family vacations, pilgrimages, or group outings.',
    cta: 'Up to 7 Seats',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 px-6 lg:px-10">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[10px] font-black tracking-[3px] text-gold uppercase mb-2">WHAT WE OFFER</p>
            <h2 className="font-dm font-black text-4xl sm:text-5xl text-steel uppercase leading-tight tracking-tight">
              OUR<br />SERVICES
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed sm:text-right">
            From quick city rides to long-distance intercity travel — ESSKAY covers it all.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className={`p-7 flex flex-col gap-4 group hover:bg-steel transition-colors duration-300 cursor-pointer ${
                  s.featured ? 'bg-steel' : 'bg-white'
                }`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors ${
                  s.featured
                    ? 'bg-gold text-steel'
                    : 'bg-smoke text-steel group-hover:bg-gold group-hover:text-steel'
                }`}>
                  <Icon />
                </div>

                {/* Badge */}
                {s.featured && (
                  <span className="self-start text-[9px] font-black tracking-[2px] uppercase px-2.5 py-1 bg-gold/20 text-gold border border-gold/30">
                    ★ MOST BOOKED
                  </span>
                )}

                {/* Text */}
                <div className="flex-1">
                  <h3 className={`font-black uppercase tracking-wider text-[13px] mb-1 transition-colors ${
                    s.featured ? 'text-white' : 'text-steel group-hover:text-white'
                  }`}>
                    {s.name}
                  </h3>
                  <p className={`text-[9px] tracking-[2px] uppercase font-bold mb-3 ${
                    s.featured ? 'text-gold' : 'text-gold'
                  }`}>{s.sub}</p>
                  <p className={`text-[13px] leading-relaxed transition-colors ${
                    s.featured ? 'text-white/65' : 'text-gray-500 group-hover:text-white/65'
                  }`}>
                    {s.desc}
                  </p>
                </div>

                {/* Footer */}
                <div className={`border-t pt-4 flex items-center justify-between transition-colors ${
                  s.featured ? 'border-white/15' : 'border-gray-100 group-hover:border-white/15'
                }`}>
                  <p className={`font-black text-sm transition-colors ${
                    s.featured ? 'text-gold' : 'text-steel group-hover:text-gold'
                  }`}>
                    {s.cta}
                  </p>
                  <a
                    href="#contact"
                    className={`text-[11px] font-black tracking-[2px] uppercase no-underline transition-colors ${
                      s.featured ? 'text-white/60 hover:text-white' : 'text-gray-400 hover:text-white group-hover:text-white/60'
                    }`}
                  >
                    BOOK →
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA banner */}
        <div className="mt-8 bg-gold p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-black text-steel uppercase tracking-wide text-lg">Not sure which service to book?</p>
            <p className="text-steel/70 text-sm mt-1">Call or WhatsApp us — we'll help you find the best option.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:+919109105155"
              className="bg-steel text-white px-6 py-3 font-black text-[13px] uppercase tracking-wider no-underline hover:bg-steel-light transition-colors"
            >
              CALL NOW
            </a>
            <a
              href="https://wa.me/+919109105155"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-steel text-steel px-6 py-3 font-black text-[13px] uppercase tracking-wider no-underline hover:bg-steel hover:text-white transition-colors"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
