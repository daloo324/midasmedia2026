# Midas Media Solutions

> A digital design studio in Botswana. Consistent content, stronger brands.

## Brand Identity
- **Personality:** Confident, regal and a bit playful ("old-world authority, new-world attitude"). Built around the Midas myth: everything you touch turns to gold.
- **Colours:**
  - Navy `#002333`: the main background
  - Gold `#C79C51`: highlights, buttons and the diagonal shape in the hero
  - Cream `#F7F2E8`: light sections and text on navy
- **Fonts:**
  - **Greconian** for all headings: your Greek-style brand font (the same one as the "YOUR BRAND PARTNER" banner). The font file lives in `app/fonts/Greconian.ttf`.
  - **Montserrat** for body text, buttons, numbers and contact details (the same font as "MEDIA SOLUTIONS" in the logo)
- **Signature details:** the Greek key (maze-like) border pattern from the crest, the navy/gold diagonal split from the cover banner, and the crowned king logo.

## Pages
- **Homepage** (`/`): the hero ("The Midas touch, for your brand."), scrolling services strip, the 4 services (each one links to its section on the Services page), selected work, how it works, and contact.
- **About** (`/about`): why the studio is called Midas, the "Consistent content. Stronger brands." philosophy, four rules we design by, and the three kinds of business we work with.
- **Services** (`/services`): a full section for each service (what you get, who it's for), the two ways to work together (monthly content partner or one-off project), the 4-step process, and common questions.
- **Work** (`/work`): a case study of the Midas brand itself: the brief, the idea, the identity (crest, wordmark, colours), the campaign poster and the multi-device rollout.
- **Contact** (`/contact`): a project brief form, what happens after you get in touch, and the WhatsApp/email/phone cards.
- **Brand Health Check** (`/brand-health-check`): a free 2-minute quiz for Gaborone businesses. Visitors pick their type of business and answer 8 questions about their Facebook and Instagram. They get a score out of 100, a breakdown, and the 3 biggest things to fix. Then there's a form to claim 3 free sample posts, which opens WhatsApp with their details and score ready to send to you. It's **hidden from the menu** on purpose (share the link directly, e.g. in your Instagram bio or ads), and it shows the Midas logo at the top instead of the usual menu bar. The footer still appears.

## Components
- **Navbar** (`components/Navbar.tsx`): logo, page links (the current page is underlined in gold) and a "WhatsApp us" button. On phones it becomes a menu button that opens a full-screen menu. It's switched off on the Brand Health Check page (the `hiddenOn` list at the top of the file).
- **Footer** (`components/Footer.tsx`): logo, tagline, page links and contact details. Shows on every page.
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

Your original full-size files are still in `public/` and haven't been changed. The browser tab icon (`app/icon.png`) is the round crest.

## Recent Changes
- 2026-10-18: Homepage: the scrolling services strip (Social content, Brand identity…) and the big 01–04 numbers in the "How it works" section are now white.
- 2026-10-18: Added the Brand Health Check quiz page (`/brand-health-check`) from the uploaded design, with the website logo in place of its text logo and your real WhatsApp number. Not linked in the menu. (Removed the Free Posts page that was added by mistake.)
- 2026-10-17: Added About, Services, Work and Contact pages. Moved the menu and footer onto every page, added a phone menu, a project brief form (sends via WhatsApp or email), and FAQs on the Services page. Homepage buttons now link to the new pages.
- 2026-10-17: Switched all headings to your Greconian brand font and resized them to fit. Phone numbers, email and step numbers now use Montserrat so they're easier to read.
- 2026-10-17: Built the full homepage from the brand assets (logo, cover banner, social poster, under-construction mockup). Set navy/gold/cream colours and Bebas Neue + Montserrat fonts. Added favicon.

## Still to do / things to confirm
- Facebook, Instagram and LinkedIn links: the icons are on your artwork, but we need the actual page addresses before adding them to the site
- Real client work for the Work page (right now it's a case study of Midas's own brand)
- Check the About page story, the Services page questions and the "What happens next" steps on the Contact page match how you actually work
- Optional: a form that sends straight to your inbox needs an email service connected. Right now it hands off to WhatsApp or the visitor's email app.
- Check that "Botswana" is the right location line, or swap in your city

## How to Customize
- **Change contact details:** edit `lib/contact.ts`
- **Change the heading font:** replace `app/fonts/Greconian.ttf` and update the font name in `app/layout.tsx`
- **Change colours:** edit the values at the top of `app/globals.css` (`--navy`, `--gold`, `--cream`)
- **Change service descriptions or process steps:** edit `lib/content.ts`
- **Change a page's wording:** each page lives in its own folder, e.g. `app/about/page.tsx`
- **Change the Brand Health Check questions, scores or fix suggestions:** edit `lib/brand-health-check.ts`
- **Add a new page:** ask Claude, e.g. "add an About page"
