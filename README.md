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

## 🎨 Customization

### Replacing Profile Photo
In `src/components/Hero.jsx`, find the image container div and replace the placeholder with:
```jsx
<img src="/your-photo.png" alt="Rafael Maia" className="w-full h-full object-cover" />
```
Place your image in the `public/` folder.

### Updating Projects
Edit the `projects` array in `src/components/Projects.jsx` — each item has:
- `title`, `description`, `tech`, `github`, `color`, `emoji`

### Updating Contact Links
Edit the `socials` array in `src/components/Contact.jsx`.

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
