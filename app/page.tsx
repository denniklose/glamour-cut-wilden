import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import BookingOverview from "./components/BookingOverview";
import HoursCard from "./components/HoursCard";
import MapEmbed from "./components/MapEmbed";
import ServiceCard from "./components/ServiceCard";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig, site } from "./site-data";
import { pageMetadata } from "./seo";

export const metadata: Metadata = pageMetadata("home");

const bookingSteps = [
  ["01", "Wunsch besprechen", "Gemeinsam klären, welcher Look und welcher Zeitrahmen zu Ihnen passt."],
  ["02", "Terminweg wählen", "Sie erhalten den passenden nächsten Schritt – online oder direkt über den Salon."],
  ["03", "Mit Vorfreude starten", "Alle wichtigen Details bleiben übersichtlich an einem Ort."],
];

const claimParts = (claim: string) => {
  const words = claim.trim().split(/\s+/);
  return { lead: words.shift() ?? claim, accent: words.join(" ") };
};

export default function Home() {
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
          <div className="hero-actions"><a className="button button-primary" href={bookingHref}>Termin buchen</a><Link className="text-link" href="/ueber-uns/">Über Uns entdecken <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="hero-visual" aria-label="Haar-Inspiration"><div className="hero-arch"><Image src={salonConfig.media.hero.src} alt={salonConfig.media.hero.alt} fill priority sizes="(max-width: 760px) 94vw, 44vw" /></div><span className="image-note">{salonConfig.media.hero.caption}</span><span className="hero-visual-line" aria-hidden="true" /></div>
      </section>

      <section className="service-intro" aria-labelledby="service-intro-title"><p>Haar · Schönheit · Beratung</p><h2 id="service-intro-title">{introClaim.lead} <em className="heading-accent">{introClaim.accent}</em></h2><Link href={bookingHref}>Termin buchen <span aria-hidden="true">→</span></Link></section>

      <section className="services-section" id="leistungen" aria-labelledby="services-title"><div className="section-heading section-heading-light"><p className="section-kicker">Leistungen</p><h2 id="services-title">Alles rund um <em className="heading-accent">Ihre Leistungen.</em></h2><p>{pageCopy.home.serviceIntro}</p></div><div className="service-list">{salonConfig.services.map((service) => <ServiceCard key={service.number} {...service} href={bookingHref} />)}</div></section>

      <section className="inspiration-section" id="salon" aria-labelledby="inspiration-title"><div className="section-heading"><p className="section-kicker">Salon &amp; Team</p><h2 id="inspiration-title">Ein Ort zum <em className="heading-accent">Wohlfühlen.</em></h2><p>{pageCopy.home.salonIntro}</p></div><div className="look-grid"><figure className="look-card look-card-tall team-feature"><Image src={salonConfig.media.salon.src} alt={salonConfig.media.salon.alt} fill sizes="(max-width: 760px) 94vw, 52vw" /><figcaption><span>01</span><strong>{salonConfig.media.salon.caption}</strong><small>Original KI-Haarmotiv der Vorlage · vor Kundeneinsatz ersetzen oder freigeben</small></figcaption></figure><div className="look-side"><figure className="look-card salon-feature"><Image src={salonConfig.media.extension.src} alt={salonConfig.media.extension.alt} fill sizes="(max-width: 760px) 94vw, 42vw" /><figcaption><span>02</span><strong>{salonConfig.media.extension.caption}</strong><small>Original KI-Haarmotiv der Vorlage · vor Kundeneinsatz ersetzen oder freigeben</small></figcaption></figure><div className="social-proof-block"><p className="section-kicker">Beratung</p><strong>{salonConfig.claims.salon}</strong><p>Ein gutes Ergebnis beginnt mit Zuhören, ehrlicher Einschätzung und einem Plan, der im Alltag funktioniert.</p><div className="inline-links"><Link className="text-link" href="/team/">Team ansehen <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/salon/">Salon entdecken <span aria-hidden="true">↗</span></Link></div></div></div></div></section>

      <section className="extension-strip" aria-labelledby="extension-strip-title"><div className="extension-strip-image"><Image src={salonConfig.media.team.src} alt={salonConfig.media.team.alt} fill sizes="(max-width: 760px) 94vw, 54vw" /></div><div className="extension-strip-copy"><p className="section-kicker">Team &amp; Extensions</p><h2 id="extension-strip-title"><em className="heading-accent">Beratung</em> {salonConfig.claims.extensions}</h2><p>Nur bestätigte Leistungen und freigegebene Bilder in dieser Fläche verwenden.</p><div className="extension-strip-actions"><Link className="button button-primary" href="/haarverlaengerung-extension/">Extensions entdecken</Link><a className="text-link" href={bookingHref}>Termin buchen <span aria-hidden="true">↗</span></a></div></div></section>

      <section className="process-section" aria-labelledby="process-title"><div className="section-heading"><p className="section-kicker">Ihr Termin</p><h2 id="process-title">Wunsch besprechen. <em className="heading-accent">Termin</em> finden. Loslegen.</h2><p>{pageCopy.home.processIntro}</p></div><ol className="process-list">{bookingSteps.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}</ol><div className="phone-pair"><a href={site.phoneHref || "#kontakt"}><small>Salon</small><strong>{site.phoneDisplay || "Kontakt anfragen"}</strong></a><a href={bookingHref}><small>Online</small><strong>{bookingLabel}</strong></a></div></section>

      <section className="planner-section" id="terminwunsch" aria-labelledby="planner-title"><div className="planner-copy"><p className="section-kicker">Ihr Termin</p><h2 id="planner-title">{salonConfig.claims.booking}</h2><p>{pageCopy.home.processIntro}</p></div><BookingOverview /></section>

      <section className="visit-section" id="kontakt" aria-labelledby="visit-title"><div className="visit-location"><div className="visit-copy"><p className="section-kicker">Salonbesuch</p><h2 id="visit-title">{salonConfig.claims.visit}</h2><p className="visit-address"><span>{site.address[0]}</span><span>{site.address[1]}</span></p><a className="button button-light" href={salonConfig.links.directionsUrl || "#kartenhinweis"} target={salonConfig.links.directionsUrl ? "_blank" : undefined} rel={salonConfig.links.directionsUrl ? "noreferrer" : undefined}>Anfahrt ansehen</a></div><MapEmbed directionsUrl={salonConfig.links.directionsUrl} embedUrl={salonConfig.links.mapEmbedUrl} title={salonConfig.map.title} /></div><HoursCard /></section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title"><div className="section-heading"><p className="section-kicker">Gut zu wissen</p><h2 id="faq-title">{salonConfig.claims.faq}</h2></div><div className="faq-list">{salonConfig.faq.map((faq, index) => <details key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div></section>

      <section className="final-cta" aria-labelledby="final-cta-title"><p className="section-kicker">Bereit für den nächsten Schritt?</p><h2 id="final-cta-title">{salonConfig.claims.final}</h2><p>{pageCopy.home.finalIntro}</p><div className="final-cta-actions"><a className="button button-light" href={bookingHref}>{bookingLabel}</a>{site.phoneHref ? <a className="text-link text-link-light" href={site.phoneHref}>{site.phoneDisplay} <span aria-hidden="true">→</span></a> : <Link className="text-link text-link-light" href="/oeffnungszeiten/">Kontakt ansehen <span aria-hidden="true">→</span></Link>}</div></section>
      <SiteFooter />
      <a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>Termin buchen</a>
    </main>
  );
}
