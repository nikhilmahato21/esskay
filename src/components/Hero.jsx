import { useState } from 'react'

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
)
const WhatsappIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
  </svg>
)
const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)
const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"/>
  </svg>
)

const VEHICLE_OPTIONS = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'ertiga', label: 'Ertiga (7-seater)' },
  { value: 'innova', label: 'Innova (7-seater)' },
]

const TRUST_BADGES = [
  { num: '22+', label: 'Destinations' },
  { num: '24/7', label: 'Available' },
  { num: '5★', label: 'Rated' },
]

export default function Hero() {
  const [form, setForm] = useState({
    name: '', phone: '', pickup: 'Surat', drop: '', date: '', vehicle: ''
  })

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `Hi! I'd like to book a cab.\nName: ${form.name}\nPhone: ${form.phone}\nFrom: ${form.pickup} → To: ${form.drop}\nDate: ${form.date}\nVehicle: ${form.vehicle}`
    window.open(`https://wa.me/+919109105155?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: '83px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-steel" />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')",
          opacity: 0.18,
        }}
      />
      {/* Industrial grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-steel via-steel/90 to-steel/30" />
      {/* Gold accent glow */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px]"
        style={{ background: 'linear-gradient(90deg, transparent, #E8A400, transparent)' }}
      />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-10 py-12 flex flex-col xl:flex-row items-center xl:items-start justify-between gap-10 xl:gap-8">

        {/* Left content */}
        <div className="w-full xl:max-w-[600px] xl:flex-shrink-0 text-center xl:text-left">

          {/* Industrial badge */}
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-[10px] tracking-[2.5px] font-bold uppercase">
              SURAT'S TRUSTED CAB SERVICE
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-dm font-black text-white text-5xl sm:text-6xl xl:text-[68px] leading-[1.0] tracking-tight mb-5 uppercase">
            RIDE WITH<br />
            <span className="text-gold">ESSKAY</span><br />
            TRAVELS.
          </h1>

          <p className="text-white/65 text-base sm:text-lg leading-[1.8] mb-8 max-w-[480px] mx-auto xl:mx-0">
            Local city rides and long-distance intercity travel from Surat.
            Sedan, Ertiga &amp; Innova available. Fixed rates. No hidden charges.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-0 mb-8 border border-white/10 divide-x divide-white/10 w-fit mx-auto xl:mx-0">
            {TRUST_BADGES.map(b => (
              <div key={b.label} className="px-6 py-3 text-center">
                <p className="text-gold font-black text-2xl leading-none">{b.num}</p>
                <p className="text-white/50 text-xs tracking-widest uppercase mt-1">{b.label}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap justify-center xl:justify-start gap-3">
            <a
              href="tel:+919109105155"
              className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-steel font-black px-7 py-4 text-sm tracking-wider uppercase transition-colors duration-200 no-underline"
            >
              <PhoneIcon />
              910-910-5155
            </a>
            <a
              href="https://wa.me/+919109105155?text=Hi%20I%20want%20to%20book%20a%20cab"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/30 text-white hover:border-white/60 hover:bg-white/5 px-7 py-4 text-sm tracking-wider uppercase font-bold transition-all duration-200 no-underline"
            >
              <WhatsappIcon />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Booking Form */}
        <div className="w-full sm:max-w-[400px] xl:w-[380px] xl:flex-shrink-0 bg-white overflow-hidden shadow-2xl">
          {/* Gold top bar */}
          <div className="h-1 w-full bg-gold" />

          <div className="p-6 sm:p-7">
            <p className="text-[10px] font-black tracking-[3px] text-gold uppercase mb-1">BOOK YOUR RIDE</p>
            <h2 className="font-dm font-black text-[22px] text-steel uppercase tracking-tight mb-1">Quick Booking</h2>
            <div className="w-8 h-[2px] bg-gold mb-5" />

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  name="name" value={form.name} onChange={handleChange}
                  type="text" placeholder="Your Name *"
                  className="border border-gray-200 px-3.5 py-2.5 text-sm font-dm text-steel outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all placeholder:text-gray-300"
                  required
                />
                <input
                  name="phone" value={form.phone} onChange={handleChange}
                  type="tel" placeholder="Phone *"
                  className="border border-gray-200 px-3.5 py-2.5 text-sm font-dm text-steel outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all placeholder:text-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  name="pickup" value={form.pickup} onChange={handleChange}
                  type="text" placeholder="Pickup *"
                  className="border border-gray-200 px-3.5 py-2.5 text-sm font-dm text-steel outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all placeholder:text-gray-300"
                  required
                />
                <input
                  name="drop" value={form.drop} onChange={handleChange}
                  type="text" placeholder="Destination *"
                  className="border border-gray-200 px-3.5 py-2.5 text-sm font-dm text-steel outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all placeholder:text-gray-300"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                    <CalendarIcon />
                  </span>
                  <input
                    name="date" value={form.date} onChange={handleChange}
                    type="date"
                    className="w-full border border-gray-200 pl-9 pr-3.5 py-2.5 text-sm font-dm text-steel outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all [color-scheme:light]"
                  />
                </div>
                <div className="relative">
                  <select
                    name="vehicle" value={form.vehicle} onChange={handleChange}
                    className="w-full border border-gray-200 px-3.5 py-2.5 text-sm font-dm outline-none focus:border-gold focus:ring-2 focus:ring-gold/15 transition-all appearance-none cursor-pointer bg-white"
                    style={{ color: form.vehicle ? '#1C1C1E' : '#9CA3AF' }}
                  >
                    <option value="" disabled>Select Vehicle</option>
                    {VEHICLE_OPTIONS.map(o => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none">
                    <ChevronIcon />
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark active:scale-[0.98] text-steel py-3.5 text-[13px] font-black flex items-center justify-center gap-2 transition-all duration-200 border-none cursor-pointer uppercase tracking-wider"
              >
                <SendIcon />
                SEND BOOKING REQUEST
              </button>

              <p className="text-center text-[10.5px] text-gray-400 mt-2 leading-relaxed">
                Tap above to send via WhatsApp · We confirm within 5 minutes
              </p>
            </form>
          </div>
        </div>

      </div>

      {/* Bottom vehicle image strip */}
      <div className="absolute bottom-0 right-0 w-full xl:w-[55%] pointer-events-none overflow-hidden" style={{ height: '220px' }}>
        <img
          src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1777981818/WhatsApp_Image_2026-05-05_at_17.19.10-removebg-preview_atx3bu.png"
          alt="ESSKAY TRAVELS Car"
          className="absolute bottom-0 right-0 h-[220px] w-auto object-contain opacity-25 xl:opacity-40"
          style={{ filter: 'brightness(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel to-transparent" />
      </div>
    </section>
  )
}
