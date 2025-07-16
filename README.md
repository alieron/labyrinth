# Labyrinth

Publishing my obsidian notes to the internet.

### Setup and publish your notes

1. setup npm

```bash
npm i
```

2. creating a symlink to your vault into `vault/`

```bash
ln -s <path/to/your/vault> vault
```

3. create a `whitelist.config.json`
example:

```json
[
  "directory",
  "file.md"
]
```

4. copy your notes into `contents/` and assets into `public/assets/`

```bash
npm run copy-notes
```

5. (Optional) do a test build and preview, should host the webpage at http://localhost:3000/labyrinth

```bash
npm run build
npm run preview
```

6. Modify `.gitignore`

```
# comment these out when publishing
content
public/assets
```

7. commit your content to the `publish` branch

```bash
git checkout -b publish
git add .
git commit -m "Publish content"
git push -u origin publish
```

### Features checklist

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
- [x] TikZJax Diagram from [Obsidian TikZJax](https://github.com/artisticat1/obsidian-tikzjax/tree/main)
- [ ] Footnotes
- [ ] Embedded Notes
- [ ] Mermaid Charts

#### UI

- [x] Header Bar
- [x] Filesystem Breadcrumbs
- [x] Navigating between previous and next notes
- [ ] Properties View
- [ ] Table of Contents

#### Code

- [x] Folder Structure
- [x] Folder Pages
- [x] Tags/Nested Tags
- [ ] Note Indexing

### Planned route structure

##### In your vault
```
vault/
│
├─ folder-1/
│  ├─ file-1.md       <- Nested notes
│  └─ file-2.md
│
├─ folder-2/
│  └─ file-3.md
│
└─ file-4.md          <- Notes
```
##### Resulting site map
```
labyrinth/
│
├─ notes/
│  ├─ folder-1/
│  │  ├─ file-1       <- Nested notes
│  │  └─ file-2
│  ├─ folder-2/
│  │  └─ file-3
│  └─ file-4  
│
└─ tags/  
   ├─ tag-1/
   │  ├─ tag-1.1      <- Nested tags
   │  └─ tag-1.2
   ├─ tag-2/
   │  └─ tag-2.1
   └─ tag-3
```