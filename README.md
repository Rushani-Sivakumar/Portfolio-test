# Rushani Sivakumar — Portfolio

A React + Tailwind CSS portfolio site with an EmailJS-powered contact form and toast alerts.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Before you deploy — things to fill in

1. **Contact form (EmailJS)** — `src/components/Contact.jsx`
   - Create a free account at https://www.emailjs.com
   - Add an Email Service (e.g. Gmail) and an Email Template with `name`, `email`, `message` fields
   - Replace `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY` at the top of the file

2. **Contact links & email** — `src/components/Hero.jsx` and `src/components/Contact.jsx`
   - Replace the placeholder `mailto:your.email@example.com`, GitHub, and LinkedIn links

3. **Resume** — `src/components/Hero.jsx`
   - Add your resume PDF to the `public/` folder and point the "Download resume" link to it (e.g. `/resume.pdf`)

4. **Project links** — `src/data/projects.js`
   - Replace `repoUrl` (and `demoUrl` if you have a live dashboard) for each project with your real GitHub links

5. **Certification link** — `src/data/projects.js`
   - Replace `credentialUrl` with your IBM certificate verification link

## Deploying

Any static host works well with this Vite build:
- **Vercel** or **Netlify**: connect your GitHub repo, build command `npm run build`, output directory `dist`
- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder (e.g. via the `gh-pages` package)

## Structure

```
src/
  components/   Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer
  data/         projects.js, skills.js — edit these to update content without touching JSX
  hooks/        useReveal.js — scroll-triggered fade-up animation
```
