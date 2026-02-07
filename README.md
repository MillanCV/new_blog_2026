# Photography Portfolio

A clean, minimal photography portfolio built with Astro, inspired by professional photographer websites.

## Features

- Clean, minimal design focused on showcasing photography
- Project-based organization (commissions, personal work, portraits)
- Responsive layout that works on all devices
- Fast loading with Astro's static site generation
- Easy to customize and add your own content

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Add your images:**
   - Place your images in the `public/images/` directory
   - Use descriptive filenames (e.g., `rehearsal-001.jpg`, `portrait-001.jpg`)

3. **Update project data:**
   - Edit `src/data/projects.ts` to add your projects
   - Update image paths, titles, and descriptions

4. **Customize your information:**
   - Update your name in `src/pages/index.astro`
   - Edit `src/pages/info.astro` with your bio and credentials
   - Update contact information in `src/pages/contact.astro`

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

## Project Structure

```
/
├── public/
│   └── images/          # Your photography images
├── src/
│   ├── components/
│   │   └── Navigation.astro
│   ├── data/
│   │   └── projects.ts  # Project data and configuration
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro  # Homepage with project grid
│   │   ├── info.astro   # About/Bio page
│   │   ├── contact.astro
│   │   └── work/
│   │       └── [slug].astro  # Individual project pages
│   └── styles/
│       └── global.css   # Global styles
└── package.json
```

## Customization

### Adding a New Project

Edit `src/data/projects.ts`:

```typescript
{
  slug: 'your-project',
  title: 'Your Project Title',
  category: 'Personal', // or 'Commissions', 'Portraits'
  description: 'Description of your project',
  images: [
    { src: '/images/your-image-001.jpg', alt: 'Description' },
    { src: '/images/your-image-002.jpg', alt: 'Description' },
  ]
}
```

### Styling

- Global styles: `src/styles/global.css`
- CSS variables for easy theming (colors, spacing, fonts)
- Component-scoped styles in each `.astro` file

## Deployment

This site can be deployed to any static hosting service:

- [Vercel](https://vercel.com/)
- [Netlify](https://netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## License

MIT
