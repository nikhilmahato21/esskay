export default function Footer() {
  const navLinks = [
    { label: 'Fleet', href: '#fleet' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const destinations = [
    'Mumbai', 'Pune', 'Goa', 'Ahmedabad', 'Vadodara',
    'Nashik', 'Shirdi', 'Rajkot', 'Udaipur', 'Jaipur',
  ]

  return (
    <footer className="bg-steel text-white">
      {/* Top strip */}
      <div className="h-1 w-full bg-gold" />

      {/* CTA strip */}
      <div className="bg-steel-light border-b border-white/10">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-black text-xl uppercase tracking-wide">Ready to travel?</p>
            <p className="text-white/50 text-sm mt-0.5">Call or WhatsApp us right now for instant booking.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href="tel:+919109105155"
              className="bg-gold text-steel px-6 py-3 font-black text-[13px] uppercase tracking-wider no-underline hover:bg-gold-light transition-colors"
            >
              910-910-5155
            </a>
            <a
              href="https://wa.me/+919109105155"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-6 py-3 font-black text-[13px] uppercase tracking-wider no-underline hover:bg-white/10 transition-colors"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1777981818/WhatsApp_Image_2026-05-05_at_17.19.10-removebg-preview_atx3bu.png"
                alt="ESSKAY TRAVELS"
                className="h-12 w-auto object-contain"
              />
              <div>
                <p className="font-black text-base tracking-widest uppercase text-white leading-none">ESSKAY</p>
                <p className="text-[10px] tracking-[3px] font-bold text-gold uppercase leading-tight">TRAVELS</p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-4">
              Surat's trusted local and intercity cab service. Sedan, Ertiga &amp; Innova — AC, clean, on time, every time.
            </p>
            <a
              href="mailto:esskaytravelssurat@gmail.com"
              className="text-gold text-sm no-underline hover:text-gold-light transition-colors font-semibold"
            >
              esskaytravelssurat@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] tracking-[2.5px] text-white/40 font-black mb-5 uppercase">Quick Links</h4>
            <ul className="space-y-3 list-none">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold text-sm no-underline transition-colors font-semibold uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-[10px] tracking-[2.5px] text-white/40 font-black mb-5 uppercase">Popular Routes</h4>
            <ul className="space-y-2 list-none">
              {destinations.map(dest => (
                <li key={dest}>
                  <a href="#pricing" className="text-white/60 hover:text-gold text-sm no-underline transition-colors flex items-center gap-1.5">
                    <span className="w-1 h-1 bg-gold flex-shrink-0" />
                    Surat → {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[2.5px] text-white/40 font-black mb-5 uppercase">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-white/30 tracking-wider uppercase mb-1">Phone / WhatsApp</p>
                <a href="tel:+919109105155" className="font-black text-gold text-xl no-underline">910-910-5155</a>
              </div>
              <div>
                <p className="text-[10px] text-white/30 tracking-wider uppercase mb-1">Location</p>
                <p className="text-white/70 text-sm">Surat, Gujarat, India</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 tracking-wider uppercase mb-1">Availability</p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                  <p className="text-white/70 text-sm font-bold">24 × 7 · All Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} ESSKAY TRAVELS. All rights reserved. · Surat, Gujarat.
          </p>
          <p className="text-white/20 text-xs">
            Local &amp; Intercity Taxi Service · Sedan · Ertiga · Innova
          </p>
        </div>
      </div>
    </footer>
  )
}
