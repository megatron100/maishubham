# Minimal Portfolio + Blog

A clean, minimal personal portfolio and blog built with Astro, styled like an old-school academic website.

## Features

- **Clean, minimal design**: Plain text, white background, blue links
- **Fast static site**: Built with Astro for optimal performance
- **Content collections**: Blog posts and projects managed with Astro's content system
- **Responsive**: Works great on mobile and desktop
- **No external dependencies**: System fonts, minimal CSS

## Structure

- `/` - About/intro page
- `/thoughts` - Blog posts index
- `/thoughts/[slug]` - Individual blog posts
- `/projects` - Projects index  
- `/projects/[slug]` - Individual project pages
- `/music` - Music recommendations
- `/cv` - Resume/CV page

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Adding Content

### Blog Posts
Create `.md` files in `src/content/posts/` with frontmatter:
```yaml
---
title: "Your Post Title"
date: 2023-11-01
draft: false
description: "Optional description"
---
```

### Projects
Create `.md` files in `src/content/projects/` with frontmatter:
```yaml
---
title: "Project Name"
description: "Short description"
demoUrl: "/demo-link" # optional
repoUrl: "https://github.com/..." # optional
date: 2023-10-10
---
```

## Customization

- Update contact info in `src/pages/index.astro`
- Modify navigation in `src/layouts/Layout.astro`
- Adjust styling in the Layout component's `<style>` section
- Replace placeholder content in all pages

## Deployment

This site builds to static HTML/CSS/JS and can be deployed to:
- GitHub Pages
- Vercel
- Cloudflare Pages  
- Netlify
- Any static hosting service

Set your site URL in `astro.config.mjs` before deploying.

```
portfolio-website
├── assets
│   ├── css
│   │   ├── main.css        # Main styles for the website
│   │   └── normalize.css   # CSS reset for consistent styling
│   ├── js
│   │   └── main.js         # JavaScript for interactivity
│   └── fonts               # Custom fonts directory
├── images                  # Directory for images
├── index.html              # Homepage content and navigation
├── about.html              # Information about me
├── projects.html           # Showcase of my projects
├── contact.html            # Contact form and information
├── .gitignore              # Files to be ignored by Git
└── README.md               # Project documentation
```

## Features

- Responsive design that adapts to different screen sizes.
- CSS reset for consistent styling across browsers.
- JavaScript for dynamic content and interactivity.
- Sections for about me, projects, and contact information.

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```
   cd portfolio-website
   ```
3. Open `index.html` in your web browser to view the website.

## Deployment

This project is deployed on GitHub Pages. To update the website, push changes to the `main` branch of the repository.

## License

This project is open-source and available under the MIT License.