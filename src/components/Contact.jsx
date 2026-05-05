import { useState } from 'react'

const SendIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22,2 15,22 11,13 2,9 22,2"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
)
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
)
const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const contactItems = [
  {
    icon: PhoneIcon,
    label: 'PHONE',
    value: '910-910-5155',
    href: 'tel:+919109105155',
  },
  {
    icon: WhatsappIcon,
    label: 'WHATSAPP',
    value: 'Chat with us 24×7',
    href: 'https://wa.me/+919109105155',
  },
  {
    icon: MailIcon,
    label: 'EMAIL',
    value: 'esskaytravelssurat@gmail.com',
    href: 'mailto:esskaytravelssurat@gmail.com',
  },
  {
    icon: PinIcon,
    label: 'LOCATION',
    value: 'Surat, Gujarat, India',
    href: 'https://maps.app.goo.gl/fPfHxFgDc6bzKH8X8',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', pickup: 'Surat', drop: '', date: '', vehicle: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const msg = `*New Booking Request — ESSKAY TRAVELS*\n\nName: ${form.name}\nPhone: ${form.phone}\nFrom: ${form.pickup} → To: ${form.drop}\nDate: ${form.date}\nVehicle: ${form.vehicle}\nMessage: ${form.message}`
    window.open(`https://wa.me/+919109105155?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="bg-white py-20 px-6 lg:px-10 border-t border-gray-100">
      <div className="max-w-screen-xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-black tracking-[3px] text-gold uppercase mb-2">GET IN TOUCH</p>
          <h2 className="font-dm font-black text-4xl sm:text-5xl text-steel uppercase leading-tight tracking-tight">
            BOOK YOUR<br />RIDE TODAY
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left — contact info */}
          <div className="flex flex-col gap-6">
            {/* Contact cards */}
            <div className="grid grid-cols-2 gap-0 border-2 border-steel">
              {contactItems.map((item, i) => {
                const Icon = item.icon
                return (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`no-underline group p-5 flex flex-col gap-3 bg-white hover:bg-steel transition-colors border-steel ${
                      i < 2 ? 'border-b-2' : ''
                    } ${i % 2 === 0 ? 'border-r-2' : ''}`}
                  >
                    <div className="w-10 h-10 bg-smoke group-hover:bg-gold flex items-center justify-center text-steel transition-colors">
                      <Icon />
                    </div>
                    <div>
                      <p className="text-[9px] font-black tracking-[2px] uppercase text-gray-400 group-hover:text-white/50 mb-0.5 transition-colors">{item.label}</p>
                      <p className="font-bold text-steel group-hover:text-white text-sm transition-colors break-all">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Quick CTA strip */}
            <div className="bg-gold p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1">
                <p className="font-black text-steel uppercase text-base tracking-wide">Call for instant booking</p>
                <a href="tel:+919109105155" className="font-black text-steel text-2xl no-underline tracking-tight">
                  910-910-5155
                </a>
              </div>
              <a
                href="tel:+919109105155"
                className="flex-shrink-0 bg-steel text-white px-6 py-3 font-black text-[13px] uppercase tracking-wider no-underline hover:bg-steel-light transition-colors"
              >
                CALL NOW
              </a>
            </div>

            {/* Hours */}
            <div className="border border-gray-200 p-5">
              <p className="text-[10px] font-black tracking-[2px] uppercase text-gold mb-3">AVAILABILITY</p>
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="font-black text-steel text-sm uppercase tracking-wide">24 Hours · 7 Days a Week</p>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                We accept bookings at any time of day or night. For pre-booked trips, please book at least 2–3 hours in advance.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white border-2 border-steel">
            <div className="bg-steel px-6 py-4">
              <p className="font-black text-white uppercase tracking-wider text-sm">Send a Booking Request</p>
              <p className="text-white/50 text-[11px] mt-0.5">We'll confirm via WhatsApp within 5 minutes</p>
            </div>

            <div className="p-6">
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 text-sm px-4 py-3 mb-4 font-semibold">
                  ✓ Request sent! We'll confirm your booking shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Full Name *"
                    className="border border-gray-200 focus:border-gold px-3.5 py-3 text-sm font-dm outline-none transition-colors placeholder:text-gray-300" required />
                  <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="Phone *"
                    className="border border-gray-200 focus:border-gold px-3.5 py-3 text-sm font-dm outline-none transition-colors placeholder:text-gray-300" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input name="pickup" value={form.pickup} onChange={handleChange} type="text" placeholder="Pickup *"
                    className="border border-gray-200 focus:border-gold px-3.5 py-3 text-sm font-dm outline-none transition-colors placeholder:text-gray-300" required />
                  <input name="drop" value={form.drop} onChange={handleChange} type="text" placeholder="Destination *"
                    className="border border-gray-200 focus:border-gold px-3.5 py-3 text-sm font-dm outline-none transition-colors placeholder:text-gray-300" required />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input name="date" value={form.date} onChange={handleChange} type="date"
                    className="border border-gray-200 focus:border-gold px-3.5 py-3 text-sm font-dm outline-none transition-colors [color-scheme:light]" />
                  <select name="vehicle" value={form.vehicle} onChange={handleChange}
                    className="border border-gray-200 focus:border-gold px-3.5 py-3 text-sm font-dm outline-none transition-colors bg-white"
                    style={{ color: form.vehicle ? '#1C1C1E' : '#9CA3AF' }}>
                    <option value="">Select Vehicle</option>
                    <option value="sedan">Sedan</option>
                    <option value="ertiga">Ertiga (7-seater)</option>
                    <option value="innova">Innova (7-seater)</option>
                  </select>
                </div>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                  placeholder="Any special requirements, number of passengers..."
                  className="w-full border border-gray-200 focus:border-gold px-3.5 py-3 text-sm font-dm outline-none transition-colors placeholder:text-gray-300 resize-none" />
                <button type="submit"
                  className="w-full bg-gold hover:bg-gold-dark active:scale-[0.98] text-steel py-4 text-[13px] font-black flex items-center justify-center gap-2 transition-all duration-200 border-none cursor-pointer uppercase tracking-widest">
                  <SendIcon /> SEND VIA WHATSAPP
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
