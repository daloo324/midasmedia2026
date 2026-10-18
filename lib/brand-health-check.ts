// Questions, scoring and wording for the Brand Health Check (/brand-health-check).
// Each question's weights ("w") add up to 100. Each answer scores 0–1 of that weight.

export type Question = {
  area: string;
  w: number;
  q: string;
  options: [label: string, score: number][];
  fix: [title: string, body: string];
  feature: string;
};

export const industries = [
  "Salon, barber or beauty",
  "Restaurant, café or venue",
  "Clinic, dentist or wellness",
  "Gym or fitness",
  "Shop or boutique",
  "Real estate",
  "Car hire or tourism",
  "School or daycare",
  "Other",
];

export const questions: Question[] = [
  {
    area: "Posting rhythm",
    w: 20,
    q: "How often does your business post on Facebook or Instagram?",
    options: [["Almost every day", 1], ["A few times a week", 0.7], ["A few times a month", 0.3], ["Rarely or never", 0]],
    fix: ["Post on a fixed rhythm", "Businesses that post 4–5 times a week stay top of mind. Pick set days and stick to them."],
    feature: "20 static posts a month",
  },
  {
    area: "Consistent look",
    w: 20,
    q: "Do your posts use the same colours, fonts and logo every time?",
    options: [["Yes, they clearly look like one brand", 1], ["Mostly, but it varies", 0.5], ["No, every post looks different", 0]],
    fix: ["Make every post look like you", "Use one set of colours, fonts and logo placement so people recognise you before they read your name."],
    feature: "Starter brand kit",
  },
  {
    area: "Video & reels",
    w: 10,
    q: "When did you last post a reel or short video?",
    options: [["This week", 1], ["This month", 0.6], ["A few months ago", 0.2], ["Never", 0]],
    fix: ["Add reels to your mix", "Short videos reach people who don't follow you yet. Even 2 a month changes your reach."],
    feature: "2 reels with custom covers",
  },
  {
    area: "Stories",
    w: 10,
    q: "Do you use stories for promos, announcements or polls?",
    options: [["Every week", 1], ["Now and then", 0.5], ["Never", 0]],
    fix: ["Use stories for quick wins", "Stories are where you announce specials, show behind the scenes and run polls."],
    feature: "4 stories a month",
  },
  {
    area: "Planning",
    w: 10,
    q: "How far ahead do you plan your posts?",
    options: [["A month ahead", 1], ["About a week ahead", 0.6], ["On the day", 0.2], ["We don't plan", 0]],
    fix: ["Plan a month ahead", "A content calendar stops last-minute posting and lines up with paydays, holidays and events."],
    feature: "Content calendar",
  },
  {
    area: "Platforms",
    w: 10,
    q: "Which platforms are you active on right now?",
    options: [["Facebook and Instagram, both active", 1], ["Only one of them", 0.5], ["Neither is really active", 0]],
    fix: ["Show up on both Facebook and Instagram", "Your customers split between the two. Being active on both doubles the places they can find you."],
    feature: "2 platforms managed",
  },
  {
    area: "Results",
    w: 10,
    q: "Do you check your page insights to see what's working?",
    options: [["Every month", 1], ["Sometimes", 0.5], ["Never", 0]],
    fix: ["Check what's working each month", "Your insights show which posts bring messages and visits. Do more of those, drop the rest."],
    feature: "Monthly analytics review",
  },
  {
    area: "Campaigns",
    w: 10,
    q: "How do you promote launches, specials or seasonal sales?",
    options: [["A planned campaign with ads", 1], ["We boost a post sometimes", 0.5], ["We don't promote them", 0]],
    fix: ["Run one proper campaign", "A designed ad set for one promo, like month-end or a festive special, beats random boosts."],
    feature: "1 campaign ad set",
  },
];

// The result heading for each score range
export function scoreBand(score: number) {
  if (score >= 80)
    return { label: "Gold standard", color: "#2f7d4f", headline: "Your brand is in great shape.", summary: "You're doing most things right. A few refinements will turn followers into regular customers." };
  if (score >= 55)
    return { label: "Showing up", color: "#b7791f", headline: "You're showing up, but not standing out.", summary: "The basics are there. Consistency and a clearer look will make people remember you." };
  if (score >= 30)
    return { label: "Inconsistent", color: "#b34a3a", headline: "Customers can't rely on seeing you.", summary: "Your page is active in bursts. Competitors who post steadily are getting the attention you could have." };
  return { label: "Invisible online", color: "#b34a3a", headline: "Most customers can't find you online yet.", summary: "That also means the biggest gains are ahead of you. A few steady changes will make a visible difference fast." };
}

export function partColor(pct: number) {
  return pct >= 0.8 ? "#2f7d4f" : pct >= 0.5 ? "#b7791f" : "#b34a3a";
}
