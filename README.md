# Ioannis Papathanasiou — scientific portfolio

A small, static Astro site presenting selected research, scientific software, public outputs,
education, and a print-ready HTML CV.

## Editorial scope

The site is evidence-led and intentionally selective. Content lives in `src/content/work/` and
must distinguish a demonstrated result from an inference, present status, and a scientific
limitation. Do not add private thesis drafts, diploma records, raw result packets, unpublished
manuscripts, or generated campaign outputs to this repository.

## Local development

```sh
npm install
npm run dev
```

Useful checks:

```sh
npm run check
npm run build
npm run validate:html
npm run verify
```

The production build is entirely static. There are no analytics, cookies, remote fonts,
third-party embeds, or runtime GitHub API calls. Public Streamlit demonstrations are described
and linked from the site, but are not embedded.

## Content structure

- `src/content/work/`: maintained project content and metadata.
- `src/pages/`: route-level composition for home, work, live apps, outputs, about, CV, and 404.
- `src/components/`: reusable accessible page elements.
- `src/styles/global.css`: design tokens, layout, responsive behavior, and CV print styles.
- `src/assets/`: optimized, metadata-stripped source assets processed by Astro.
- `public/`: stable metadata assets such as the favicon, social image, manifest, and robots file.

## Deployment

Pushes to `main` are verified and deployed to GitHub Pages by
`.github/workflows/deploy.yml`. The canonical URL is
<https://papathanasiouioannis.github.io>.
