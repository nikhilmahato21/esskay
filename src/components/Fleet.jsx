const vehicles = [
  {
    badge: 'SEDAN',
    badgeColor: '#E8A400',
    name: 'MARUTI DZIRE / HONDA AMAZE',
    bestFor: 'CITY & INTERCITY',
    seats: 4,
    tags: ['AC', 'COMFORTABLE', 'ECONOMICAL', 'GPS TRACKED'],
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1777458600/dzire_kkjx6a.avif',
    desc: 'Perfect for 1–4 passengers. Fuel-efficient and comfortable for both city rides and outstation trips.',
    startFrom: 'From ₹1,000',
  },
  {
    badge: 'MPV',
    badgeColor: '#2563EB',
    name: 'MARUTI ERTIGA',
    bestFor: 'FAMILY & GROUPS',
    seats: 7,
    tags: ['7 SEATER', 'AC', 'SPACIOUS', 'LUGGAGE SPACE'],
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1777915229/73237259_lnihp4-removebg-preview_w4eo3x.png',
    desc: '7-seater MPV ideal for family outings and group trips. Ample luggage boot and comfortable ride.',
    startFrom: 'From ₹1,500',
    featured: true,
  },
  {
    badge: 'SUV',
    badgeColor: '#7C3AED',
    name: 'TOYOTA INNOVA',
    bestFor: 'PREMIUM OUTSTATION',
    seats: 7,
    tags: ['7 SEATER', 'AC', 'PREMIUM RIDE', 'LARGE BOOT'],
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1777914909/innova_fxry8l.avif',
    desc: 'The most reliable choice for long-distance journeys. Premium interiors, smooth ride, great space.',
    startFrom: 'From ₹2,500',
  },
]

const PeopleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
)

export default function Fleet() {
  return (
    <section id="fleet" className="bg-white py-20 px-6 lg:px-10 border-t-4 border-t-gold">
      <div className="max-w-screen-xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[10px] font-black tracking-[3px] text-gold uppercase mb-2">OUR FLEET</p>
            <h2 className="font-dm font-black text-4xl sm:text-5xl text-steel uppercase leading-tight tracking-tight">
              CHOOSE YOUR<br />VEHICLE
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs leading-relaxed sm:text-right">
            All vehicles are AC, GPS-tracked and driven by verified, experienced drivers.
          </p>
        </div>

        {/* Vehicle grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                v.featured
                  ? 'border-t-4 border-t-gold bg-steel text-white'
                  : 'bg-white text-steel border-r border-gray-200 last:border-r-0'
              } ${i === 0 ? '' : 'md:border-l md:border-l-gray-200'}`}
            >
              {v.featured && (
                <div className="bg-gold text-steel text-[9px] font-black tracking-[2.5px] uppercase text-center py-1.5">
                  ★ MOST POPULAR
                </div>
              )}

              {/* Image */}
              <div className={`flex items-center justify-center p-6 ${v.featured ? 'bg-steel-light' : 'bg-smoke'}`} style={{ height: '180px' }}>
                <img
                  src={v.image}
                  alt={v.name}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                {/* Badge + seats */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[9px] font-black tracking-[2px] uppercase px-2.5 py-1"
                    style={{
                      color: v.featured ? '#E8A400' : v.badgeColor,
                      backgroundColor: v.featured ? 'rgba(232,164,0,0.15)' : v.badgeColor + '18',
                      border: `1px solid ${v.featured ? 'rgba(232,164,0,0.3)' : v.badgeColor + '44'}`,
                    }}
                  >
                    {v.badge}
                  </span>
                  <div className={`flex items-center gap-1 text-xs font-semibold ${v.featured ? 'text-white/60' : 'text-gray-400'}`}>
                    <PeopleIcon /> {v.seats} Seats
                  </div>
                </div>

                {/* Name */}
                <h3 className={`font-black text-sm tracking-wider uppercase leading-tight ${v.featured ? 'text-white' : 'text-steel'}`}>
                  {v.name}
                </h3>

                {/* Best for */}
                <p className={`text-[10px] font-bold tracking-[2px] uppercase ${v.featured ? 'text-gold' : 'text-gold'}`}>
                  BEST FOR: {v.bestFor}
                </p>

                {/* Desc */}
                <p className={`text-[13px] leading-relaxed ${v.featured ? 'text-white/70' : 'text-gray-500'}`}>
                  {v.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {v.tags.map(tag => (
                    <span
                      key={tag}
                      className={`flex items-center gap-1 text-[9px] tracking-wider font-bold uppercase px-2 py-1 ${
                        v.featured
                          ? 'bg-white/10 text-white/70 border border-white/20'
                          : 'bg-gray-100 text-gray-500 border border-gray-200'
                      }`}
                    >
                      <CheckIcon />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className={`border-t mt-auto pt-4 flex items-center justify-between ${v.featured ? 'border-white/15' : 'border-gray-100'}`}>
                  <p className={`font-black text-lg ${v.featured ? 'text-gold' : 'text-steel'}`}>
                    {v.startFrom}
                  </p>
                  <a
                    href="#contact"
                    className={`text-[11px] font-black tracking-wider uppercase transition-colors no-underline px-4 py-1.5 rounded-full border ${
                      v.featured ? 'border-gold text-gold hover:bg-gold hover:text-steel' : 'border-gold text-gold hover:bg-gold hover:text-steel'
                    }`}
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-gray-200 bg-cream px-6 py-4">
          <div className="flex flex-wrap gap-6">
            {[
              'Toll charges extra',
              'Driver allowance extra for outstation',
              'Night charges applicable',
              'All prices include AC & driver',
            ].map(note => (
              <span key={note} className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                {note}
              </span>
            ))}
          </div>
          <a href="#pricing" className="text-[11px] font-black text-gold tracking-widest uppercase hover:text-gold-dark no-underline transition-colors">
            VIEW ALL PRICES →
          </a>
        </div>
      </div>
    </section>
  )
}
