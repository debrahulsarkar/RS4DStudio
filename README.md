# RS4DStudio Portfolio

A premium dark-theme portfolio website for a professional 3D Character Sculptor specializing in collectible statues, stylized characters, miniatures, and 3D printable models.

## Installation

~~~bash
pnpm install
~~~

## Development

~~~bash
pnpm dev
~~~

Open http://localhost:3000.

## Build

~~~bash
pnpm build
~~~

## Deployment on Vercel

Import the GitHub repository in Vercel and keep the default Next.js settings. No code changes are required.

## Project Structure

~~~text
app/            Next.js routes, metadata, robots, sitemap, and global styles
components/     Reusable UI and feature components
sections/       Page sections for the one-page portfolio
hooks/          Shared animation constants
lib/            Content data and utilities
types/          Shared TypeScript types
public/         Favicon, OpenGraph image, and placeholder portfolio artwork
~~~

## Customization Guide

- Edit projects, services, skills, testimonials, and FAQ in lib/data.ts.
- Replace public/projects/*.svg with finished sculpt renders.
- Adjust brand colors in tailwind.config.ts and app/globals.css.
- Update SEO and social metadata in app/layout.tsx.
- Connect the contact form to an API route or form provider when backend handling is needed.
