import { useState, useEffect } from 'react'

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.1 1.22 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Fleet', 'Services', 'Pricing', 'About', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
        : 'bg-steel/80 backdrop-blur-sm'
    }`}>
      {/* Top accent bar */}
      <div className="h-[3px] w-full bg-gold" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <img
            src="https://res.cloudinary.com/dynbpb9u0/image/upload/v1777981818/WhatsApp_Image_2026-05-05_at_17.19.10-removebg-preview_atx3bu.png"
            alt="ESSKAY TRAVELS"
            className="h-10 w-auto object-contain"
          />
          <div className="hidden sm:block">
            <p className={`font-dm font-black text-base leading-none tracking-widest uppercase ${scrolled ? 'text-steel' : 'text-white'}`}>
              ESSKAY
            </p>
            <p className={`text-[10px] tracking-[3px] font-medium uppercase leading-tight ${scrolled ? 'text-gold' : 'text-gold'}`}>
              TRAVELS · SURAT
            </p>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {navLinks.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-[13px] font-semibold tracking-widest uppercase no-underline transition-colors duration-200 hover:text-gold ${
                  scrolled ? 'text-steel' : 'text-white/85'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919109105155"
            className={`flex items-center gap-1.5 text-sm font-semibold no-underline transition-colors hover:text-gold ${
              scrolled ? 'text-steel' : 'text-white/90'
            }`}
          >
            <PhoneIcon />
            910-910-5155
          </a>
          <a
            href="#contact"
            className="bg-gold hover:bg-gold-dark text-steel text-[13px] font-black px-6 py-2.5 rounded-full tracking-wider uppercase transition-colors duration-200 cursor-pointer no-underline"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`lg:hidden border-none bg-transparent cursor-pointer p-2 ${scrolled ? 'text-steel' : 'text-white'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-steel backdrop-blur-md px-6 py-4 border-t border-white/10">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-white/85 hover:text-gold py-3 text-[13px] tracking-widest uppercase font-semibold no-underline border-b border-white/10 last:border-0"
            >
              {link}
            </a>
          ))}
          <a href="tel:+919109105155" className="flex items-center gap-2 text-white/85 py-3 text-sm no-underline mt-1">
            <PhoneIcon /> 910-910-5155
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block w-full bg-gold text-steel text-center py-3 text-[13px] font-black tracking-wider uppercase mt-2 no-underline"
          >
            BOOK NOW
          </a>
        </div>
      )}
    </nav>
  )
}
