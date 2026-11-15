# Midas Media Solutions

> A digital design studio in Botswana. Consistent content, stronger brands.

## Brand Identity
- **Personality:** Confident, regal and a bit playful ("old-world authority, new-world attitude"). Built around the Midas myth: everything you touch turns to gold.
- **Colours:**
  - Navy `#002333`: the main background
  - Gold `#C79C51`: highlights, buttons and the diagonal shape in the hero
  - Cream `#F7F2E8`: light sections and text on navy
  - Deep gold `#7D5F28` and soft navy `#4A6472`: only where gold or navy text needs to be readable on cream
- **Fonts:**
  - **Greconian** for all headings: your Greek-style brand font (the same one as the "YOUR BRAND PARTNER" banner). The font file lives in `app/fonts/Greconian.ttf`.
  - **Montserrat** for body text, buttons, numbers and contact details (the same font as "MEDIA SOLUTIONS" in the logo). The font file is stored in the project (`app/fonts/Montserrat-Variable.woff2`), so the site doesn't depend on Google Fonts.
- **Signature details:** the Greek key (maze-like) border pattern from the crest, the navy/gold diagonal split from the cover banner, and the crowned king logo.

## Pages
- **Homepage** (`/`): a scroll-driven page built with the scroll-craft method. It is a run of seven scenes in which the page turns from marble to gold as you scroll: (1) a layered hero in a dark marble hall (the crowned marble king, a giant MIDAS behind him, gold monstera leaves in front, moving at different speeds), with "Consistent content. Stronger brands."; (2) "Most brands don't look weak because of one bad post..." on plain navy; (3) **the Midas touch**: visitors run their cursor (or tap) over the marble king and he turns to gold where they touch; scrolling gilds him too, and at 40% the gold floods the whole screen ("Everything we touch turns to gold."); (4) "What we make" on gold; (5) "Our work", which slides sideways and includes two "Client work arriving soon" slots; (6) "Gold, every week", where a river of liquid gold flows as you scroll and the four steps appear along it; (7) a gold close where the crest is a seal you press to start on WhatsApp, with the page links underneath. On the right edge, "the river" fills with gold as you go down and jumps to each scene. The homepage has its own menu and footer, so the site-wide ones are hidden there.
- **About** (`/about`): why the studio is called Midas, the "Consistent content. Stronger brands." philosophy, four rules we design by, and the three kinds of business we work with.
- **Services** (`/services`): a full section for each service (what you get, who it's for), the two ways to work together (monthly content partner or one-off project), the 4-step process, and common questions.
- **Work** (`/work`): a case study of the Midas brand itself: the brief, the idea, the identity (crest, wordmark, colours), the campaign poster and the multi-device rollout.
- **Contact** (`/contact`): a project brief form, what happens after you get in touch, and the WhatsApp/email/phone cards.
- **Brand Health Check** (`/brand-health-check`): a free 2-minute quiz for Gaborone businesses. Visitors pick their type of business and answer 8 questions about their Facebook and Instagram. They get a score out of 100, a breakdown, and the 3 biggest things to fix. Then there's a form to claim 3 free sample posts, which opens WhatsApp with their details and score ready to send to you. It's an exact copy of your uploaded design, with its own colours (a slightly lighter navy `#0f2a37`, gold `#c39a45` and a warm off-white background) and the website logo in place of the text logo. It switches to darker colours automatically when a visitor's phone or computer is in dark mode, like the original. It stands on its own: **no menu and no site footer**, and it isn't linked from the menu. Share the link directly, e.g. in your Instagram bio or ads.

## Components
- **Navbar** (`components/Navbar.tsx`): logo, page links (the current page is underlined in gold) and a "WhatsApp us" button. On phones it becomes a menu button that opens a full-screen menu. It's switched off on the Brand Health Check page.
- **Homepage engine** (`public/scrollcraft.js` and `app/scrollcraft.css`): the scroll-craft engine that drives the homepage scenes. Never edit these two files; change the homepage in `app/page.tsx` and its styles in `app/home.css`.
- **The Midas touch** (`components/home/TouchStage.tsx`): the gilding effect in scene 3.
- **The river** (`components/home/HomeEngine.tsx`): the gold progress channel on the right of the homepage, and the code that starts the engine.
- **Homepage pictures** (`public/home/`): the marble hall, the king (`bust-marble.webp`) and his gold version (`bust-gold.webp`, made from the same picture so they line up exactly), the gold leaves, and the river video (`river.mp4`, plus a smaller `river-m.mp4` for phones). All generated with Magnific for this page. To swap the king, replace both bust files with images of exactly the same size.
- **Footer** (`components/Footer.tsx`): the WhatsApp number set very large as the last thing on every page, with the wordmark, a one-line description, email, back-to-top link and page links. Shows on every page except the Brand Health Check.
- **Homepage work rail**: the pieces live in `workTiles` in `lib/content.ts`. To add a real client project, replace one of the "Client project / Coming soon" entries with its title, category, year and image (instructions are in the file). The four steps in "Gold, every week" come from `steps` in the same file.
- **PageHeader** (`components/PageHeader.tsx`): the navy banner at the top of the About, Services, Work and Contact pages
- **ContactCTA** (`components/ContactCTA.tsx`): the "Ready to look like you mean it?" block at the bottom of most pages
- **ContactCards** (`components/ContactCards.tsx`): the three WhatsApp / email / phone cards
- **BriefForm** (`components/BriefForm.tsx`): the contact page form. There's no server behind it. When someone presses send, it opens WhatsApp or their email app with their answers already filled in, ready for them to send.
- **GreekKey** (`components/GreekKey.tsx`): the repeating Greek key pattern used as background texture
- **Reveal** (`components/Reveal.tsx`): makes sections fade up gently as you scroll to them
- **Contact details** (`lib/contact.ts`): the email, phone and WhatsApp link. Change them here and every button updates.
- **Shared text** (`lib/content.ts`): the services (short and long descriptions, "what you get" lists), the process steps and the menu links. These are used on several pages, so edit them here.

## Images
Web-sized versions of your original files live in `public/images/`:
- `king-mark.png`: the king's head on its own
- `wordmark-white.png` / `wordmark-gold.png` / `wordmark-navy.png`: the "MIDAS" lettering in three colours
- `crest-badge.webp`: the round crest with the Greek key border
- `devices-gold.webp`, `devices-cover.webp`: laptop/tablet/phone mockups
- `statue-poster.webp`: the marble king poster
- `cover.webp`: the "Your Brand Partner" banner

The original full-size files have been removed from the website (they were public and very large). Keep your masters in your design files, not in the site. The browser tab icon (`app/icon.png`) is the round crest.

## Search & sharing
- **Sitemap** (`app/sitemap.ts`): the list of pages Google should find, at midasmedia.co.bw/sitemap.xml. When you add a new page, add it to the list here.
- **Robots** (`app/robots.ts`): tells search engines they're welcome to visit every page.
- **Link previews:** the site address (`https://midasmedia.co.bw`) is set in `app/layout.tsx`, so sharing a link on WhatsApp or Facebook shows the marble king poster.

## Recent Changes
- 2026-11-15: Rebuilt the homepage as a scroll-driven experience (scroll-craft): a layered marble-hall hero, the "Midas touch" where visitors turn the marble king to gold with their cursor or finger, a sliding work rail, a scroll-scrubbed river of gold, and a crest "seal" close. New pictures and the river video were generated with Magnific. The site-wide menu and footer are hidden on the homepage because it has its own. Checked at desktop, phone and reduced-motion settings.
- 2026-11-15: Redesigned the homepage below the hero to remove the "template" look: no small labels above headings, no 01–04 numbering, no thin divider lines or shadows. Each section is now its own full colour field. Added the "type your business name" try-it piece, a poster-size services list, a staggered work grid with placeholder slots for client work, clickable process panels and a gold "Start" band. Fixed two hard-to-read colour pairs (white on gold, gold on cream). Replaced the footer with one where the WhatsApp number is the headline. Removed the scrolling services strip.
- 2026-11-15: Pre-launch fixes. Switched the WhatsApp/phone number everywhere to the official business line +267 76 513 917. Removed old files that would have been publicly reachable (the original Brand Health Check and Free Posts HTML files, plus about 23 MB of full-size images). Added the sitemap, robots file and site address for link previews. Swapped in the re-exported marble king poster and "Your Brand Partner" banner, which now show the new number.
- 2026-10-18: Rebuilt the Brand Health Check to match the uploaded file exactly: its own colours, sizes and spacing, its automatic dark mode, and no site menu or footer. (Pages listed under `standalonePages` in `lib/content.ts` hide the menu and footer.)
- 2026-10-18: Homepage: the scrolling services strip (Social content, Brand identity…) and the big 01–04 numbers in the "How it works" section are now white.
- 2026-10-18: Added the Brand Health Check quiz page (`/brand-health-check`) from the uploaded design, with the website logo in place of its text logo and your real WhatsApp number. Not linked in the menu. (Removed the Free Posts page that was added by mistake.)
- 2026-10-17: Added About, Services, Work and Contact pages. Moved the menu and footer onto every page, added a phone menu, a project brief form (sends via WhatsApp or email), and FAQs on the Services page. Homepage buttons now link to the new pages.
- 2026-10-17: Switched all headings to your Greconian brand font and resized them to fit. Phone numbers, email and step numbers now use Montserrat so they're easier to read.
- 2026-10-17: Built the full homepage from the brand assets (logo, cover banner, social poster, under-construction mockup). Set navy/gold/cream colours and Bebas Neue + Montserrat fonts. Added favicon.

## Still to do / things to confirm
- Facebook, Instagram and LinkedIn links: the icons are on your artwork, but we need the actual page addresses before adding them to the site
- Real client work: the homepage has two "Client project, coming soon" slots waiting for it, and the Work page is still a case study of Midas's own brand
- The About, Services, Work and Contact pages still use the older style (small labels above headings, numbered steps). They can be brought in line with the homepage next.
- Check the six services in "What we make" (especially Motion graphics) and their one-line descriptions
- Check the About page story, the Services page questions and the "What happens next" steps on the Contact page match how you actually work
- Optional: a form that sends straight to your inbox needs an email service connected. Right now it hands off to WhatsApp or the visitor's email app.
- Check that "Botswana" is the right location line, or swap in your city

## How to Customize
- **Change contact details:** edit `lib/contact.ts`
- **Change the heading font:** replace `app/fonts/Greconian.ttf` and update the font name in `app/layout.tsx`
- **Change colours:** edit the values at the top of `app/globals.css` (`--navy`, `--gold`, `--cream`)
- **Change service descriptions or process steps:** edit `lib/content.ts`
- **Change a page's wording:** each page lives in its own folder, e.g. `app/about/page.tsx`
- **Change the Brand Health Check questions, scores or fix suggestions:** edit `lib/brand-health-check.ts`. Its colours are at the top of `app/brand-health-check/page.tsx`
- **Add a new page:** ask Claude, e.g. "add an About page"
