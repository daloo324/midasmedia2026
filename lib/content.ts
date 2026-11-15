// Shared text used on more than one page. Edit here and it updates everywhere.

export const services = [
  {
    slug: "content-design",
    number: "01",
    title: "Content design",
    body: "A steady stream of posts, stories and ads made for your feeds. Planned a month ahead, on brand every time, so you never post something rushed again.",
    long: "Most businesses know they should post more. Few have the time to make every post look good. We plan your month, design every piece and hand it over ready to publish, so your feed looks like it belongs to one brand, not five different moods.",
    tags: ["Social posts", "Stories & reels covers", "Ad creative"],
    includes: [
      "A monthly content calendar",
      "Designed posts and stories for each platform",
      "Captions written in your brand's voice",
      "Ad creative sized for paid campaigns",
      "Templates for quick updates you can post yourself",
    ],
    goodFor: "Businesses that want to post regularly without it eating their week.",
    image: "/images/statue-poster.webp",
    imageAlt: "Midas social poster with a crowned marble statue in reflective sunglasses",
    imageSize: [1400, 1400],
  },
  {
    slug: "brand-identity",
    number: "02",
    title: "Brand identity",
    body: "Logos, colours, type and the rules that hold them together. We build a look people recognise before they read your name.",
    long: "A logo on its own isn't a brand. We design the full kit: the mark, the colours, the fonts, the patterns and the rules for using them, so everything you put out after today looks like it came from the same place.",
    tags: ["Logo design", "Brand guidelines", "Stationery"],
    includes: [
      "Logo and logo variations",
      "Colour palette and font choices",
      "Patterns, icons and graphic elements",
      "A brand guidelines document",
      "Business cards, letterheads and email signatures",
    ],
    goodFor: "New businesses, or established ones whose look has drifted over the years.",
    image: "/images/crest-badge.webp",
    imageAlt: "The Midas crest: a bearded king with a crown inside a Greek key circle",
    imageSize: [600, 610],
  },
  {
    slug: "websites",
    number: "03",
    title: "Websites",
    body: "Fast, good-looking sites that work as hard on a phone as they do on a laptop, and tell visitors exactly what to do next.",
    long: "Your website is often the first serious look someone takes at your business. We design and build sites that load quickly, read well on a phone, and make the next step obvious, whether that's a call, a WhatsApp or a booking.",
    tags: ["Landing pages", "Business sites", "Mockups & launch"],
    includes: [
      "Page planning and copywriting",
      "Design that matches your brand identity",
      "Built to work on phones, tablets and laptops",
      "Contact, WhatsApp and booking buttons where they matter",
      "Launch graphics to announce the new site",
    ],
    goodFor: "Businesses that need a site they're proud to send people to.",
    image: "/images/devices-cover.webp",
    imageAlt: "Midas brand shown across laptop, tablet and phone screens",
    imageSize: [1400, 713],
  },
  {
    slug: "campaigns-print",
    number: "04",
    title: "Campaigns & print",
    body: "Banners, billboards, flyers and launch kits. One idea, carried across every surface your customers see.",
    long: "A launch, a promotion or an event deserves one strong idea, not a pile of mismatched flyers. We build the campaign once and adapt it to every size and surface, from a phone screen to a roadside banner.",
    tags: ["Launch campaigns", "Banners", "Print collateral"],
    includes: [
      "The campaign idea and key message",
      "Banners, posters and billboards",
      "Flyers, brochures and menus",
      "Matching social and digital versions",
      "Print-ready files for your printer",
    ],
    goodFor: "Launches, promotions, events and anything with a deadline.",
    image: "/images/cover.webp",
    imageAlt: "Midas cover banner reading Your Brand Partner, split diagonally in navy and gold",
    imageSize: [2000, 754],
  },
] as const;

// The homepage list of what we make. Each one links to its section on the Services page.
export const capabilities = [
  { name: "Social content", href: "/services#content-design", body: "A month of posts, stories and ads, planned ahead and on brand every time." },
  { name: "Brand identity", href: "/services#brand-identity", body: "Logo, colours, type and the rules that hold them together." },
  { name: "Websites", href: "/services#websites", body: "Fast sites that read well on a phone and make the next step obvious." },
  { name: "Campaigns", href: "/services#campaigns-print", body: "One idea for a launch or promotion, carried across every surface." },
  { name: "Print & signage", href: "/services#campaigns-print", body: "Banners, billboards, flyers and menus, sent print-ready to your printer." },
  { name: "Motion graphics", href: "/services", body: "Animated posts, reel covers and logo reveals for your feeds." },
];

// The homepage work grid. To show a real client project, swap a placeholder
// for an entry with an image, e.g.
// { title: "Munchie Munchie", category: "Brand identity", year: "2026",
//   image: "/images/work/munchie.webp", alt: "…", href: "/work" }
export type WorkTile = {
  title: string;
  category: string;
  year?: string;
  image?: string;
  alt?: string;
  ground?: "navy" | "gold" | "cream";
  fit?: "cover" | "contain";
  href?: string;
};

export const workTiles: WorkTile[] = [
  { title: "Midas multi-device rollout", category: "Web", year: "2026", image: "/images/devices-cover.webp", alt: "Midas brand shown across laptop, tablet and phone screens", fit: "cover", href: "/work" },
  { title: "Midas campaign poster", category: "Social", year: "2026", image: "/images/statue-poster.webp", alt: "Campaign poster: marble statue of a king in a gold crown and reflective sunglasses", fit: "cover", href: "/work" },
  { title: "Client project", category: "Coming soon" },
  { title: "Client project", category: "Coming soon" },
  { title: "Midas cover banner", category: "Print", year: "2026", image: "/images/cover.webp", alt: "Midas cover banner reading Your Brand Partner, split diagonally in navy and gold", fit: "cover", href: "/work" },
  { title: "Midas crest", category: "Identity", year: "2026", image: "/images/crest-badge.webp", alt: "The Midas crest: a bearded king with a crown inside a Greek key circle", ground: "gold", fit: "contain", href: "/work" },
];

// image: shown in the open panel of "How it works" on the homepage
export const steps = [
  {
    title: "Sit down",
    image: "/images/king-mark.png",
    imageAlt: "The Midas king mark",
    body: "We learn your business, your customers and what's not working with how you show up today.",
  },
  {
    title: "Set the look",
    image: "/images/crest-badge.webp",
    imageAlt: "The Midas crest, part of the brand kit",
    body: "Colours, type, tone of voice and templates. The rules that make every piece feel like yours.",
  },
  {
    title: "Ship it",
    image: "/images/statue-poster.webp",
    imageAlt: "A finished Midas campaign poster",
    body: "Finished designs, ready to post or print, delivered on a schedule you can count on.",
  },
  {
    title: "Keep going",
    image: "/images/devices-cover.webp",
    imageAlt: "The Midas look carried across laptop, tablet and phone",
    body: "Month after month, the same standard. That's where brands get strong: in the repetition.",
  },
];

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

// Pages that bring their own menu and footer, so the site-wide ones are hidden:
// the homepage (its river and closing seal) and the Brand Health Check landing page.
export const standalonePages = ["/", "/brand-health-check"];
