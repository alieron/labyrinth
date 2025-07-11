# Labyrinth

Publishing my obsidian notes to the internet.

### Setup

1. setup npm

```bash
npm i
```

2. creating a symlink to your vault

```bash
ln -s <path/to/your/vault> vault
```

3. create a whitelist.config.json
example:

```json
[
  "directory",
  "file.md"
]
```

4. build your notes into tsx files

```bash
npm run build-notes
```

### Progress checklist

#### Obsidian markdown syntax support

- [x] Headings
- [x] Horizontal Rule
- [x] Bold
- [x] Italic
- [x] Strikethrough
- [x] Blockquote
- [x] Numbered List
- [x] Bullet List
- [x] External Link
- [x] Internal Link(wikilinks)
- [x] Jump Point
- [x] Inline Code
- [x] Code Block
- [x] Table
- [x] Latex/Mathjax
- [x] Embedded Images
- [ ] Footnotes
- [ ] Embedded Notes

#### UI

- [x] Header Bar
- [ ] Filesystem Breadcrumbs
- [ ] Properties View
- [ ] Table of Contents

#### Code

- [x] Folder Structure
- [ ] Folder Pages
- [ ] Tags/Nested Tags
- [ ] Note Indexing

### Planned route structure

##### In your vault
```
vault/
├─ folder-1/
│  ├─ file-1.md       <- Nested notes
│  └─ file-2.md
├─ folder-2/
│  └─ file-3.md
└─ file-4.md          <- Notes
```

##### Becomes these react components
```
src/notes/
    ├─ folder-1/
    │  ├─ index.tsx   <- Folder page, possibly a summary of nested notes
    │  ├─ file-1.tsx  <- Notes parsed into tsx
    │  └─ file-2.tsx
    ├─ folder-2/
    │  ├─ index.tsx
    │  └─ file-3.tsx
    ├─ index.tsx
    └─ file-4.tsx
```