# RED SIGNS

An interactive website by Carina Chung exploring the visual language of red road signs.

## Open the site

Open `index.html` in a browser, or run a local static server from this folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. No build or installation is required.

## Features

- 109 unique red-containing U.S. road-sign designs, with labels and codes
- Metallic hit audio and a backward knockdown, dissolve, and spring animation
- Searchable collection
- Written chapters: prologue, history, the specific red, science, and Red is Powerful
- Arcade easter egg: timed sign knockdowns, shelf bonuses, and a saved personal best
- Responsive layouts and reduced-motion support

## Edit the site

- `index.html`: main sign page
- `style.css`: shared styling
- `script.js`: sign data and interaction
- Other `.html` files: story chapters
- `arcade.html`, `arcade.css`, `arcade.js`: arcade game
- `assets/`: sign artwork and `metal-clank.mp3`
- `fonts/`: FHWA Series C heading fonts

Sign image sources and exact Wikipedia captions are recorded in `SIGN-SOURCES.json`; the gallery audit is in `COLLECTION-AUDIT.md`. The sound effect was supplied by the project author.
