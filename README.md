# Jalaram Tours & Travel — Website

A pixel-perfect React + Tailwind CSS + Vite website for Jalaram Tours & Travel.

## Tech Stack
- **React 18** — UI components
- **Tailwind CSS 3** — Utility-first styling
- **Vite 5** — Lightning fast dev server & build tool
- **Google Fonts** — Playfair Display + DM Sans

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx       # Fixed top navigation with mobile menu
│   ├── Hero.jsx         # Full-screen hero + Quick Enquiry form
│   ├── Fleet.jsx        # Vehicle showcase grid
│   ├── Services.jsx     # Service cards
│   ├── Routes.jsx       # Popular destinations grid
│   ├── About.jsx        # About + stats section
│   ├── Contact.jsx      # Contact info + enquiry form
│   └── Footer.jsx       # Footer with links and info
├── App.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Tailwind directives + global styles
```

## Colors
- **Gold**: `#E07B39`
- **Cream**: `#F5F0E8`
- **Dark**: `#0F0F0F`

## Fonts
- **Headings**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

## Customization
- Update contact details in `Footer.jsx` and `Contact.jsx`
- Update vehicle images in `Fleet.jsx`
- Add/remove routes in `Routes.jsx`
- Update phone number across `Navbar.jsx` and `Hero.jsx`
