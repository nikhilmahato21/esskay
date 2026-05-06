import { useState } from 'react'

const pricing = [
  { destination: 'VAPI / DAMAN',     sedan: 2500,  ertiga: 3000,  innova: 4000  },
  { destination: 'NAVSARI',          sedan: 1000,  ertiga: 1500,  innova: 2500  },
  { destination: 'MUMBAI',           sedan: 4000,  ertiga: 5000,  innova: 6000  },
  { destination: 'PUNE',             sedan: 6500,  ertiga: 7500,  innova: 9000  },
  { destination: 'KOLHAPUR',         sedan: 10000, ertiga: 12000, innova: 13500 },
  { destination: 'GOA',              sedan: 14000, ertiga: 16500, innova: 20000 },
  { destination: 'SAPUTARA',         sedan: 3500,  ertiga: 4500,  innova: 5500  },
  { destination: 'NASHIK',           sedan: 4000,  ertiga: 4500,  innova: 5500  },
  { destination: 'SHIRDI',           sedan: 5000,  ertiga: 6000,  innova: 7500  },
  { destination: 'BHARUCH',          sedan: 1800,  ertiga: 2000,  innova: 2500  },
  { destination: 'VADODARA',         sedan: 2500,  ertiga: 3000,  innova: 4000  },
  { destination: 'AHMEDABAD',        sedan: 3500,  ertiga: 4500,  innova: 5500  },
  { destination: 'HAJIRA',           sedan: 800,   ertiga: 1000,  innova: 1200  },
  { destination: 'RAJKOT',           sedan: 6500,  ertiga: 8500,  innova: 10000 },
  { destination: 'BHAVNAGAR',        sedan: 6000,  ertiga: 7000,  innova: 8000  },
  { destination: 'BHUJ',             sedan: 10000, ertiga: 12000, innova: 13500 },
  { destination: 'UDAIPUR',          sedan: 8000,  ertiga: 9500,  innova: 11000 },
  { destination: 'JAIPUR',           sedan: 15000, ertiga: 17500, innova: 20000 },
  { destination: 'UJJAIN / INDORE',  sedan: 8500,  ertiga: 10000, innova: 12000 },
  { destination: 'NAGPUR',           sedan: 11000, ertiga: 13000, innova: 16000 },
  { destination: 'AURANGABAD',       sedan: 7500,  ertiga: 9500,  innova: 12000 },
  { destination: 'STATUE OF UNITY',  sedan: 4000,  ertiga: 5000,  innova: 6000  },
  { destination: 'NEW DELHI',         sedan: 20000,  ertiga: 25000, innova: 30000 },
]

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
)

export default function Routes() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(null)

  const filtered = pricing.filter(r =>
    r.destination.toLowerCase().includes(search.toLowerCase())
  )

  const handleBook = (row) => {
    const msg = `Hi! I want to book a cab from Surat to ${row.destination}.`
    window.open(`https://wa.me/+919109105155?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="pricing" className="bg-white py-20 px-6 lg:px-10 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-[10px] font-black tracking-[3px] text-gold uppercase mb-2">FARE CHART</p>
            <h2 className="font-dm font-black text-4xl sm:text-5xl text-steel uppercase leading-tight tracking-tight">
              SURAT TO<br />ANYWHERE
            </h2>
            <p className="text-gray-400 text-sm mt-3">
              Fixed rates · No hidden charges · All vehicles AC
            </p>
          </div>
          {/* Phone highlight */}
          <div className="border-2 border-steel bg-steel text-white p-5 text-center sm:text-right flex-shrink-0">
            <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/60 mb-1">CALL / WHATSAPP</p>
            <a href="tel:+919109105155" className="font-black text-2xl text-gold no-underline tracking-tight">
              910-910-5155
            </a>
          </div>
        </div>

        {/* Search */}
        <div className="relative mb-6 max-w-sm">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            <SearchIcon />
          </span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search destination..."
            className="w-full border-2 border-gray-200 focus:border-gold pl-10 pr-4 py-3 text-sm font-dm text-steel outline-none transition-colors"
          />
        </div>

        {/* Table - desktop */}
        <div className="hidden md:block overflow-hidden border-2 border-steel">
          {/* Header row */}
          <div className="grid grid-cols-4 bg-steel text-white">
            <div className="px-6 py-4 text-[10px] font-black tracking-[2.5px] uppercase">SURAT TO</div>
            <div className="px-6 py-4 text-[10px] font-black tracking-[2.5px] uppercase text-center border-l border-white/10">
              <div className="flex items-center justify-center gap-2">
                <img src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1777458600/dzire_kkjx6a.avif" alt="Sedan" className="h-6 w-auto object-contain opacity-80" />
                SEDAN
              </div>
            </div>
            <div className="px-6 py-4 text-[10px] font-black tracking-[2.5px] uppercase text-center border-l border-white/10 bg-gold text-steel">
              <div className="flex items-center justify-center gap-2">
                <img src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1777915229/73237259_lnihp4-removebg-preview_w4eo3x.png" alt="Ertiga" className="h-6 w-auto object-contain" />
                ERTIGA
              </div>
            </div>
            <div className="px-6 py-4 text-[10px] font-black tracking-[2.5px] uppercase text-center border-l border-white/10">
              <div className="flex items-center justify-center gap-2">
                <img src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1777914909/innova_fxry8l.avif" alt="Innova" className="h-6 w-auto object-contain opacity-80" />
                INNOVA
              </div>
            </div>
          </div>

          {/* Data rows */}
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-gray-400 text-sm">No destinations found for "{search}"</div>
          ) : (
            filtered.map((row, i) => (
              <div
                key={i}
                onClick={() => setSelected(selected === i ? null : i)}
                className={`grid grid-cols-4 border-t border-gray-100 cursor-pointer transition-colors ${
                  selected === i ? 'bg-gold/5 border-l-4 border-l-gold' : 'hover:bg-smoke'
                }`}
              >
                <div className="px-6 py-4 font-black text-sm text-steel uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  {row.destination}
                </div>
                <div className="px-6 py-4 text-center border-l border-gray-100">
                  <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-0.5">FROM</p>
                  <span className="font-price font-bold text-steel text-2xl tracking-tight">₹{row.sedan.toLocaleString()}</span>
                </div>
                <div className="px-6 py-4 text-center border-l border-gray-100 bg-gold/5">
                  <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-0.5">FROM</p>
                  <span className="font-price font-bold text-gold text-2xl tracking-tight">₹{row.ertiga.toLocaleString()}</span>
                </div>
                <div className="px-6 py-4 text-center border-l border-gray-100 flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-0.5">FROM</p>
                    <span className="font-price font-bold text-steel text-2xl tracking-tight">₹{row.innova.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleBook(row) }}
                    className="ml-3 text-[11px] font-black tracking-wide uppercase text-steel bg-gold hover:bg-gold-dark px-4 py-2 rounded-full transition-colors border-none cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Cards - mobile */}
        <div className="md:hidden space-y-3">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-gray-400 text-sm">No destinations found</div>
          ) : (
            filtered.map((row, i) => (
              <div key={i} className="border border-gray-200 bg-white overflow-hidden">
                <div className="bg-steel text-white px-4 py-3 flex items-center justify-between">
                  <span className="font-black text-sm uppercase tracking-wide">{row.destination}</span>
                  <button
                    onClick={() => handleBook(row)}
                    className="text-[11px] font-black tracking-wide uppercase text-steel bg-gold hover:bg-gold-dark px-4 py-1.5 rounded-full border-none cursor-pointer transition-colors"
                  >
                    Book Now
                  </button>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-100">
                  <div className="px-3 py-4 text-center">
                    <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-1">SEDAN</p>
                    <p className="font-price font-bold text-steel text-xl tracking-tight">₹{row.sedan.toLocaleString()}</p>
                  </div>
                  <div className="px-3 py-4 text-center bg-gold/5">
                    <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-1">ERTIGA</p>
                    <p className="font-price font-bold text-gold text-xl tracking-tight">₹{row.ertiga.toLocaleString()}</p>
                  </div>
                  <div className="px-3 py-4 text-center">
                    <p className="text-[9px] font-bold tracking-[1.5px] text-gray-400 uppercase mb-1">INNOVA</p>
                    <p className="font-price font-bold text-steel text-xl tracking-tight">₹{row.innova.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Notes + CTA */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          <div className="bg-cream border border-gray-200 p-5">
            <p className="text-[10px] font-black tracking-[2px] uppercase text-gold mb-3">IMPORTANT NOTES</p>
            <ul className="space-y-2">
              {[
                'Toll & parking charges paid by passengers',
                'Driver food & accommodation by passengers',
                'Night charges: ₹300–₹500 extra',
                'Rates are for one-way trips',
                'Round-trip discounts available',
              ].map(note => (
                <li key={note} className="flex items-start gap-2 text-[12px] text-gray-600">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-gold flex-shrink-0" />
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-steel p-5 flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-black tracking-[2px] uppercase text-gold mb-2">CUSTOM ROUTE?</p>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Don't see your destination? We travel anywhere. Call us for a custom quote.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href="tel:+919109105155"
                className="flex items-center gap-2 bg-gold text-steel px-5 py-3 font-black text-[12px] uppercase tracking-wider no-underline hover:bg-gold-light transition-colors"
              >
                <PhoneIcon /> CALL US
              </a>
              <a
                href="https://wa.me/+919109105155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 text-white px-5 py-3 font-black text-[12px] uppercase tracking-wider no-underline hover:bg-white/10 transition-colors"
              >
                WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
