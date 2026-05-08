import { useState, useEffect } from 'react'

const MARQUEE_ITEMS = [
  'MUMBAI', 'PUNE', 'GOA', 'AHMEDABAD', 'JAIPUR', 'UDAIPUR',
  'SHIRDI', 'NASHIK', 'RAJKOT', 'NAGPUR', 'NEW DELHI', 'VADODARA',
]

const WORDS = ['RIDE', 'WITH', 'ESSKAY', 'TRAVELS.']
const DELAYS = ['0.1s', '0.28s', '0.46s', '0.64s']

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: 'Surat', drop: '', date: '', vehicle: '' })
  const [ready, setReady] = useState(false)

  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t) }, [])

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hi! I'd like to book a cab.\nName: ${form.name}\nPhone: ${form.phone}\nFrom: ${form.pickup} → To: ${form.drop}\nDate: ${form.date}\nVehicle: ${form.vehicle}`
    window.open(`https://wa.me/+919109105155?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden" style={{ paddingTop: '83px' }}>

      {/* Background */}
      <div className="absolute inset-0 bg-steel" />
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(245,166,35,0.3) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute inset-0 bg-gradient-to-br from-steel via-steel/95 to-steel-muted/80" />
      <div className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #F5A623 40%, transparent)' }} />

      {/* Main content */}
      <div className="relative z-10 flex-1 w-full max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-10 py-12 flex flex-col xl:flex-row items-start xl:items-center gap-12 xl:gap-16">

        {/* LEFT */}
        <div className="w-full xl:flex-1">

          <div className={`inline-flex items-center gap-2.5 border border-gold/40 bg-gold/10 px-4 py-2 rounded-full mb-8 anim-up ${ready ? 'in-view' : ''}`}>
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-[10px] tracking-[3px] font-black uppercase">SURAT'S #1 CAB SERVICE</span>
          </div>

          <h1 className="font-dm font-black text-white leading-[0.9] tracking-tighter uppercase mb-6"
            style={{ fontSize: 'clamp(44px, 9vw, 112px)' }}>
            {WORDS.map((w, i) => (
              <span key={i} className="block overflow-hidden">
                <span className="hero-word" style={{ animationDelay: DELAYS[i], color: w === 'ESSKAY' ? '#F5A623' : 'white' }}>
                  {w}
                </span>
              </span>
            ))}
          </h1>

          <p className={`text-white/55 text-base sm:text-lg leading-[1.8] mb-8 max-w-lg anim-up d3 ${ready ? 'in-view' : ''}`}>
            Local city rides &amp; long-distance intercity travel from Surat.
            Sedan, Ertiga &amp; Innova. Fixed rates. No hidden charges.
          </p>

          <div className={`flex gap-0 mb-8 divide-x divide-white/10 w-fit rounded-2xl overflow-hidden border border-white/10 anim-up d4 ${ready ? 'in-view' : ''}`}>
            {[['22+', 'Destinations'], ['24/7', 'Available'], ['5★', 'Rated'], ['10+', 'Years']].map(([n, l]) => (
              <div key={l} className="px-5 sm:px-7 py-4 text-center hover:bg-white/5 transition-colors">
                <p className="text-gold font-black text-2xl sm:text-3xl leading-none">{n}</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">{l}</p>
              </div>
            ))}
          </div>

          <div className={`flex flex-wrap gap-3 anim-up d5 ${ready ? 'in-view' : ''}`}>
            <a href="tel:+919109105155"
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-steel font-black px-6 py-3.5 rounded-full text-sm tracking-wider uppercase transition-all duration-200 no-underline btn-pulse">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
              910-910-5155
            </a>
            <a href="https://wa.me/+919109105155?text=Hi%20I%20want%20to%20book%20a%20cab"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white/20 text-white hover:border-gold hover:text-gold px-6 py-3.5 rounded-full text-sm tracking-wider uppercase font-black transition-all duration-200 no-underline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* RIGHT — Booking form (redesigned) */}
        <div className={`w-full sm:max-w-md xl:w-[420px] xl:flex-shrink-0 anim-right d2 ${ready ? 'in-view' : ''}`}>
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)' }}>

            {/* Form header */}
            <div className="px-7 pt-7 pb-5 border-b border-white/10">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <p className="text-[10px] font-black tracking-[3px] text-gold uppercase">BOOK YOUR RIDE</p>
              </div>
              <h2 className="font-dm font-black text-2xl text-white uppercase tracking-tight">Quick Booking</h2>
            </div>

            <div className="px-7 py-6">
              <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[10px] font-black tracking-[2px] text-white/50 uppercase mb-1.5">Your Name</label>
                    <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Rahul Shah"
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 rounded-xl text-sm font-dm outline-none focus:border-gold/60 focus:bg-white/12 transition-all" required />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label className="block text-[10px] font-black tracking-[2px] text-white/50 uppercase mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="9876543210"
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 rounded-xl text-sm font-dm outline-none focus:border-gold/60 focus:bg-white/12 transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black tracking-[2px] text-white/50 uppercase mb-1.5">Pickup</label>
                    <input name="pickup" value={form.pickup} onChange={handleChange} type="text" placeholder="Surat"
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 rounded-xl text-sm font-dm outline-none focus:border-gold/60 focus:bg-white/12 transition-all" required />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-[2px] text-white/50 uppercase mb-1.5">Destination</label>
                    <input name="drop" value={form.drop} onChange={handleChange} type="text" placeholder="Mumbai"
                      className="w-full bg-white/8 border border-white/15 text-white placeholder:text-white/25 px-4 py-3 rounded-xl text-sm font-dm outline-none focus:border-gold/60 focus:bg-white/12 transition-all" required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-black tracking-[2px] text-white/50 uppercase mb-1.5">Date</label>
                    <input name="date" value={form.date} onChange={handleChange} type="date"
                      className="w-full bg-white/8 border border-white/15 text-white px-4 py-3 rounded-xl text-sm font-dm outline-none focus:border-gold/60 focus:bg-white/12 transition-all [color-scheme:dark]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black tracking-[2px] text-white/50 uppercase mb-1.5">Vehicle</label>
                    <select name="vehicle" value={form.vehicle} onChange={handleChange}
                      className="w-full bg-white/8 border border-white/15 px-4 py-3 rounded-xl text-sm font-dm outline-none focus:border-gold/60 focus:bg-white/12 transition-all appearance-none cursor-pointer"
                      style={{ color: form.vehicle ? 'white' : 'rgba(255,255,255,0.3)' }}>
                      <option value="" disabled style={{ background: '#0B1629' }}>Choose</option>
                      <option value="sedan" style={{ background: '#0B1629', color: 'white' }}>Sedan (4-seat)</option>
                      <option value="ertiga" style={{ background: '#0B1629', color: 'white' }}>Ertiga (7-seat)</option>
                      <option value="innova" style={{ background: '#0B1629', color: 'white' }}>Innova (7-seat)</option>
                    </select>
                  </div>
                </div>

                <button type="submit"
                  className="w-full bg-gold hover:bg-gold-dark active:scale-[0.98] text-steel py-4 rounded-2xl text-[13px] font-black flex items-center justify-center gap-2 transition-all duration-200 border-none cursor-pointer uppercase tracking-widest mt-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22,2 15,22 11,13 2,9 22,2"/>
                  </svg>
                  SEND BOOKING REQUEST
                </button>

                <p className="text-center text-[10px] text-white/30 leading-relaxed">
                  Sends via WhatsApp · Confirmed within 5 min
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 border-t border-white/10 bg-white/5 overflow-hidden py-3">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-6 text-gold/70 font-black text-[10px] tracking-[3px] uppercase whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-gold/60 rounded-full flex-shrink-0" />
              SURAT → {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
