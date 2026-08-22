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
  return <main className="inner-page"><SiteHeader inner /><InnerPageHero eyebrow={pageCopy.pages.team.eyebrow} title={<>Persönlich bei <em className="heading-accent">Glamour Cut.</em></>} intro={pageCopy.pages.team.intro} ctaLabel={bookingLabel} ctaHref={bookingHref} /><section className="inner-feature-section"><div className="inner-feature-copy"><p className="section-kicker">Elena Schefer</p><h2>Zuhören. Ideen entwickeln. <em className="heading-accent">Veränderung</em> gestalten.</h2><p>Ein stimmiger Termin beginnt mit dem Gespräch über Wünsche, Haar und Alltag.</p><div className="team-placeholder-list">{salonConfig.team.map((member) => <article key={member.name}><strong>{member.name}</strong><span>{member.role}</span><p>{member.bio}</p></article>)}</div></div><figure className="inner-feature-media inner-feature-media-team"><Image src={salonConfig.media.team.src} alt={salonConfig.media.team.alt} fill sizes="(max-width: 760px) 94vw, 58vw" /><figcaption className="image-note">Haar-Inspiration · keine Teamaufnahme</figcaption></figure></section><CallToAction kicker="Ihr Besuch" title={<>Ihre Idee im <em className="heading-accent">persönlichen Gespräch.</em></>} copy="Rufen Sie Glamour Cut an und stimmen Sie Ihren Termin direkt mit dem Salon ab." dark /><SiteFooter /><a className="mobile-call-bar" href={bookingHref}><span aria-hidden="true">↗</span>{bookingLabel}</a></main>;
}
