import Image from "next/image";
import type { Metadata } from "next";
import CallToAction from "../components/CallToAction";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { bookingHref, bookingLabel, pageCopy, salonConfig } from "../site-data";
import { pageMetadata } from "../seo";

export const metadata: Metadata = pageMetadata("team");

export default function TeamPage() {
  return <main className="inner-page"><SiteHeader inner /><InnerPageHero eyebrow={pageCopy.pages.team.eyebrow} title={<><em className="heading-accent">Ihr</em> Team.</>} intro={pageCopy.pages.team.intro} ctaLabel={bookingLabel} ctaHref={bookingHref} /><section className="inner-feature-section"><div className="inner-feature-copy"><p className="section-kicker">Team &amp; Haltung</p><h2>Persönlich beraten. <em className="heading-accent">Sorgfältig</em> gestalten.</h2><p>Ein guter Termin verbindet Erfahrung, Aufmerksamkeit und den Freiraum, den eigenen Stil in Ruhe zu entwickeln.</p><div className="team-placeholder-list">{salonConfig.team.map((member) => <article key={member.name}><strong>{member.name}</strong><span>{member.role}</span><p>{member.bio}</p></article>)}</div></div><figure className="inner-feature-media inner-feature-media-team"><Image src={salonConfig.media.team.src} alt={salonConfig.media.team.alt} fill sizes="(max-width: 760px) 94vw, 58vw" /></figure></section><CallToAction kicker="Ihr Besuch" title={<>Ein Salon für <em className="heading-accent">Haar</em> und Persönlichkeit.</>} copy="Im persönlichen Gespräch wird aus einer Idee ein Look, der zu Ihnen passt." dark /><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
