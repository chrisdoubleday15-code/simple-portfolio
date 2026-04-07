# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Type-check (astro check) then build to dist/
npm run preview    # Preview the production build locally
```

There are no tests in this project.

## Architecture

This is an **Astro v5** static portfolio site for Christopher Doubleday (motion designer/video editor). It uses React for interactive components, Tailwind CSS for styling, and ShadCN/Radix UI for UI primitives.

### Customization entry points

All personal content lives in two places — editing these is the primary workflow:

- **`src/config.ts`** — `SITE`, `ME`, and `SOCIALS` exports control site metadata, profile info (name, profession, bio, profile image, contact info), and which social links appear.
- **`src/data/`** — TypeScript array files for structured content:
  - `Jobs.ts` — work experience
  - `education.ts` — education history
  - `hardSkills.ts` — skills with icons (icon name maps to `src/icons/`)
  - `softSkills.ts` — soft skills
  - `languages.ts` — spoken languages
  - `menu.ts` — navigation items

### Content collections (MDX/Markdown)

- **`src/content/projects/`** — Each `.mdx` or `.md` file is a portfolio project. Frontmatter fields: `title`, `summary`, `tags`, `startDate`, `endDate`, `url`, `cover`, `ogImage`. Images go in `src/content/projects/images/`.
- **`src/content/posts/`** — Blog posts, same MDX/Markdown format.

### Pages

- `src/pages/index.astro` — Homepage (profile, skills, experience tabs)
- `src/pages/projects/` — Projects listing and detail pages
- `src/pages/blog/` — Blog listing and post pages

### Icons

Icons are SVG files in `src/icons/`. The `astro-icon` integration resolves icon names used in `hardSkills.ts` and `SOCIALS` to files in this directory.

### Styling

Theme colors are defined in `tailwind.config.mjs`. Custom global styles in `src/styles/globals.css`. Key custom color tokens: `light-theme`, `dark-theme`, `primary-light`, `primary-dark`, `n900`, `n700`, `n500`.
