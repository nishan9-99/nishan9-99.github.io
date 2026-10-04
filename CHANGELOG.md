# Changelog

## v14a (cache-bust `?v=14a`)

Review build. Not deployed.

### Opening transition
- Replaced the NG preloader with a violet dot > orb > "NG" > tagline > lift sequence (3.2 s timeline, lift starts at 3.0 s).
- Overlay CSS is inline in `<head>` and the session decision runs before first paint, so there is no white or grey flash.
- Animates only transform, opacity and a blur on the orb (the tagline also animates letter-spacing, as the brief asks).
- Skip with click, tap, any key or Esc. Plays once per session (`sessionStorage`, in try/catch). Skipped for `prefers-reduced-motion`. Hard stop at 4 s. Scroll is locked while it plays. No overlay without JS.
- Hero animations (name letters, typed role, count-up, card entrances) wait for `body.intro-done`.

### Mobile
- Footer links wrap and centre with 44 px targets. Footer skyline fades in with a gradient mask, text sits on the dark part, the copyright has a scrim, the arch ring fades instead of being cut.
- Floating menu button hides while the footer is on screen, footer has bottom and safe-area padding.
- Contact social icons hidden on mobile (footer keeps them).
- Mobile menu: Resume download, social icons, active section, staggered entry, page behind is `inert`, focus trap, closes on link tap, Esc or outside tap.
- Custom cursor never shows on touch and starts only after the first real `mousemove`. Magnetic buttons and the cursor loop are off on touch.
- `100svh`, `env(safe-area-inset-*)`, 44 px touch targets, 16 px body text on phones, code card wraps, fewer stars and no parallax on small screens.

### Skills
- Skill tiles are plain `<li>` inside a `<ul role="list">`. No links, no click ripple, no pointer cursor.
- All icons are inline SVG. Removed every `cdn.simpleicons.org` request, including the globe card and the marquee.
- Added C++, React, Vite and a "Learning: Blender" tag.

### Projects
- AI-made thumbnails deleted. Cards show a clean placeholder until real screenshots are added (`shots` and `video` in CONFIG).
- 3 columns on desktop, 2 on tablet, a snap carousel with dots on phones. Smaller image area, 32 px GitHub icon, compact status chip, max 4 tags.
- New: KyaDekhein, Personal Portfolio and NISHAN_OS. LYRIVO is now "In progress" with a matching description.
- Status chips, gallery modal (thumbnails, arrow keys, swipe), hover or in-view preview loop, result count.
- Smart Hostel text now matches its README (local-demo build, full v4.0 run still pending).

### Scrolling
- Eased anchor scroll (700 ms, cancelled by touch or wheel). Native touch scrolling is untouched.
- Reveals fade and rise 24 px over 600 ms with a short stagger, once only. Progress bar uses rAF and a transform. `overscroll-behavior` on menu and modal.

### Content
- One headline everywhere: "B.E. CSE student building full-stack web apps".
- Bangalore > Bengaluru. "Available for work" > "Open to internships".
- Player card shows tags (Shipped, Open source, Building, Learning) instead of invented percentages. Removed "Level 2+".
- Journey items have a year slot (`[CONFIRM: year]`). Hero stats add a Projects count that follows the project list.
- New LinkedIn URL.

### Extras
- Back to top, copy email with toast, favicon set (SVG, 32 px, 180 px), 1200x630 OG card.
- Fonts are self-hosted (`assets/fonts/`), the main one is preloaded, `font-display: swap`. Script is `defer`.
- Deleted `contact-desk.*`, the `.contact-art img` hook, `.cert-grid` CSS and the old project mockups.

### Resume
- New one-page A4 resume (`assets/resume.pdf`, plus an editable `.docx`). Source Sans 3, navy accent, clickable links, PDF metadata set.

### Placeholders
Add `?review=1` to the page URL to see every unconfirmed `[CONFIRM: ...]` value. They are hidden otherwise.

## v14 revision 2 (layout pass)
- Every desktop section now fills exactly one viewport (100svh, content centered, no extra padding). Nav clicks land on the section top (checked: top 0, bottom = viewport height at 1440x900). Checked down to 1280x720.
- Skills: compact pill cards, all four groups visible in one screen, inline icons kept. Also compact on mobile.
- Journey: horizontal timeline on desktop (vertical on mobile).
- Projects: 3 cards per page, "Explore more" bar on the right slides to the next 3 (turns into "Back to start" on the last page), prev arrow and page dots. Mobile keeps the swipe carousel.
- Contact: old orbit-cards globe kept as designed (it was never removed); fixed the empty glass-code text in Skills.
- Accessibility: hidden dialogs are inert, heading order fixed.
- Cache-bust now ?v=14m.

## v14 revision 3 (Home matched to the original layout, on request)
- Home right side is back to the original: nishan.js card plus the Player One card with Coding / Gaming / Photo editing / Video editing bars and "Level 2+".
- Role line starts with "I'm a Full Stack Developer" (cycles Full Stack Developer / Gamer / Content Creator).
- Stats: "2+ Years Learning" and "B.E. CSE, BMSIT, Bengaluru". The Projects stat and the badge pill are removed.
- Cache-bust ?v=14o. Nothing else changed.

## v14 revision 4 (Skills trim)
- Removed Bootstrap, Vite, Firebase and "Learning: Blender" from the Skills section and the marquee. Project cards still list those technologies where they were really used.
- Skills art: the NG card sits lower and overlaps the bottom of the code card.
- Cache-bust ?v=14q.

## v14 revision 5 (Projects)
- KyaDekhein is parked (commented out in CONFIG with a note on how to restore it). 5 projects, shown 3 per page with the sideways "Explore more" slide.
- "View Project" is now a real link that opens the project's GitHub repo in a new tab. The details popup is no longer opened from the cards. LYRIVO has no public repo yet, so its card shows "Repo coming soon" instead of a link.
- Cache-bust ?v=14s.
- Rev 6: Portfolio card renamed to just "Portfolio".
- Rev 7 (held): Portfolio card parked; 404 boot screen ported, bigger text, RGB split/scanlines/HUD, plays on every load.
- Rev 7: Portfolio card parked; 404 boot screen (bigger, RGB split, plays every load); Neon Rift card updated to v2.0; BioVerse card added.
- Rev 8: resume updated to match the portfolio (5 projects, trimmed skills). resume.pdf has no placeholders; a -REVIEW copy keeps highlighted [CONFIRM] items.
