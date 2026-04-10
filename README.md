# Academic Portfolio

This repository contains the source code for my personal academic portfolio website. It features a clean, responsive design built with vanilla HTML, CSS, and JavaScript.

## Features

- **Single-page Layout:** Smooth scrolling and sticky sidebar navigation.
- **Dynamic Blog System:** Markdown files (in `/blogs`) are automatically fetched and rendered directly in the browser via `post.html` using [Marked.js](https://marked.js.org/). 
- **Math Support:** Full LaTeX support for blog posts via [MathJax](https://www.mathjax.org/).
- **No Build Tools Required:** Pure front-end stack without Node.js or bundlers.

## Folder Structure

```text
portfolio/
├── index.html               ← Main webpage / landing page
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
Add thumbnail images to `images/publications/` or `images/projects/` and update the relevant `<img>` tags in `index.html`. 

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
