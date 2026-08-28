# dolar-portfolio

Personal portfolio — Nguyen Tuan Minh, full-stack developer.

Four static files, no build step, no dependencies. Open `index.html` and it runs.

```
index.html   structure
style.css    the whole design
data.js      ← all content lives here
main.js      renders data.js into index.html + carousel/menu
```

## Editing

Everything you'd want to change — name, tagline, skills, work history, projects,
articles, social links — is in [`data.js`](data.js). Nothing else needs touching.

- `*text between asterisks*` renders italic.
- Empty an array (`articles: []`) and that section disappears.
- Project screenshots: drop images in `images/` and list them in the project's
  `images: []`. First image becomes the large tile. Leave it empty and a
  gradient placeholder is drawn instead.

## Running locally

Any static server works — needed only because browsers block `file://` fetches
for fonts, not for the site itself:

```bash
python -m http.server 5173
```

## Deploying

GitHub Pages: repo **Settings → Pages → Source: Deploy from a branch → `main` / `root`**.
Live a minute later at `https://nguyentuanminh0763.github.io/dolar-portfolio/`.

## Credits

Design based on [Portfolio Full-stack Developer](https://www.behance.net/gallery/199132655/Portfolio-Full-stack-Developer)
by Taisia Tsyganok, who permits reuse in the project's comments. Rebuilt from
scratch in HTML/CSS/JS.
