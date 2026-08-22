import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BookingOverview from "../components/BookingOverview";
import HoursCard from "../components/HoursCard";
import LookMomentVariant from "../components/LookMomentVariant";
import MapEmbed from "../components/MapEmbed";
import ServiceSelector from "../components/ServiceSelector";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig, site } from "../site-data";

export const metadata: Metadata = {
  title: "Startseiten-Variante | Glamour Cut",
  description: "Alternative Gestaltung der Startseiten-Sektion Ihr Look. Ihr Moment.",
  robots: { index: false, follow: false },
};

const bookingSteps = [
  ["01", "Wunsch besprechen", "Gemeinsam klären, welcher Look und welcher Zeitrahmen zu Ihnen passt."],
  ["02", "Direkt anrufen", "Unter 02739 / 875447 erreichen Sie Glamour Cut persönlich."],
  ["03", "Termin abstimmen", "Leistung, Zeitpunkt und wichtige Details werden direkt geklärt."],
];

const claimParts = (claim: string) => {
  const words = claim.trim().split(/\s+/);
  return { lead: words.shift() ?? claim, accent: words.join(" ") };
};

export default function LookMomentVariantPage() {
  const heroClaim = claimParts(salonConfig.claims.hero);
  const introClaim = claimParts(salonConfig.claims.intro);

  return (
    <main id="top">
      <SiteHeader />

      <section className="hero" id="start" aria-labelledby="home-title">
        <div className="hero-copy">
          <div className="hero-ornament" aria-hidden="true"><span>{salonConfig.logo.mark}</span></div>
          <p className="eyebrow">{site.descriptor}</p>
          <h1 id="home-title">{heroClaim.lead} <em className="heading-accent">{heroClaim.accent}</em></h1>
          <p className="hero-intro">{pageCopy.home.heroIntro}</p>
          <div className="hero-actions"><a className="button button-primary" href={bookingHref}>{bookingLabel}</a><Link className="text-link" href="/ueber-uns/">Über Uns entdecken <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="hero-visual" aria-label="Haar-Inspiration"><div className="hero-arch"><Image src={salonConfig.media.hero.src} alt={salonConfig.media.hero.alt} fill priority sizes="(max-width: 760px) 94vw, 44vw" /></div><span className="image-note">{salonConfig.media.hero.caption}</span><span className="hero-visual-line" aria-hidden="true" /></div>
      </section>

      <LookMomentVariant
        lead={introClaim.lead}
        accent={introClaim.accent}
        image={salonConfig.media.about}
        bookingHref={bookingHref}
        bookingLabel={bookingLabel}
      />

      <section className="services-section" id="leistungen" aria-labelledby="services-title"><div className="section-heading section-heading-light services-heading"><p className="section-kicker">Inspiration &amp; Bereiche</p><h2 id="services-title" className="editorial-heading"><span>Schnitt. Farbe.</span><em className="heading-accent">Neue Ideen.</em></h2><p>{pageCopy.home.serviceIntro}</p></div><ServiceSelector services={salonConfig.services} bookingHref={bookingHref} bookingLabel={bookingLabel} /></section>

      <section className="inspiration-section" id="salon" aria-labelledby="inspiration-title"><div className="section-heading"><p className="section-kicker">Glamour Cut</p><h2 id="inspiration-title">Raum für <em className="heading-accent">Ihren Stil.</em></h2><p>{pageCopy.home.salonIntro}</p></div><div className="look-grid"><figure className="look-card look-card-tall team-feature"><Image src={salonConfig.media.salon.src} alt={salonConfig.media.salon.alt} fill sizes="(max-width: 760px) 94vw, 52vw" /><figcaption><span>01</span><strong>{salonConfig.media.salon.caption}</strong><small>Generisches Symbolbild · keine Aufnahme des Salons</small></figcaption></figure><div className="look-side"><figure className="look-card salon-feature"><Image src={salonConfig.media.color.src} alt={salonConfig.media.color.alt} fill sizes="(max-width: 760px) 94vw, 42vw" /><figcaption><span>02</span><strong>{salonConfig.media.color.caption}</strong><small>Generisches Symbolbild · keine Kundenaufnahme</small></figcaption></figure><div className="social-proof-block"><p className="section-kicker">Persönliche Beratung</p><strong>{salonConfig.claims.salon}</strong><p>Ein stimmiger Look beginnt mit Zuhören, einer klaren Idee und einem Plan, der im Alltag funktioniert.</p><div className="inline-links"><Link className="text-link" href="/team/">Elena kennenlernen <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/salon/">Salon entdecken <span aria-hidden="true">↗</span></Link></div></div></div></div></section>

      <section className="extension-strip" aria-labelledby="extension-strip-title"><div className="extension-strip-image"><Image src={salonConfig.media.team.src} alt={salonConfig.media.team.alt} fill sizes="(max-width: 760px) 94vw, 54vw" /></div><div className="extension-strip-copy"><p className="section-kicker">Schnitt &amp; Farbe</p><h2 id="extension-strip-title"><em className="heading-accent">Veränderung</em> beginnt mit einer Idee.</h2><p>{salonConfig.claims.cutColor} Den konkreten Wunsch besprechen Sie persönlich mit Elena Schefer.</p><div className="extension-strip-actions"><Link className="button button-primary" href="/schnitt-farbe/">Schnitt &amp; Farbe entdecken</Link><a className="text-link" href={bookingHref}>{bookingLabel} <span aria-hidden="true">↗</span></a></div></div></section>

      <section className="process-section" aria-labelledby="process-title"><div className="section-heading"><p className="section-kicker">Ihr Termin</p><h2 id="process-title">Wunsch besprechen. <em className="heading-accent">Termin</em> finden. Loslegen.</h2><p>{pageCopy.home.processIntro}</p></div><ol className="process-list">{bookingSteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><div className="phone-pair"><a href={site.phoneHref}><small>Direkt anrufen</small><strong>{site.phoneDisplay}</strong></a><a href={bookingHref}><small>Alle Infos</small><strong>{bookingLabel}</strong></a></div></section>

      <section className="planner-section" id="terminwunsch" aria-labelledby="planner-title"><div className="planner-copy"><p className="section-kicker">Ihr Termin</p><h2 id="planner-title">{salonConfig.claims.booking}</h2><p>{pageCopy.home.processIntro}</p></div><BookingOverview /></section>

      <section className="visit-section" id="kontakt" aria-labelledby="visit-title"><div className="visit-location"><div className="visit-copy"><p className="section-kicker">Salonbesuch</p><h2 id="visit-title">{salonConfig.claims.visit}</h2><p className="visit-address"><span>{site.address[0]}</span><span>{site.address[1]}</span></p><a className="button button-light" href={salonConfig.links.directionsUrl || "#kartenhinweis"} target={salonConfig.links.directionsUrl ? "_blank" : undefined} rel={salonConfig.links.directionsUrl ? "noreferrer" : undefined}>Anfahrt ansehen</a></div><MapEmbed directionsUrl={salonConfig.links.directionsUrl} embedUrl={salonConfig.links.mapEmbedUrl} title={salonConfig.map.title} /></div><HoursCard /></section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title"><div className="section-heading"><p className="section-kicker">Gut zu wissen</p><h2 id="faq-title">{salonConfig.claims.faq}</h2></div><div className="faq-list">{salonConfig.faq.map((faq, index) => <details key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="final-cta" aria-labelledby="final-cta-title"><p className="section-kicker">Bereit für den nächsten Schritt?</p><h2 id="final-cta-title">{salonConfig.claims.final}</h2><p>{pageCopy.home.finalIntro}</p><div className="final-cta-actions"><a className="button button-light" href={bookingHref}>{bookingLabel}</a>{site.phoneHref ? <a className="text-link text-link-light" href={site.phoneHref}>{site.phoneDisplay} <span aria-hidden="true">→</span></a> : <Link className="text-link text-link-light" href="/oeffnungszeiten/">Kontakt ansehen <span aria-hidden="true">→</span></Link>}</div></section>
      <SiteFooter />
      <a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a>
    </main>
  );
}
