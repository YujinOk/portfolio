# Portfolio Rebuild Plan

Work through this top to bottom. Each section builds on the last.
The dev server runs with `npm run dev` — keep it open while you work.

---

## 1. Clean up old files

Delete everything from the old site. Astro ignores them but they're clutter.

```
delete: index.html
delete: style.css
delete: script.js
delete: css/
delete: html/
```

Move your images into Astro's public folder so they're accessible:
```
move: img/ → public/img/
```

---

## 2. Configure your site identity

**`src/consts.ts`** — update the site title and description:
```ts
export const SITE_TITLE = "Yujin Ok";
export const SITE_DESCRIPTION = "Developer, writer, and former fitness instructor based in Melbourne.";
```

**`package.json`** — change `"name": "awesome-axis"` to `"name": "yujin-portfolio"`

---

## 3. Add Tailwind CSS

Run this in your terminal (Astro installs and configures it automatically):
```
npx astro add tailwind
```

After this, you can delete `src/styles/global.css` if you want a clean slate,
or keep it for any global resets you want to write manually.

> **Learn:** What Tailwind is and how utility classes work.
> Read the first page of https://tailwindcss.com/docs/utility-first

---

## 4. Add React (for interactive components later)

```
npx astro add react
```

You won't use this immediately but you'll need it for things like:
- A project filter by tag
- A dark mode toggle
- Any stateful UI

> **Learn:** The difference between `.astro` components (server, no JS)
> and `.tsx` React components (client, with JS). In Astro you choose per component.

---

## 5. Update the layout and navigation

**`src/components/Header.astro`**
- Change nav links to: Home, Blog, Projects, About
- Add your name/logo on the left

**`src/components/Footer.astro`**
- Replace placeholder text with your name and © current year
- Add your LinkedIn, GitHub, email links (you have the icons in public/img already)

**`src/components/BaseHead.astro`**
- This controls meta tags for every page — it's already wired up
- Add an `og:image` later when you have a profile photo set up

---

## 6. Build the Home page

**`src/pages/index.astro`**

Replace the default template content with three sections:

1. **Hero** — your name, a one-liner about yourself, links to Blog and Projects
2. **Recent Posts** — show the last 3 blog posts (the template already does this, just restyle it)
3. **Featured Projects** — 2-3 project cards with a screenshot, description, and links

> **Learn:** How Astro pages work, how to query content collections (`getCollection`),
> and how to pass props between components.

---

## 7. Build the Projects page

This page doesn't exist yet — create it:
**`src/pages/projects/index.astro`**

Each project card should have:
- Screenshot (put images in `public/img/projects/`)
- Project name
- 1-2 sentence description of what it does and why you built it
- Tech stack tags
- Links: Live site + GitHub repo

Projects to add (start with these, keep adding):
- [ ] Calculator
- [ ] Google Book UI
- [ ] K-Ecommerce Store
- [ ] (any future projects)

> **Tip:** Take screenshots of your existing projects and save them as
> `public/img/projects/calculator.png` etc.

---

## 8. Port the About page

**`src/pages/about.astro`** — already exists, replace default content.

Your story from the old site is genuinely good. Keep the three-part structure:
1. Where I'm from / how I got to Melbourne
2. My career before coding (fitness, dance, health science, haematology)
3. How I got into coding

Add a photo of yourself.

Remove the Gangnam style story if you want a more professional tone — your call.

---

## 9. Write your first real blog post

**`src/content/blog/rebuilding-my-portfolio.md`**

Delete the placeholder posts (`first-post.md`, `second-post.md`, etc.) and write one real one.

Suggested first post: *"Why I rebuilt my portfolio with Astro"* — what you had, what you wanted, what you learned doing it. This doubles as a learning log entry.

Frontmatter structure:
```md
---
title: 'Why I rebuilt my portfolio with Astro'
description: 'From Bootstrap HTML to Astro — what I learned and why I made the switch'
pubDate: 'Jun 17 2026'
heroImage: '/img/blog/astro-rebuild.jpg'
---
```

---

## 10. Deploy to Vercel

1. Push the `astro-rebuild` branch to GitHub
2. Go to vercel.com → New Project → import your repo
3. Vercel auto-detects Astro — just click Deploy
4. Get a free `.vercel.app` domain, or connect a custom `.dev` domain (~$12/year)

Once it's live, merge `astro-rebuild` into `main`.

---

## Later (add these over time)

These are not urgent — add them as you learn new things:

- **`/now` page** — what you're currently working on or learning (`src/pages/now.astro`)
- **`/uses` page** — your tools, setup, gear (`src/pages/uses.astro`)
- **Dark mode toggle** — a good first React component inside Astro
- **Project tag filter** — filter by React, Java, etc. (another React component)
- **Reading time** on blog posts
- **OG image** generation for social sharing
- **Analytics** — Plausible (privacy-friendly) or Vercel Analytics (built in)
- **Contact form** — hook up to Formspree or Resend (intro to APIs)

---

## Reference

| Command | What it does |
|---|---|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npx astro add tailwind` | Add Tailwind |
| `npx astro add react` | Add React |

Astro docs: https://docs.astro.build
Tailwind docs: https://tailwindcss.com/docs
