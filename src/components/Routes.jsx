import { useState } from 'react'
import { useInView } from '../hooks/useInView'

// ── Data ─────────────────────────────────────────────────────────────────────
// Add / remove destinations here. Each origin filters its own city out automatically.

const ALL_DESTINATIONS = [
  'RAJKOT',
  'GANDHINAGAR',
  'GIFT CITY',
  'AHMEDABAD CITY',
  'ANAND',
  'NADIAD',
  'VADODARA',
  'BHARUCH',
  'ANKLESHWAR',
  'NAVSARI',
  'CHIKHLI',
  'VAPI',
  'VALSAD',
  'DAMAN',
  'SILVASSA',
  'MUMBAI AIRPORT',
  'CENTRAL / BKC',
  'PUNE',
]

const ORIGINS = [
  { id: 'surat',     label: 'Surat',     short: 'SUR' },
  { id: 'ahmedabad', label: 'Ahmedabad', short: 'AMD' },
  { id: 'mumbai',    label: 'Mumbai',    short: 'BOM' },
  { id: 'vapi',      label: 'Vapi',      short: 'VPI' },
]

const DESTINATIONS = {
  surat:     ALL_DESTINATIONS,
  ahmedabad: ALL_DESTINATIONS,
  mumbai:    ALL_DESTINATIONS,
  vapi:      ALL_DESTINATIONS,
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)
const WhatsappIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// ── Component ─────────────────────────────────────────────────────────────────
export default function Routes() {
  const [activeOrigin, setActiveOrigin] = useState('surat')
  const [search, setSearch] = useState('')
  const [ref, inView] = useInView()

  const origin = ORIGINS.find(o => o.id === activeOrigin)
  const destinations = DESTINATIONS[activeOrigin] ?? []
  const filtered = destinations.filter(d =>
    d.toLowerCase().includes(search.toLowerCase())
  )

  const handleBook = (destination) => {
    const msg = `Hi! I want to book a cab from ${origin.label} to ${destination}.`
    window.open(`https://wa.me/+919109105155?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="pricing" className="bg-white py-24 px-6 lg:px-10 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">

        {/* Section header */}
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className={`text-[10px] font-black tracking-[3px] text-gold uppercase mb-3 anim-up ${inView ? 'in-view' : ''}`}>
              03 — ROUTES
            </p>
            <h2 className={`font-dm font-black text-steel uppercase leading-[0.88] tracking-tighter anim-up d1 ${inView ? 'in-view' : ''}`}
              style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}>
              ANYWHERE<br />YOU GO
            </h2>
            <p className={`text-gray-400 text-sm mt-4 anim-up d2 ${inView ? 'in-view' : ''}`}>
              Select your origin city · Pick your destination · Book instantly on WhatsApp
            </p>
          </div>
          <div className={`bg-steel text-white px-6 py-5 text-center sm:text-right flex-shrink-0 rounded-2xl anim-up d3 ${inView ? 'in-view' : ''}`}>
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/50 mb-1">CALL / WHATSAPP</p>
            <a href="tel:+919109105155" className="font-black text-2xl text-gold no-underline tracking-tight">
              910-910-5155
            </a>
          </div>
        </div>

        {/* Origin tabs */}
        <div className={`mb-8 anim-up d2 ${inView ? 'in-view' : ''}`}>
          <p className="text-[10px] font-black tracking-[2.5px] text-gray-400 uppercase mb-3">TRAVELLING FROM</p>
          <div className="flex flex-wrap gap-2">
            {ORIGINS.map(o => (
              <button
                key={o.id}
                onClick={() => { setActiveOrigin(o.id); setSearch('') }}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full font-black text-[12px] tracking-[1.5px] uppercase transition-all duration-200 border-none cursor-pointer ${
                  activeOrigin === o.id
                    ? 'bg-steel text-white shadow-lg shadow-steel/20 scale-105'
                    : 'bg-cream text-steel hover:bg-steel/10'
                }`}
              >
                <PinIcon />
                {o.label}
                {activeOrigin === o.id && (
                  <span className="bg-gold text-steel text-[9px] font-black px-1.5 py-0.5 rounded-full leading-none">
                    {filtered.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Route label + search */}
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 anim-up d3 ${inView ? 'in-view' : ''}`}>
          <div className="flex items-center gap-3 bg-cream px-5 py-3 rounded-full">
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider">From</span>
            <span className="text-gold font-black text-sm uppercase tracking-wider">{origin.label}</span>
            <ArrowIcon />
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-wider">Select destination below</span>
          </div>

          <div className="relative w-full sm:w-auto sm:min-w-[220px]">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search destination..."
              className="w-full border border-gray-200 focus:border-gold focus:ring-2 focus:ring-gold/15 pl-10 pr-4 py-3 rounded-full text-sm font-dm text-steel outline-none transition-all bg-gray-50 focus:bg-white"
            />
          </div>
        </div>

        {/* Destination list */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-16 text-center text-gray-400 text-sm">
              No destinations found for "{search}"
            </div>
          ) : (
            filtered.map((dest, i) => (
              <div
                key={dest}
                className={`flex items-center justify-between px-5 sm:px-7 py-4 sm:py-5 ${
                  i !== 0 ? 'border-t border-gray-100' : ''
                } hover:bg-cream transition-colors duration-150`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-gold flex-shrink-0"><PinIcon /></span>
                  <div>
                    <p className="font-black text-steel text-base sm:text-lg uppercase tracking-wide leading-tight">{dest}</p>
                    <p className="text-[11px] text-gray-400 font-medium mt-0.5">from {origin.label}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleBook(dest)}
                  className="flex-shrink-0 flex items-center gap-2 bg-gold hover:bg-gold-dark active:scale-95 text-steel font-black text-[12px] sm:text-[13px] tracking-wider uppercase px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 border-none cursor-pointer ml-4 shadow-sm"
                >
                  <WhatsappIcon />
                  Book Now
                </button>
              </div>
            ))
          )}
        </div>

        {/* Bottom strip */}
        <div className={`mt-8 grid sm:grid-cols-2 gap-4 anim-up d4 ${inView ? 'in-view' : ''}`}>
          <div className="bg-cream border border-gray-100 p-5 rounded-2xl">
            <p className="text-[10px] font-black tracking-[2px] uppercase text-gold mb-3">IMPORTANT NOTES</p>
            <ul className="space-y-2">
              {[
                'Toll & parking charges paid by passengers',
                'Driver food & accommodation by passengers',
                'Night charges: ₹300–₹500 extra',
                'Rates are for one-way trips',
                'Round-trip discounts available',
              ].map(note => (
                <li key={note} className="flex items-start gap-2 text-[12px] text-gray-500">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-steel p-5 rounded-2xl flex flex-col justify-between gap-4">
            <div>
              <p className="text-[10px] font-black tracking-[2px] uppercase text-gold mb-2">CUSTOM ROUTE?</p>
              <p className="text-white/60 text-sm leading-relaxed">
                Don't see your destination? We travel anywhere. Call us for a custom quote.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="tel:+919109105155"
                className="flex items-center gap-2 bg-gold text-steel px-5 py-3 rounded-full font-black text-[12px] uppercase tracking-wider no-underline hover:bg-gold-light transition-colors">
                CALL US
              </a>
              <a href="https://wa.me/+919109105155" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full font-black text-[12px] uppercase tracking-wider no-underline hover:bg-white/10 transition-colors">
                WHATSAPP
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
