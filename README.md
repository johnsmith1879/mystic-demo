# Mystic Custom Fabrication — Demo Website

A Next.js 14 demo website for Mystic Custom Fabrication, showcasing broadcast studio fabrication, museum exhibits, and corporate/experiential environments.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS 3.4+
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd Mystic-demo

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static export
npm run build

# Preview production build
npm run start
```

## Project Structure

```
/mystic-demo
├── /public
│   ├── /images
│   │   ├── /projects        # Project photos
│   │   ├── /team            # Team headshots
│   │   └── /clients         # Client logos
│   └── /fonts               # Self-hosted Inter
│
├── /src
│   ├── /app                 # Next.js App Router pages
│   │   ├── /about
│   │   ├── /contact
│   │   ├── /projects
│   │   ├── /services
│   │   ├── /why-mystic
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── /components
│   │   ├── /ui              # Base UI components
│   │   ├── /layout          # Layout components
│   │   └── /blocks          # Page sections
│   │
│   ├── /content             # Static content (JSON)
│   │   └── /projects
│   │
│   └── /lib                 # Utilities & types
│       ├── types.ts
│       └── utils.ts
│
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Light Base | `#F5F5F2` | Light section backgrounds |
| Charcoal | `#1A1A1A` | Dark sections, text |
| Electric Orange | `#FF5C1C` | CTAs, accents |
| Gray 700 | `#4A4A4A` | Primary text (light) |
| Gray 500 | `#7C7F84` | Secondary text |
| Gray 300 | `#D7D9DD` | Borders, dividers |

### Typography

- **Font:** Inter
- **Display:** 72px / Bold
- **H1:** 56px / Bold
- **H2:** 40px / Semi-Bold
- **H3:** 32px / Semi-Bold
- **Body:** 18px / Regular

## Adding Content

### Projects

Add project JSON files to `/src/content/projects/`:

```json
{
  "slug": "project-name",
  "title": "Project Title",
  "client": "Client Name",
  "category": "broadcast",
  "heroImage": "/images/projects/project-name/hero.jpg",
  "summary": "Brief description...",
  "keyFacts": [
    { "value": "13,000", "label": "sq ft" }
  ]
}
```

### Images

Place images in `/public/images/projects/[project-slug]/`:
- `hero.jpg` — Hero image (1920×1080)
- `gallery-1.jpg` — Gallery images (1200×800)

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Static Export

```bash
npm run build
# Output in /out directory
```

## Development Notes

- This is a **demo version** — forms don't submit
- Content is static JSON, not CMS-driven
- Designed for easy migration to production CMS

---

Built with ❤️ for Mystic Custom Fabrication
