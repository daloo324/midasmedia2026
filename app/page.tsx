import Link from "next/link";
import "./scrollcraft.css";
import "./home.css";
import { HomeEngine } from "@/components/home/HomeEngine";
import { TouchStage } from "@/components/home/TouchStage";
import { contact } from "@/lib/contact";
import { capabilities, navLinks, steps, workTiles } from "@/lib/content";

// The homepage, built with scroll-craft. Seven scenes, each a "state" the page passes through
// on its way from marble to gold: the hall, the problem, the touch, what we make, the work,
// every week (the river of gold) and the seal. The engine is public/scrollcraft.js (never edited);
// the scenes' styles are in app/home.css.

const start = `${contact.whatsappLink}?text=${encodeURIComponent("Hi Midas, I'd like to start a project.")}`;
const cta = "Start on WhatsApp";

export default function Home() {
  return (
    <div className="home">
      <HomeEngine />

      <main id="main">
        {/* 1 · THE HALL: layered hero. Hall → giant MIDAS → the king → gold leaves. */}
        <section className="hero" data-sc-act="pin" data-sc-span="1.7">
          <div className="sc-stage" data-sc-stage>
            <div className="plane plane--hall" data-sc-parallax="-1.1" aria-hidden="true">
              <picture>
                <source media="(max-width: 860px)" srcSet="/home/hall-m.webp" />
                { }
                <img src="/home/hall.webp" alt="" width={2400} height={1340} fetchPriority="high" />
              </picture>
            </div>
            <div className="plane plane--word" data-sc-parallax="-0.5" aria-hidden="true">
              <p>MIDAS</p>
            </div>
            <div className="plane plane--bust" data-sc-parallax="0.35">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/home/bust-marble.webp"
                alt="A marble bust of a crowned king wearing mirrored sunglasses, standing in a dark hall"
                width={1100}
                height={1524}
                fetchPriority="high"
              />
            </div>
            <div className="hero__scrim" aria-hidden="true" />
            <div className="plane plane--leaves" data-sc-parallax="-1.2" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/home/leaves.webp" alt="" width={1400} height={1073} />
            </div>
            <div className="hero__floor" aria-hidden="true" />

            <a className="lockup" href="#main" aria-label="Midas Media Solutions">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/king-mark.png" alt="" width={510} height={852} />
              <span>
                <b>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/wordmark-white.png" alt="" width={724} height={178} />
                </b>
                <small>MEDIA SOLUTIONS</small>
              </span>
            </a>
            <a className="btn btn--gold hero__top-cta" href={start} target="_blank" rel="noopener noreferrer">
              {cta}
            </a>

            <div className="sc-copy sc-copy--lead" data-sc-cue="0 0.6 0">
              <h1>
                Consistent content. <em>Stronger brands.</em>
              </h1>
              <p className="hero__sub">
                Midas Media is a design studio in Gaborone. We make the social content, brand
                identities and websites that keep businesses looking sharp, week after week.
              </p>
              <div className="hero__actions">
                <a className="btn btn--gold" href={start} target="_blank" rel="noopener noreferrer">
                  {cta} <span className="arr" aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="hero__beat" data-sc-cue="0.62">
              <p>Old-world authority.</p>
              <p>New-world attitude.</p>
            </div>
          </div>
        </section>

        {/* 2 · THE PROBLEM: no imagery on purpose. The quiet before the peak. */}
        <section className="statement sc-section" data-sc-act="flow" aria-labelledby="problem-heading">
          <div className="sc-wrap">
            <h2 id="problem-heading" className="sr-only">Why brands look weak</h2>
            <div className="statement__lines" data-sc-in data-sc-stagger="260">
              <p>Most brands don&apos;t look weak because of one bad post.</p>
              <p>They look weak because nothing lines up.</p>
              <p className="fix">We fix that.</p>
            </div>
          </div>
        </section>

        {/* 3 · THE TOUCH (the peak): gild the king yourself. */}
        <section id="touch" className="touch" data-sc-act="pin" data-sc-span="3.2" aria-label="The Midas touch">
          <TouchStage sectionId="touch" />
        </section>

        {/* 4 · WHAT WE MAKE: a hard cut onto gold, each service arriving as you read. */}
        <section id="make" className="make sc-section" data-sc-act="flow">
          <div className="sc-wrap make__grid">
            <div className="make__intro">
              <h2>What we make</h2>
              <p>Six things, one look. Use one of them, or hand us the lot and let it all match.</p>
              <Link className="btn btn--navy" href="/services">
                All services <span className="arr" aria-hidden="true">→</span>
              </Link>
            </div>
            <ul className="make__list">
              {capabilities.map((c, i) => (
                <li key={c.name} data-sc-reveal="left" data-sc-reveal-at={`${0.12 + i * 0.05} ${0.3 + i * 0.05}`}>
                  <Link href={c.href}>
                    <h3>{c.name}</h3>
                    <p>{c.body}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 · THE WORK: travels sideways. Same label on every piece. */}
        <section id="work" className="work" data-sc-act="pan" data-sc-span="2.6">
          <div className="sc-stage" data-sc-stage>
            <div className="work__rail" data-sc-pan="0.08">
              <div className="work__lead">
                <h2>Our work</h2>
                <p>Our own brand first. Client projects are being added as they launch.</p>
                <Link href="/work">The Midas case study →</Link>
              </div>
              {workTiles.map((t, i) => {
                const wide = t.image === "/images/cover.webp";
                if (!t.image) {
                  return (
                    <figure className="piece piece--empty" key={`empty-${i}`}>
                      <div className="piece__media">
                        <p>Client work arriving soon</p>
                      </div>
                      <figcaption>
                        <b>Client project.</b> {t.category}.
                      </figcaption>
                    </figure>
                  );
                }
                return (
                  <figure className={`piece${wide ? " piece--wide" : ""}`} key={t.title}>
                    <div
                      className="piece__media"
                      style={t.ground === "gold" ? { background: "var(--gold)", padding: "1.5rem" } : undefined}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={t.image} alt={t.alt ?? ""} loading="lazy" />
                    </div>
                    <figcaption>
                      <b>{t.title}.</b> {t.category}, {t.year}.
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6 · EVERY WEEK: the river of gold, scrubbed by the scroll. */}
        <section id="month" className="month" data-sc-act="scrub" data-sc-span="2.6" data-sc-dwell="0.22">
          <div className="sc-stage" data-sc-stage>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="sc-stage__poster" src="/home/river-poster.webp" alt="" />
            <video
              data-sc-scrub
              data-sc-src="/home/river.mp4"
              data-sc-src-mobile="/home/river-m.mp4"
              muted
              playsInline
              aria-hidden="true"
            />
            <div className="sc-scrim sc-scrim--left" aria-hidden="true" />
            <div className="sc-scrim sc-scrim--band" aria-hidden="true" />
            <div className="sc-copy sc-copy--lead month__intro" data-sc-cue="0 0.24 0">
              <h2>Gold, every week</h2>
              <p>
                The gold stayed in the river, not in one touch. That&apos;s how brands grow: a steady
                flow of good work.
              </p>
            </div>
            {steps.map((s, i) => {
              // Each step owns about a fifth of the scene; neighbours overlap a little so there is no gap.
              const from = 0.2 + i * 0.2;
              const cue = i === steps.length - 1 ? `${from}` : `${from} ${(from + 0.24).toFixed(2)}`;
              return (
                <div className="month__step" key={s.title} data-sc-cue={cue}>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 7 · THE SEAL: the page is gold now. Press the crest to start. */}
        <section id="start" className="close" data-sc-act="pin" data-sc-span="1.1">
          <div className="sc-stage" data-sc-stage>
            <div className="close__inner">
              <div className="close__text" data-sc-cue="0.04" data-sc-rise="0">
                <h2>Ready to look like you mean it?</h2>
                <p>
                  Tell us what you&apos;re working on. A quick WhatsApp is fine. We&apos;ll come back
                  with ideas, not a sales pitch.
                </p>
                <div className="close__contact">
                  <a href={contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    Call / WhatsApp {contact.phone}
                  </a>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </div>
              <a
                className="seal"
                href={start}
                target="_blank"
                rel="noopener noreferrer"
                data-sc-cue="0.04"
                data-sc-rise="0"
              >
                <span className="seal__disc">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/crest-badge.webp" alt="" width={600} height={610} />
                </span>
                <span className="seal__label">{cta} →</span>
              </a>
            </div>
            <footer className="close__foot">
              <nav aria-label="Pages">
                {navLinks.map((l) => (
                  <Link key={l.href} href={l.href}>
                    {l.label}
                  </Link>
                ))}
              </nav>
              <p>Midas Media Solutions · Gaborone, Botswana · {new Date().getFullYear()}</p>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
