# Signode Engineering Services

Responsive implementation of the supplied Figma home page (`5:444`), About Us page (`61:1548`) and Projects page (`53:1081`). Built with React, TypeScript, Vite and plain CSS. Original Figma images and SVG artwork are stored in `public/assets`; Roboto is served locally.

## Run

```sh
npm install
npm run dev
```

- Home: http://localhost:5173/
- About Us: http://localhost:5173/about
- Projects: http://localhost:5173/projects

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to a static host with an SPA fallback to `index.html` so `/about` and `/about-us` can be opened directly.

## GitHub Pages

The `main` branch deploys automatically to [GitHub Pages](https://robotics1025.github.io/Signode/) through the workflow in `.github/workflows/deploy.yml`.

## Included behavior

Service tabs with keyboard navigation, hero/project/spotlight carousels, project image dialogs, local section search, mobile navigation and reduced-motion support. Project navigation opens the dedicated Projects page. It includes all 12 supplied project cards, a featured carousel, combined industry/focus/location filters, text search, alphabetical sorting and empty-state recovery.

The supplied design contains only 12 project records and no dates. The catalogue therefore shows one page of actual records and offers featured/alphabetical order. Additional pagination and date sorting need actual project data. Original image/title/tag assignments are preserved from Figma; industry filter groups are inferred from the project titles. Social-account URLs and approved legal statements also need company-provided content.

## Content still needed

Direct company contact details were not included in the supplied design. Contact actions show an explicit notice until real details are supplied. No enquiry is transmitted. This frontend has no backend or analytics. Footer policy notices describe the current frontend behavior and should be replaced with approved company policy copy before publication.

## Validation

Production build passes. Chromium checks covered both routes, local image loading, icon masks, navigation, tabs, carousels, image dialogs, search and mobile menu behavior. No horizontal overflow was found at viewport widths of 375, 390, 768, 1280 and 1920 pixels. Desktop and mobile screenshots were visually reviewed against the Figma reference.
