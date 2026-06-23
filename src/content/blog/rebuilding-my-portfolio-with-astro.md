---
title: 'Why I rebuilt my portfolio with Astro'
description: 'My old site was Bootstrap HTML. Here is what I learned switching to Astro — and why it was the right move.'
pubDate: 'Jun 18 2026 00:00:00 GMT+1000'
---

My old portfolio was a bunch of Bootstrap HTML files. It worked, it looked okay, and it had my story on it. But every time I wanted to add something — a new project, a blog post — I had to copy-paste HTML, update the navbar in three different files, and hope I didn't break anything.

It was fine for when I built it. I was still learning HTML and CSS. Bootstrap made things easier. But I had outgrown it.

## Why Astro

I'd heard about Astro a few times and kept putting off looking into it. When I finally did, the thing that clicked for me was this: **it ships zero JavaScript by default**.

Coming from React, that sounds weird. But for a portfolio — which is mostly text and images — you don't actually need JavaScript running in the browser. Astro builds everything into plain HTML at build time. The result loads faster, works better for SEO, and is simpler to reason about.

The other thing I liked was Markdown support. Writing blog posts in `.md` files and having Astro turn them into pages automatically felt like the right way to do it. No CMS, no database, just files.

## What I actually built

The site has four pages: Home, Blog, Projects, and About. The About page carries over my story from the old site — three sections covering how I ended up in Melbourne, my career before coding (fitness instructor, health science degree, haematology lab), and how I got into programming during the pandemic.

The Projects page lists my work, including a full-stack tech test I did — a superhero search app with a React frontend, a GraphQL API I built from scratch, and AWS DynamoDB as the database. That one was a challenge. I'd never used GraphQL before and had to learn it under time pressure. Worth it.

## What surprised me

A few things caught me off guard:

**The frontmatter section.** Every `.astro` file has a `---` block at the top where you write JavaScript that runs at build time. This is where you fetch data, import components, define variables. None of it ships to the browser. It took me a bit to get my head around the fact that I was writing JS that would just... disappear after build.

**Components without a framework.** Astro has its own component format that looks like HTML with a script section. It's simpler than React — no hooks, no state, just structure. For a static site this is actually enough.

**How fast it is.** The first time I ran `npm run build` and opened the output, I was surprised at how clean and minimal it was. No bloated JS bundle, just HTML.

## What's next

I want to add a proper home page hero section with a photo, get screenshots up for the older projects, and keep writing here. The plan is to use this blog as a learning log — writing about things as I figure them out, not after I've become an expert.

If you're in a similar spot — self-taught, building your first real portfolio — Astro is worth trying. Start with the blog template, read the docs for about an hour, and just start replacing the placeholder content with your own.
