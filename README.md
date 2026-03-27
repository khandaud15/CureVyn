# CureVyn

Marketing website for CureVyn Pharmaceuticals, built with React and Vite.

## Stack

- React
- Vite
- JavaScript
- CSS
- Vercel

## Current Sections

- Header
- Hero
- Company About Us
- Products
- Blog preview
- Blog article pages
- Footer
- Cookie consent banner

## Project Structure

```text
src/
  components/
    blogData.js
    common/
    layout/
    pages/
    sections/
  styles/
  App.jsx
  main.jsx
Images/
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Blog Routing

The site currently uses hash-based article routes so blog pages work without adding an external router.

Examples:

- `#/blog/building-trust-in-modern-healthcare`
- `#/blog/why-quality-matters-in-pharmaceuticals`

## Deployment

This project is deployed on Vercel and connected to:

- `https://curevyn.com`

## Repository

GitHub repository:

- `https://github.com/khandaud15/CureVyn`

## Notes

- Product, hero, and blog images are stored in the `Images/` folder.
- The project currently uses a component-based single-page structure with a separate blog article view.
- Cookie consent is stored in local storage on the client.
