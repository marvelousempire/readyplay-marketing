# READYPLAY — public marketing site

This repository is meant to be **public** on GitHub: the **READYPLAY** landing page (Next.js static export), **curated changelog**, and CTAs. **iOS / backend source stays in your private monorepo** — only copy what you intend to publish here.

**Do not commit** API keys, provisioning profiles, internal URLs, or private roadmap detail.

---

## Go live on GitHub Pages (free, generic URL)

### Push from the private monorepo (GitHub CLI)

From the **Red-E Play App** monorepo root, after **`tools/sync-readyplay-marketing.sh`** when needed:

```bash
./tools/push-readyplay-marketing-remote.sh
```

**Best for Cursor / agents:** set **`READYPLAY_MARKETING_PUSH_TOKEN`** to a PAT (classic **`repo` + `workflow`**, or fine-grained on this repo only) in **Cursor → Settings → environment** (or your shell). The script uses **token HTTPS** so pushes include **`.github/workflows/`** without OAuth scope fights. Full setup: **[`docs/Cursor-and-readyplay-marketing-push.md`](../docs/Cursor-and-readyplay-marketing-push.md)**.

**Interactive Mac (no PAT):** uploading workflow YAML via **`gh`** OAuth requires the **`workflow`** scope:

```bash
gh auth refresh -h github.com -s workflow
```

Complete the **device** or **browser** flow, then run **`push-readyplay-marketing-remote.sh`** again.

Override the remote with **`READYPLAY_MARKETING_REMOTE`** if your public repo is not **`https://github.com/marvelousempire/readyplay-marketing.git`**.

### Or: manual first-time setup

1. **Create** a new GitHub repository (example name: **`readyplay-marketing`**), visibility **Public**, empty (no README) or replace with this tree.
2. **Push** this folder as the **repository root** (`main` branch): your root should contain `package.json`, `app/`, `.github/workflows/pages.yml`, etc.
3. In GitHub: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions**.
4. Open **Actions → READYPLAY marketing site (GitHub Pages) → Run workflow** once (or push any commit to `main`).
5. After green **deploy**, open **Settings → Pages** for the live URL. For a **project** repository it is usually:

   **`https://<your-username>.github.io/readyplay-marketing/`**

   (GitHub uses the **repository slug** in the path.)

If the page loads without styles, the **`NEXT_PUBLIC_BASE_PATH`** in the workflow does not match the slug—adjust the repo name or the workflow env to match [GitHub Pages project URLs](https://docs.github.com/en/pages/getting-started-with-github-pages/types-of-github-pages-sites).

### Custom domain later

Use **Settings → Pages → Custom domain** and your DNS provider. For a site at the **domain root** (`https://www.example.com/`), set repository variable **`NEXT_PUBLIC_BASE_PATH`** to empty and change the workflow build step to omit that variable (same pattern as the monorepo `web/README.md`).

---

## Develop locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Static output is **`out/`** (upload anywhere: Netlify, Cloudflare Pages, S3, nginx).

---

## Syncing from the private monorepo

If the canonical marketing source lives in another repo under **`web/`**, refresh this tree before release:

```bash
# From the private monorepo root (example):
rsync -a --delete web/ /path/to/this/readyplay-marketing-clone/ \
  --exclude '.next' --exclude 'out' --exclude 'node_modules' --exclude '.github'
# Then restore or re-copy .github/workflows/pages.yml if rsync removed it.
```

The private **Red-E Play App** monorepo includes **`tools/sync-readyplay-marketing.sh`** to automate that (preserves **`.github/`**).

---

## Stack

Next.js (App Router), Tailwind CSS, Framer Motion, static export.
