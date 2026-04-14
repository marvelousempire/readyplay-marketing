import fs from "node:fs";
import path from "node:path";
import { marketingScreenshotManifest } from "@/marketing-screenshots-manifest";
import { ScreenshotsStrip, type ScreenshotStripItem } from "./screenshots-strip";

function listMarketingFiles(): Set<string> {
  const dir = path.join(process.cwd(), "public", "marketing");
  try {
    return new Set(fs.readdirSync(dir));
  } catch {
    return new Set();
  }
}

export function Screenshots() {
  const files = listMarketingFiles();
  const items: ScreenshotStripItem[] = marketingScreenshotManifest.map((m) => ({
    ...m,
    imageSrc: files.has(m.file) ? `/marketing/${m.file}` : null,
  }));
  return <ScreenshotsStrip items={items} />;
}
