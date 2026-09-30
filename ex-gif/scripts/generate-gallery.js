#!/usr/bin/env node
/**
 * generate-gallery.js
 * -------------------------------------------------
 * Scans assets/gifs and assets/videos and rewrites the
 * README.md gallery section (between the GALLERY markers)
 * with a live grid of every file it finds.
 *
 * Run manually:   node scripts/generate-gallery.js
 * Or automatically via .github/workflows/update-gallery.yml
 * every time something new is pushed into assets/.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const README_PATH = path.join(ROOT, "README.md");
const GIFS_DIR = path.join(ROOT, "assets", "gifs");
const VIDEOS_DIR = path.join(ROOT, "assets", "videos");

const START_MARKER = "<!-- GALLERY:START -->";
const END_MARKER = "<!-- GALLERY:END -->";

const GIF_EXTS = [".gif"];
const VIDEO_EXTS = [".mp4", ".webm", ".mov"];

function listFiles(dir, exts) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => exts.includes(path.extname(f).toLowerCase()))
    .sort();
}

function titleFromFilename(file) {
  return path
    .basename(file, path.extname(file))
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function buildGifGrid(files) {
  if (files.length === 0) {
    return "_No GIFs yet — drop your edits into `assets/gifs/` and re-run this script._";
  }
  const cells = files.map((f) => {
    const relPath = `assets/gifs/${f}`;
    const title = titleFromFilename(f);
    return `<td align="center" width="33%">\n  <img src="${relPath}" width="100%" alt="${title}"/><br/>\n  <sub><b>${title}</b></sub>\n</td>`;
  });

  const rows = [];
  for (let i = 0; i < cells.length; i += 3) {
    rows.push(`<tr>\n${cells.slice(i, i + 3).join("\n")}\n</tr>`);
  }
  return `<table>\n${rows.join("\n")}\n</table>`;
}

function buildVideoList(files) {
  if (files.length === 0) {
    return "_No videos yet — drop clips into `assets/videos/` and re-run this script._";
  }
  return files
    .map((f) => {
      const relPath = `assets/videos/${f}`;
      const title = titleFromFilename(f);
      return `**${title}**\n\nhttps://github.com/user-attachments/assets/REPLACE-AFTER-UPLOAD\n<!-- ^ GitHub rewrites this automatically once you drag "${relPath}" into a PR/issue comment once; -->\n<!-- until then, this local tag also renders on github.com when the mp4 is committed to the repo: -->\n<video src="${relPath}" controls width="100%"></video>\n`;
    })
    .join("\n---\n\n");
}

function main() {
  const gifs = listFiles(GIFS_DIR, GIF_EXTS);
  const videos = listFiles(VIDEOS_DIR, VIDEO_EXTS);

  const section = [
    "### 🎞️ GIFs",
    "",
    buildGifGrid(gifs),
    "",
    "### 🎬 Videos",
    "",
    buildVideoList(videos),
  ].join("\n");

  const readme = fs.readFileSync(README_PATH, "utf8");
  const startIdx = readme.indexOf(START_MARKER);
  const endIdx = readme.indexOf(END_MARKER);

  if (startIdx === -1 || endIdx === -1) {
    console.error("Could not find GALLERY markers in README.md — aborting.");
    process.exit(1);
  }

  const before = readme.slice(0, startIdx + START_MARKER.length);
  const after = readme.slice(endIdx);
  const updated = `${before}\n${section}\n${after}`;

  fs.writeFileSync(README_PATH, updated, "utf8");
  console.log(
    `Gallery updated: ${gifs.length} gif(s), ${videos.length} video(s).`
  );
}

main();
