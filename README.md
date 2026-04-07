# Orignal Brothers

> Static website for Orignal Brothers — built with plain HTML, CSS, and JavaScript. Deployed to GitHub Pages.

🌐 [originalbrothers.pizza](https://originalbrothers.pizza)

## Stack

- HTML5, CSS3, vanilla JavaScript
- Hosted on GitHub Pages with a custom domain

## Local development

No build step required — just open the file in a browser:

```bash
git clone https://github.com/khan-fluent/Orignal-Brothers.git
cd Orignal-Brothers
# Open index.html in your browser, or serve locally:
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Deployment

Pushes to `main` automatically trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which publishes the site to GitHub Pages. The custom domain is configured via the [`CNAME`](CNAME) file.

## Project structure

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── images/
└── CNAME              # custom domain
```

---

Maintained by [khanfluent](https://khanfluent.digital).
