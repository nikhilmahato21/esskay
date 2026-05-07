import { useInView } from '../hooks/useInView'

const MARQUEE = ['SURAT', 'MUMBAI', 'PUNE', 'GOA', 'AHMEDABAD', 'JAIPUR', 'UDAIPUR', 'SHIRDI', 'RAJKOT', 'NAGPUR', 'NEW DELHI', 'VADODARA']

export default function Footer() {
  const [ref, inView] = useInView()

  const navLinks = [
    { label: 'Fleet',    href: '#fleet' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing',  href: '#pricing' },
    { label: 'About',    href: '#about' },
    { label: 'Contact',  href: '#contact' },
  ]

  const destinations = ['Mumbai', 'Pune', 'Goa', 'Ahmedabad', 'Vadodara', 'Nashik', 'Shirdi', 'Rajkot', 'Udaipur', 'Jaipur', 'New Delhi']

  return (
    <footer className="bg-steel text-white overflow-hidden">
      {/* Gold top line */}
      <div className="h-[3px] w-full bg-gold" />

      {/* Running marquee */}
      <div className="border-b border-white/10 py-4 overflow-hidden">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-8 text-white/20 font-black text-[11px] tracking-[4px] uppercase whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="border-b border-white/10 bg-steel-light">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <p className="font-black text-2xl uppercase tracking-wide">Ready to travel?</p>
            <p className="text-white/40 text-sm mt-1">Call or WhatsApp for instant booking.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:+919109105155"
              className="bg-gold text-steel px-7 py-3 rounded-full font-black text-[13px] uppercase tracking-wider no-underline hover:bg-gold-light transition-colors">
              910-910-5155
            </a>
            <a href="https://wa.me/+919109105155" target="_blank" rel="noopener noreferrer"
              className="border border-white/20 text-white px-7 py-3 rounded-full font-black text-[13px] uppercase tracking-wider no-underline hover:bg-white/10 transition-colors">
              WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div ref={ref} className="max-w-screen-xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className={`sm:col-span-2 lg:col-span-1 anim-up ${inView ? 'in-view' : ''}`}>
            <div className="flex items-center gap-3 mb-5">
              <img src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1777981818/WhatsApp_Image_2026-05-05_at_17.19.10-removebg-preview_atx3bu.png"
                alt="ESSKAY TRAVELS" className="h-12 w-auto object-contain" />
              <div>
                <p className="font-black text-base tracking-widest uppercase text-white leading-none">ESSKAY</p>
                <p className="text-[10px] tracking-[3px] font-black text-gold uppercase leading-tight">TRAVELS</p>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-5">
              Surat's trusted local and intercity cab service. Sedan, Ertiga &amp; Innova — AC, clean, on time, every time.
            </p>
            <a href="mailto:esskaytravelssurat@gmail.com"
              className="text-gold text-sm no-underline hover:text-gold-light transition-colors font-semibold nav-link">
              esskaytravelssurat@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className={`anim-up d1 ${inView ? 'in-view' : ''}`}>
            <h4 className="text-[10px] tracking-[2.5px] text-white/30 font-black mb-6 uppercase">Quick Links</h4>
            <ul className="space-y-3 list-none">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-white/60 hover:text-gold text-sm no-underline transition-colors font-semibold uppercase tracking-wide nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div className={`anim-up d2 ${inView ? 'in-view' : ''}`}>
            <h4 className="text-[10px] tracking-[2.5px] text-white/30 font-black mb-6 uppercase">Popular Routes</h4>
            <ul className="space-y-2 list-none">
              {destinations.map(dest => (
                <li key={dest}>
                  <a href="#pricing" className="text-white/50 hover:text-gold text-sm no-underline transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold flex-shrink-0" />
                    Surat → {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={`anim-up d3 ${inView ? 'in-view' : ''}`}>
            <h4 className="text-[10px] tracking-[2.5px] text-white/30 font-black mb-6 uppercase">Contact</h4>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] text-white/25 tracking-wider uppercase mb-1">Phone / WhatsApp</p>
                <a href="tel:+919109105155" className="font-black text-gold text-2xl no-underline tracking-tight">910-910-5155</a>
              </div>
              <div>
                <p className="text-[10px] text-white/25 tracking-wider uppercase mb-1">Location</p>
                <p className="text-white/60 text-sm">Surat, Gujarat, India</p>
              </div>
              <div>
                <p className="text-[10px] text-white/25 tracking-wider uppercase mb-1">Availability</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <p className="text-white/60 text-sm font-bold">24 × 7 · All Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} ESSKAY TRAVELS. All rights reserved. · Surat, Gujarat.
          </p>
          <p className="text-white/15 text-xs">
            Local &amp; Intercity Taxi · Sedan · Ertiga · Innova
          </p>
        </div>
      </div>
    </footer>
  )
}
