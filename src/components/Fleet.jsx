import { useInView } from '../hooks/useInView'

const vehicles = [
  {
    badge: 'SEDAN',
    name: 'MARUTI DZIRE / HONDA AMAZE',
    bestFor: 'CITY & INTERCITY',
    seats: 4,
    tags: ['AC', 'COMFORTABLE', 'ECONOMICAL', 'GPS TRACKED'],
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1777458600/dzire_kkjx6a.avif',
    desc: 'Perfect for 1–4 passengers. Fuel-efficient and comfortable for both city rides and outstation trips.',
    startFrom: 'From ₹1,000',
  },
  {
    badge: 'MPV · MOST POPULAR',
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
    badge: 'PREMIUM SUV',
    name: 'TOYOTA INNOVA',
    bestFor: 'PREMIUM OUTSTATION',
    seats: 7,
    tags: ['7 SEATER', 'AC', 'PREMIUM RIDE', 'LARGE BOOT'],
    image: 'https://res.cloudinary.com/dynbpb9u0/image/upload/v1777914909/innova_fxry8l.avif',
    desc: 'The most reliable choice for long-distance journeys. Premium interiors, smooth ride, great space.',
    startFrom: 'From ₹2,500',
  },
]

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20,6 9,17 4,12"/>
  </svg>
)

export default function Fleet() {
  const [ref, inView] = useInView()

  return (
    <section id="fleet" className="bg-white py-24 px-6 lg:px-10 border-t-4 border-t-gold">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className={`text-[10px] font-black tracking-[3px] text-gold uppercase mb-3 anim-up ${inView ? 'in-view' : ''}`}>
                01 — OUR FLEET
              </p>
              <h2 className={`font-dm font-black text-steel uppercase leading-[0.88] tracking-tighter anim-up d1 ${inView ? 'in-view' : ''}`}
                style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
                CHOOSE<br />YOUR<br />VEHICLE
              </h2>
            </div>
            <p className={`text-gray-400 text-sm max-w-xs leading-relaxed anim-up d2 ${inView ? 'in-view' : ''}`}>
              All vehicles are AC, GPS-tracked and driven by verified, experienced drivers.
            </p>
          </div>
          <div className={`w-full h-px bg-gray-100 mt-10 anim-up d3 ${inView ? 'in-view' : ''}`} />
        </div>

        {/* Vehicles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {vehicles.map((v, i) => (
            <div
              key={i}
              className={`flex flex-col card-lift anim-up rounded-2xl overflow-hidden shadow-md ${inView ? 'in-view' : ''} ${i === 0 ? '' : i === 1 ? 'd2' : 'd3'} ${
                v.featured ? 'bg-steel ring-2 ring-gold' : 'bg-white border border-gray-100'
              }`}
            >
              {v.featured && (
                <div className="bg-gold text-steel text-[9px] font-black tracking-[3px] uppercase text-center py-2">
                  ★ MOST POPULAR
                </div>
              )}

              <div className={`flex items-center justify-center p-8 ${v.featured ? 'bg-steel-light' : 'bg-smoke'}`}
                style={{ height: '200px' }}>
                <img src={v.image} alt={v.name} className="h-full w-full object-contain transition-transform duration-500 hover:scale-105" />
              </div>

              <div className="p-7 flex flex-col gap-5 flex-1">
                <div>
                  <p className="text-gold text-[9px] font-black tracking-[2.5px] uppercase mb-2">{v.badge}</p>
                  <h3 className={`font-black text-base xl:text-lg tracking-wider uppercase leading-tight ${v.featured ? 'text-white' : 'text-steel'}`}>
                    {v.name}
                  </h3>
                  <p className={`text-[10px] font-bold tracking-[2px] uppercase mt-1 ${v.featured ? 'text-white/40' : 'text-gray-400'}`}>
                    BEST FOR: {v.bestFor} · {v.seats} SEATS
                  </p>
                </div>

                <p className={`text-sm leading-relaxed flex-1 ${v.featured ? 'text-white/65' : 'text-gray-500'}`}>
                  {v.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {v.tags.map(tag => (
                    <span key={tag}
                      className={`flex items-center gap-1 text-[9px] tracking-wider font-black uppercase px-2.5 py-1 ${
                        v.featured ? 'bg-white/10 text-white/70 border border-white/20' : 'bg-smoke text-gray-500 border border-gray-200'
                      }`}>
                      <CheckIcon />{tag}
                    </span>
                  ))}
                </div>

                <div className={`border-t pt-5 flex items-center justify-between ${v.featured ? 'border-white/15' : 'border-gray-100'}`}>
                  <div>
                    <p className={`text-[10px] font-bold tracking-[2px] uppercase mb-0.5 ${v.featured ? 'text-white/40' : 'text-gray-400'}`}>STARTING</p>
                    <p className={`font-price font-bold text-2xl ${v.featured ? 'text-gold' : 'text-steel'}`}>{v.startFrom}</p>
                  </div>
                  <a href="#contact"
                    className="text-[11px] font-black tracking-wider uppercase transition-all no-underline px-5 py-2 rounded-full border-2 border-gold text-gold hover:bg-gold hover:text-steel">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes strip */}
        <div className={`mt-6 flex flex-wrap items-center justify-between gap-4 border border-gray-100 bg-cream px-6 py-4 rounded-2xl anim-up d4 ${inView ? 'in-view' : ''}`}>
          <div className="flex flex-wrap gap-6">
            {['Toll charges extra', 'Driver allowance for outstation', 'Night charges applicable', 'All prices include AC & driver'].map(note => (
              <span key={note} className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />{note}
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
