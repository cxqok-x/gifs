<div align="center">

<img src="assets/svg/banner.svg" width="100%" alt="ex-gif banner"/>

<br/>

![Made with](https://img.shields.io/badge/made%20with-%E2%9A%A1-4fe3ff?style=for-the-badge&labelColor=0d0221)
![Status](https://img.shields.io/badge/status-active-b968ff?style=for-the-badge&labelColor=0d0221)
![Assets](https://img.shields.io/badge/gallery-auto--synced-ff5fd1?style=for-the-badge&labelColor=0d0221)
![License](https://img.shields.io/badge/license-MIT-4fe3ff?style=for-the-badge&labelColor=0d0221)

</div>

<img src="assets/svg/divider.svg" width="100%"/>

## ⚡ What this is

**ex-gif** is a drop-in gallery for your edits. Save a GIF into `assets/gifs/` or a clip into `assets/videos/`,
run one script (or just push — the workflow does it for you), and the README below rebuilds itself with a
live grid of everything you've got. No manual markdown table editing, ever.

<img src="assets/svg/divider.svg" width="100%"/>

## 📖 Table of Contents

- [Live Workflow](#-live-workflow)
- [Gallery](#-gallery)
- [Folder Structure](#-folder-structure)
- [Adding Your Own Edits](#-adding-your-own-edits)
- [Getting Started](#-getting-started)
- [Tech Stack](#-tech-stack)
- [License](#-license)

<img src="assets/svg/divider.svg" width="100%"/>

## 🖥️ Live Workflow

This is the entire loop — drop a file, run one command, push:

<div align="center">
<img src="assets/svg/terminal.svg" width="100%" alt="terminal demo"/>
</div>

<img src="assets/svg/divider.svg" width="100%"/>

## 🖼️ Gallery

<img src="assets/svg/frame-top.svg" width="100%"/>

> Everything below this line is generated automatically from `assets/gifs/` and `assets/videos/`.
> Don't hand-edit it — run `node scripts/generate-gallery.js` instead.

<!-- GALLERY:START -->
### 🎞️ GIFs

_No GIFs yet — drop your edits into `assets/gifs/` and re-run this script._

### 🎬 Videos

_No videos yet — drop clips into `assets/videos/` and re-run this script._
<!-- GALLERY:END -->

<img src="assets/svg/frame-bottom.svg" width="100%"/>

<img src="assets/svg/divider.svg" width="100%"/>

## 📁 Folder Structure

```
ex-gif/
├── README.md
├── assets/
│   ├── gifs/            ← drop your edited .gif files here
│   ├── videos/          ← drop your .mp4 / .webm / .mov clips here
│   ├── images/          ← static screenshots, thumbnails, etc.
│   └── svg/              ← animated banner, terminal, dividers, HUD frames & footer
├── scripts/
│   └── generate-gallery.js   ← rebuilds the Gallery section
└── .github/
    └── workflows/
        └── update-gallery.yml   ← auto-runs the script on every push to assets/
```

<img src="assets/svg/divider.svg" width="100%"/>

## ✨ Adding Your Own Edits

1. Export your edit as a `.gif` (or `.mp4` / `.webm` / `.mov` for full videos).
2. Drop the file into `assets/gifs/` or `assets/videos/`.
3. Regenerate the gallery:
   ```bash
   node scripts/generate-gallery.js
   ```
4. Commit & push. If you keep the included GitHub Action enabled, step 3 happens for you automatically the
   moment you push a new file into either folder — the workflow rebuilds `README.md` and commits it back.

**Naming tip:** filenames become captions. `neon-transition-cut.gif` becomes **Neon Transition Cut** in the grid.

<img src="assets/svg/divider.svg" width="100%"/>

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/ex-gif.git
cd ex-gif
node scripts/generate-gallery.js   # optional first run
```

That's it — there's no build step for the README itself, just Node.js to run the generator.

<img src="assets/svg/divider.svg" width="100%"/>

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-0d0221?style=flat-square&logo=node.js&logoColor=4fe3ff)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-0d0221?style=flat-square&logo=githubactions&logoColor=b968ff)
![SVG](https://img.shields.io/badge/SVG-0d0221?style=flat-square&logo=svg&logoColor=ff5fd1)

<img src="assets/svg/divider.svg" width="100%"/>

## 📜 License

MIT — do whatever you want with it, just keep the credit.

<div align="center">
<img src="assets/svg/footer.svg" width="100%"/>
</div>
