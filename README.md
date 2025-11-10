
  # Portfolio

  A modern developer portfolio built with **Vite + React (SWC)**, **TypeScript**, and **utility‑first styling (Tailwind v4 syntax)**. It showcases projects, experience, skills, and theming with a clean, accessible UI inspired by a clean design system.

  ## Features

  - Fast dev setup (Vite + SWC React)
  - Dark / light theme support via CSS variables
  - Animated entrance effects (fade, typewriter, float)
  - Project cards with GitHub & Live Demo actions
  - Reusable UI primitives (Radix + custom components)
  - Responsive layout (mobile → desktop)
  - Accessible focus states and reduced motion friendly transitions
  - Centralized configuration (`constants.ts`) for projects and metadata

  ## Tech Stack

  | Layer        | Tools |
  |--------------|-------|
  | Framework    | React 18, TypeScript |
  | Bundler      | Vite 6 (SWC React plugin) |
  | UI / Headless| Radix UI components |
  | Styling      | Tailwind CSS (v4 style compile) + custom CSS variables |
  | Icons        | lucide-react |
  | Interactions | react-hook-form, embla-carousel, recharts, sonner notifications |

  ## Project Structure

  ```
  ├── index.html                # App mount point
  ├── vite.config.ts            # Vite + alias config
  ├── package.json              # Dependencies & scripts
  ├── src/
  │  ├── main.tsx               # React root rendering
  │  ├── App.tsx                # Top-level layout composition
  │  ├── index.css              # Tailwind entry & base imports
  │  ├── styles/globals.css     # Extended theme + custom animations
  │  ├── lib/constants.ts       # Projects, skills, social links
  │  ├── lib/useTheme.ts        # Theme toggling hook
  │  ├── lib/useTypewriter.ts   # Typewriter effect hook
  │  ├── components/sections/   # Page sections (Hero, Projects, About ...)
  │  └── components/ui/         # Reusable UI primitives
  └── README.md
  ```

  ## Getting Started

  ```bash
  git clone https://github.com/geeky-vaiiib/Portfolio
  cd Portfolio
  npm install
  npm run dev
  ```

  Then open: http://localhost:3000

  ## Available Scripts

  ```bash
  npm run dev     # Start local dev server (port 3000)
  npm run build   # Production build (output in /build)
  ```

  ## Theming

  The theme system relies on CSS custom properties defined in `globals.css` and a `.dark` class toggle. To extend colors:

  1. Add new variables under `:root` and `.dark`.
  2. Reference them in Tailwind via inline CSS variables or utility layers.

  ## Adding a Project

  Edit `src/lib/constants.ts`:

  ```ts
  {
    id: 7,
    title: "NewProject",
    description: "Short summary",
    tech: ["TypeScript", "React"],
    github: "https://github.com/username/NewProject"
  }
  ```

  It will auto-render in the `Projects` grid with Code and (if present) Live Demo buttons.

  ## Accessibility & UX

  - Focus styles: consistent via `:focus-visible` and Tailwind utilities.
  - Animations use opacity/transforms; you can add a reduced motion check if needed.
  - Buttons are keyboard navigable; external links use `rel="noopener noreferrer"`.

  ## Contributing

  Pull requests welcome. For larger changes, open an issue first to discuss scope. Suggested areas:

  - Performance optimizations
  - Additional theme presets
  - i18n support
  - Automated tests (React Testing Library / Vitest)

  ## License

  Currently unlicensed. You may fork for personal use; please attribute original design inspiration and retain credits. Add a LICENSE file (MIT recommended) if you plan broader open-source distribution.

  ## Credits

  - Icons: lucide-react
  - Headless components: Radix UI

  ---

  Made with clean code and curiosity.
  