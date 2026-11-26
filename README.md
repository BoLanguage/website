# Bo website

This is the static landing page for [bo-lang.org](https://bo-lang.org/).
To preview it locally, run from this directory:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. The site has no build step; GitHub Pages can
publish the repository root. `CNAME` preserves the custom domain when publishing.

The playground link points to `https://bolanguage.github.io/bo/`, the expected
GitHub Pages address for the Bo repository. Pages must be enabled and the
playground workflow deployed before that link will work.

The mascot and self-hosted fonts come from the Bo repository. Font license
files are included in `assets/`. The images are derived from them:

- `mascot.webp` (196 px wide), `favicon.png` (64 px) and `apple-touch-icon.png`
  (180 px) are scaled from the mascot in the Bo repository.
- `playground.webp` is a 1440×900 screenshot of the browser playground paused
  inside the factorial example shown on the page.
- `og-card.png` is the 1200×630 social preview: the brand, the headline and the
  mascot rendered with the site's fonts and colors.

The hero's "Step through it in the playground" link carries the factorial
program in its `#share=` fragment (see `playground/share.mjs` in the Bo
repository). Regenerate it with `shareLink` if the example changes.

The external-link and copy icons are from [Lucide](https://lucide.dev/)
(`external-link` and `copy`, v1.81.0); their ISC license is included in
`assets/LICENSE-lucide`. External links stay in the same tab; the icon only
marks that a link leaves the site.

## License

The website is released under the MIT license (see `LICENSE`), like Bo. The
fonts keep their SIL Open Font License and the icons their ISC license, as
included in `assets/`.
