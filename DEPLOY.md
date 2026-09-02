This repository now includes simple npm tooling and a GitHub Actions workflow to deploy the static site to GitHub Pages.

Files added:

- [package.json](package.json) — scripts: `dev`, `build`, `start`.
- [build.js](build.js) — copies the site into `dist/` and creates `.nojekyll`.
- [/.github/workflows/gh-pages.yml](.github/workflows/gh-pages.yml) — CI that runs `npm ci`, `npm run build` and deploys `dist/` to the `gh-pages` branch.
- [.gitignore](.gitignore) — ignores `node_modules/` and `dist/`.

Local usage

1. Install dependencies:

```bash
npm install
```

2. Run a dev server (auto reload):

```bash
npm run dev
```

3. Build to `dist/`:

```bash
npm run build
```

4. Preview the built site:

```bash
npm run start
```

Deployment

Push to the `main` branch; GitHub Actions will build and publish `dist/` to the `gh-pages` branch. In your repository settings -> Pages, set the source to the `gh-pages` branch (root). The Action will create/update that branch automatically.
