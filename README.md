# Rafael Maia — Developer Portfolio

A modern, dark-themed single-page portfolio built with React, Vite, and TailwindCSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Sticky nav with mobile hamburger
│   │   ├── Hero.jsx        # Home / intro section
│   │   ├── Stacks.jsx      # Tech stack grid cards
│   │   ├── Projects.jsx    # Horizontal project carousel
│   │   ├── Contact.jsx     # Social links & contact
│   │   └── Footer.jsx      # Footer
│   ├── hooks/
│   │   └── useReveal.js    # Scroll-triggered reveal animation hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Global styles + Tailwind directives
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ✨ Features

- Dark minimal aesthetic with noise texture overlay
- Sticky navbar with active section tracking + mobile hamburger
- Scroll-triggered reveal animations (IntersectionObserver)
- Tech stack cards with hover glow/lift effects
- Horizontal scroll carousel with arrow controls and dot indicators
- Expandable project descriptions ("Read more")
- Responsive grid for all screen sizes
- Custom scrollbar styling
- Google Fonts: Syne (display) + DM Sans (body) + JetBrains Mono
