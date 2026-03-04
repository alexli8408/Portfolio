# axli.me

My personal portfolio — minimal, fast, and animated.

**[axli.me →](https://axli.me)**

## Stack

- **Framework** — [Next.js 16](https://nextjs.org/) (App Router)
- **Styling** — [Tailwind CSS 4](https://tailwindcss.com/)
- **UI** — [cmdk](https://cmdk.paco.me/) command palette, [Radix](https://www.radix-ui.com/) primitives, [Lucide](https://lucide.dev/) icons
- **Fonts** — [Geist](https://vercel.com/font), [Caveat](https://fonts.google.com/specimen/Caveat)
- **Deployment** — [Vercel](https://vercel.com/)

## Features

- ⌘K command palette with keyboard shortcuts for quick navigation
- Light / dark theme with system preference detection
- Sweep underline link animations and interactive section hover effects
- Touch-friendly interactions with tap-to-activate sections on mobile
- Custom SVG favicon and Open Graph preview image
- Responsive, mobile-first layout with custom scrollbar styling

## Project Structure

```
src/app/
├── page.tsx                  # Home page — education, experience, projects
├── layout.tsx                # Root layout with metadata, fonts, and providers
├── globals.css               # Global styles, scrollbar, and animations
└── components/
    ├── AnimatedLink.tsx       # Underline-sweep link (internal + external)
    ├── AnimatedSection.tsx    # Hover/touch-activated section wrapper
    ├── BulletItem.tsx         # Diamond bullet list item
    ├── SubItem.tsx            # Arrow sub-item for nested lists
    ├── Header.tsx             # Site header with name link
    ├── Footer.tsx             # Social links and copyright
    ├── CommandPalette.tsx     # ⌘K command palette (cmdk + Radix Dialog)
    ├── ThemeProvider.tsx      # Dark/light theme context provider
    └── icon/                  # Organization logos (PNG)
```

## Development

```bash
npm install
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## License

MIT
