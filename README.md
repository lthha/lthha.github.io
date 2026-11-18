# Academic Portfolio

This repository contains the source code for my personal academic portfolio website. It features a clean, responsive design built with vanilla HTML, CSS, and JavaScript.

## Features

- **Multi-page Layout:** Home (About, News, Selected Publications) plus Publications, Talks, Experience and Teaching pages, all sharing the same sticky sidebar.
- **Dynamic Blog System:** Markdown files (in `/blogs`) are automatically fetched and rendered directly in the browser via `post.html` using [Marked.js](https://marked.js.org/). 
- **Math Support:** Full LaTeX support for blog posts via [MathJax](https://www.mathjax.org/).
- **No Build Tools Required:** Pure front-end stack without Node.js or bundlers.

## Folder Structure

```text
portfolio/
├── index.html               ← Home: About, News, Selected Publications
├── publications.html        ← Full publication list
├── talks.html               ← Talks
├── experience.html          ← Experience timeline
├── teaching.html            ← Teaching
├── cv/                      ← LaTeX CV (cv.tex → cv.pdf)
├── post.html                ← Template page for rendering blog posts
├── README.md                ← Project documentation
├── css/                     ← Stylesheets and CSS variables
│   └── style.css           
├── js/                      ← Scroll animations, nav spy, collapse panels
│   └── main.js             
├── images/                  ← All site images
│   ├── avatar.jpg           ← Profile photo
│   ├── projects/            ← Project thumbnail images
│   ├── publications/        ← Paper thumbnails
│   └── misc/                ← Miscellaneous photos (Awards, personal)
├── blogs/                   ← Markdown files for blog posts
│   └── *.md        
└── resources/               ← Downloadable files
    └── cv.pdf               
```

## Adding New Content

### Blog Posts
To add a new blog post:
1. Create a `your-post-title.md` file in the `blogs/` folder.
2. In `index.html`, add a link pointing to `post.html?post=your-post-title` within the Blog section.

### Publications / Projects
Add thumbnail images to `images/publications/` or `images/projects/` and update the relevant `<img>` tags in `index.html` / `publications.html`.

### Sidebar
The sidebar is copied into every page. When you change it (links, nav items), update it in all pages. The active nav item is set automatically by `js/main.js`.

## Theming & Styles
All site-wide colors (backgrounds, accents, sidebar) use CSS custom properties (variables) defined at the very top of `css/style.css`. 

## Deployment
Hosted seamlessly on statically served platforms (GitHub Pages, Netlify, Vercel). Simply point the deployment to the root directory.

## Dependencies

Loaded via CDN, no installation necessary:
- [Google Fonts](https://fonts.google.com/) (Playfair Display, DM Sans, DM Mono)
- [Font Awesome 6](https://fontawesome.com/)
- [Marked.js](https://marked.js.org/)
- [MathJax 3](https://www.mathjax.org/)
