# READYPLAY — public marketing site

Next.js static export that ships the **READYPLAY** landing page, changelog, and CTAs. Source of truth for everything at **[readyplay.app](https://readyplay.app/)**.

This repo is deliberately **public** so GitHub Pages can serve it. The iOS app and backend live in a separate **private** monorepo — do not paste anything from there into this repo. Assume anything committed here is world-readable: no API keys, provisioning profiles, internal URLs, or private roadmap detail.

---

## Deploy (automatic)

Every merge to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): it runs `npm ci && npm run build`, uploads `out/` as a Pages artifact, and deploys to **[readyplay.app](https://readyplay.app/)** via GitHub Pages. Typical wall time: under 90 seconds. Custom domain (`public/CNAME`) and HTTPS are set at **Settings → Pages**.

No manual step — push your change through a PR and Pages picks it up on merge. Trigger a one-off deploy from the Actions tab (`READYPLAY marketing site (GitHub Pages)` → `Run workflow`) if you need it outside a merge.

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
4. Drop the PNG into `public/marketing/icons/`.
5. Commit and push — the site deploys automatically on merge to `main`.

---

## Stack

Next.js (App Router), Tailwind CSS, Framer Motion, static export.
