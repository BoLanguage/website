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

The mascot, Playground+ screenshot and self-hosted fonts come from the Bo
repository. Font license files are included in `assets/`.

The copy icon is from [Bootstrap Icons](https://icons.getbootstrap.com/icons/copy/);
its MIT license is included in `assets/LICENSE-bootstrap-icons`.
