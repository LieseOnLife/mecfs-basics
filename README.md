# ME/CFS Basics

Sourced reference pages on ME/CFS for people caring for a loved one at home.
Published at https://lieseonlife.github.io/mecfs-basics/ with [Quartz](https://quartz.jzhao.xyz) v5.

## Layout

- `content/`: the site's pages. It's also an Obsidian vault: open the folder in Obsidian
  to read or edit it. The `learn-citations` snippet styles citation chips there;
  `quartz/styles/custom.scss` does the same on the site.
  - `index.md`: the home page, with the page map and suggested reading path
  - `What ME-CFS is.md` … `Reading the research.md`, `FAQ.md`, `Glossary.md`: the
    reference pages
  - `sources/`: one page per cited source, with the cited passages marked
  - `files/`: source PDFs that are CC BY or public domain. Other sources link to the
    original instead.
- `quartz.ts`: sidebar order (the lessons in reading order, then FAQ and Glossary);
  keep it in step with the reading path on the home page.
- `.github/workflows/deploy.yml`: builds on every PR, deploys to GitHub Pages on push to `v5`.

## Preview locally

```bash
npm ci
npx quartz plugin install
npx quartz build --serve   # http://localhost:8080
```

## Upgrading Quartz

`npx quartz upgrade` pulls new Quartz releases from upstream.
