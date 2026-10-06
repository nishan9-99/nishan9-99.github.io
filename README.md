# Nishan Giri | Portfolio

Personal portfolio of **Nishan Giri** ("Fragger"), a B.E. CSE student at BMS Institute of Technology and Management (BMSIT), Bengaluru. It covers who I am, what I have built, the tools I work with, and how to reach me.

**Live site:** https://nishan.is-a.dev/

Built with plain HTML, CSS and JavaScript. No framework, no build step, no dependencies to install.

---

## What's on the site

- **Hero** - name, a typing line that rotates through roles (Full Stack Developer, Gamer, Content Creator), and quick stats (years learning, B.E. CSE at BMSIT).
- **About** - a short intro and portrait.
- **Journey** - a timeline from starting at BMSIT, through first web projects, to what I am building now.
- **Projects** - cards with a filter bar (All / Web / Creative). Each card opens a detail view with the problem, my role, the result and the tech used.
- **Skills** - grouped icons for Frontend, Backend, Tools and Creative. Each icon links to the tool's official site.
- **Contact** - a form that sends messages through Formspree, plus links to email, GitHub and LinkedIn.
- **Resume** - a download button that serves `assets/resume.pdf`.

### Extras

- Dark theme with a starfield background and a custom cursor on desktop
- Top nav that turns into a side rail as you scroll, with a menu button on mobile
- `Ctrl + K` (or `Cmd + K`) opens a quick section jump palette
- Scroll-in animations that respect `prefers-reduced-motion`
- A hidden Konami code easter egg
- Responsive layout for phone, tablet and desktop
- Open Graph and Twitter card meta tags for link previews

---

## Projects featured

| Project | What it is | Stack | Status |
|---|---|---|---|
| [Smart Hostel Management System](https://github.com/nishan9-99/smart-hostel-management-system) | Hostel system with room allocation, visitor logs, complaints and payment tracking | PHP, MySQL, Bootstrap, Docker | Built |
| [Quest HUD](https://github.com/nishan9-99/quest-hud) | Terminal task tracker styled as a game: quests, XP, levels, streaks | C++17 | Built, MIT licensed |
| [Neon Rift](https://github.com/nishan9-99/neon-rift) | Neon roguelite survival shooter (v2.0 Rift Protocol), 5 weapons, 4 ships, bosses | HTML5 Canvas, JavaScript, CSS | Built |
| [BioVerse](https://github.com/nishan9-99/bioverse) | Full-stack anatomy learning app with organ viewer, quizzes, AI tutor and lab simulations | React, Vite, Tailwind CSS, Node.js, Express, MongoDB, JWT, Docker | Built |
| LYRIVO | Music streaming app with sign-in and playlists | Firebase, JavaScript, HTML, CSS | In progress, no public repo yet |

---

## Tech stack

- **HTML5** - semantic structure, meta tags, accessibility labels
- **CSS3** - custom properties, grid and flexbox, animations, media queries
- **Vanilla JavaScript** - rendering, filters, modal, command palette, form handling
- **Formspree** - contact form delivery
- **Google Fonts** - Space Grotesk, Inter, Caveat
- **GitHub Pages** - hosting

---

## Project structure

```
.
├── index.html        # Page markup and meta tags
├── style.css         # All styling
├── script.js         # Behavior, plus a CONFIG block at the top
└── assets/
    ├── resume.pdf        # Resume served by the download button
    ├── about-portrait.*  # About section image (jpg + webp)
    ├── footer-skyline.*  # Footer image (jpg + webp)
    └── proj-*            # Project card images
```

Most content lives in the `CONFIG` object at the top of `script.js`: email, social links, roles, stats, skills, projects, journey entries, the form endpoint and the resume path. To update the site, edit that block.

---

## Run it locally

No install needed.

**Option 1:** open `index.html` in a browser.

**Option 2:** serve it with any static server:

```bash
git clone https://github.com/nishan9-99/nishan9-99.github.io.git
cd nishan9-99.github.io

# pick one
python -m http.server 8000
npx serve .
```

Then visit `http://localhost:8000`.

The contact form posts to Formspree, so it needs an internet connection to send.

---

## Deployment

The site is a GitHub Pages user site, served from the `main` branch root. Pushing to `main` updates the live site after a short build.

---

## Contact

- Email: gireenishan10@gmail.com
- GitHub: [github.com/nishan9-99](https://github.com/nishan9-99)
- LinkedIn: [Nishan Giri](https://www.linkedin.com/in/nishan-giree-264700339)
- Location: Bengaluru, India
