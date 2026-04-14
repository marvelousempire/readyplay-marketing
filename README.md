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

## Sport icon stickers (SF Symbols → web)

### How they work

The iOS app renders each sport icon with `Image(systemName: CourtSport.icon)` — standard SF Symbols.
SF Symbols are Apple-proprietary and have no web font, so the marketing site uses a two-layer system:

1. **PNG exports** dropped into `public/marketing/icons/` are the primary render path.
2. **Emoji fallback** in `court-sport-marketing.ts` (`sticker` field) shows automatically for any sport whose PNG is missing — so the site never breaks while you're iterating.

`SportSticker` (`components/sport-sticker.tsx`) picks the right layer at runtime using an `onError` handler:

```tsx
{imageSrc && !imgFailed
  ? <Image src={imageSrc} fill onError={() => setImgFailed(true)} />
  : <span>{emoji}</span>
}
```

`SportStickerStrip` and `SportStickerMosaic` both feed `assetPath('/marketing/icons/<iconFile>')` as `imageSrc`.
Each sport's `iconFile` in `court-sport-marketing.ts` exactly matches `CourtSport.icon` in `Court.swift`.

---

### How the PNGs were generated (reproducible)

Because the SF Symbols Mac app was unavailable, we used a Swift script that calls the same `NSImage(systemSymbolName:)` API the app itself uses:

```bash
swift /tmp/export-sf-symbols.swift "/path/to/public/marketing/icons"
```

The script lives at `/tmp/export-sf-symbols.swift` during the session — copy it from here for future runs:

```swift
import AppKit
import Foundation

let symbols: [(name: String, file: String)] = [
    ("basketball.fill",         "basketball.fill.png"),
    ("volleyball.fill",         "volleyball.fill.png"),
    ("tennis.racket",           "tennis.racket.png"),
    ("sportscourt.circle.fill", "sportscourt.circle.fill.png"),
    ("circle.grid.cross.fill",  "circle.grid.cross.fill.png"),
    ("soccerball",              "soccerball.png"),
    ("baseball.fill",           "baseball.fill.png"),
    ("flag.fill",               "flag.fill.png"),
    ("figure.run",              "figure.run.png"),
    ("figure.pool.swim",        "figure.pool.swim.png"),
    ("figure.fishing",          "figure.fishing.png"),
]

let size: CGFloat = 216  // 72pt @ 3x
let outDir = CommandLine.arguments.count > 1
    ? CommandLine.arguments[1]
    : (FileManager.default.currentDirectoryPath + "/icons")

try? FileManager.default.createDirectory(atPath: outDir, withIntermediateDirectories: true)

let config = NSImage.SymbolConfiguration(pointSize: 72, weight: .regular, scale: .large)

for sym in symbols {
    guard let base = NSImage(systemSymbolName: sym.name, accessibilityDescription: nil) else {
        print("⚠️  Not found: \(sym.name)"); continue
    }
    let img = base.withSymbolConfiguration(config) ?? base
    let rep = NSBitmapImageRep(
        bitmapDataPlanes: nil, pixelsWide: Int(size), pixelsHigh: Int(size),
        bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true,
        isPlanar: false, colorSpaceName: .calibratedRGB,
        bytesPerRow: 0, bitsPerPixel: 0
    )!
    let ctx = NSGraphicsContext(bitmapImageRep: rep)!
    NSGraphicsContext.saveGraphicsState()
    NSGraphicsContext.current = ctx
    let symSize = img.size
    img.draw(in: NSRect(
        x: (size - symSize.width) / 2, y: (size - symSize.height) / 2,
        width: symSize.width, height: symSize.height
    ))
    NSGraphicsContext.restoreGraphicsState()
    let data = rep.representation(using: .png, properties: [:])!
    let path = (outDir as NSString).appendingPathComponent(sym.file)
    try! data.write(to: URL(fileURLWithPath: path))
    print("✓ \(sym.file)")
}
```

Run it from any Mac that has Xcode / Swift installed — no additional dependencies.

**Alternatively**, if SF Symbols.app is working:
1. Open SF Symbols on Mac (free download from [developer.apple.com/sf-symbols](https://developer.apple.com/sf-symbols/))
2. Search the symbol name (e.g. `basketball.fill`)
3. **File → Export → PNG**, size **72pt**, scale **3x**
4. Rename the file to match `iconFile` in `court-sport-marketing.ts` and drop it in `public/marketing/icons/`

---

### Adding a new sport icon

1. Add the sport to `CourtSport` in `Court.swift` with an `icon` SF Symbol name.
2. Add a matching entry to `courtSportEntries` in `court-sport-marketing.ts`:
   ```ts
   {
     id: "new-sport",
     label: "New Sport",
     sticker: "🏅",          // emoji shown until PNG exists
     iconFile: "symbol.name.png",   // matches Court.swift icon exactly
     // ...
   }
   ```
3. Add `"symbol.name"` to the `symbols` array in the export script above and re-run it, or export manually from SF Symbols.app.
4. Drop the PNG into both `web/public/marketing/icons/` and `readyplay-marketing/public/marketing/icons/`.
5. Commit and push — the site deploys automatically on merge to `main`.

---

## Stack

Next.js (App Router), Tailwind CSS, Framer Motion, static export.
