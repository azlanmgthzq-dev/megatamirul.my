## Megat Amirul – Portfolio

Personal portfolio built with **Next.js 15**, focused on **mission‑critical frontend interfaces**, clean UI, and smooth micro‑interactions.

### Features

- **Welcome screen**: Animated intro with typewriter and motion effects to set the tone of the site.
- **Hero section**: 3D avatar, mission‑critical headline, and typewriter subtitle.
- **About section**: Tabbed layout for background, education, certifications, and technologies.
- **Experience section**: Timeline-style experience panels driven from a config file.
- **Contact section**: Simple call‑to‑action to reach out for opportunities.
- **Animated background**: Soft blobs and grid texture behind all sections.

### Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom utility classes (`noise`, `glass`, gradients)
- **Animation**: Framer Motion
- **Icons**: Lucide, custom SVG tech icons

### Getting Started

1. **Install dependencies**

```bash
npm install
```

2. **Run the development server**

```bash
npm run dev
```

3. **Open the app**

Visit `http://localhost:3000` in your browser.

### Project Structure (high level)

- `app/` – layout, global styles, and main page composition.
- `components/hero/` – hero layout, avatar, and headline.
- `components/about/` – tabbed About section and certification modal.
- `components/experience/` – experience config and tabs.
- `components/contact/` – contact/CTA section.
- `components/navigation/` – top navigation bar and visibility shell.
- `components/background/` – animated background blobs and section backdrop.

### Deployment

The app is optimized for deployment on platforms like **Vercel**:

```bash
npm run build
npm start
```

You can then connect this repository to Vercel and deploy directly from your main branch.
