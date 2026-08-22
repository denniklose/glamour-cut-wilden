import type { ReactNode } from "react";
import { salonConfig } from "../site-data";

type HeroProps = { eyebrow: string; title: ReactNode; intro: string; children?: ReactNode };

export default function Hero({ eyebrow, title, intro, children }: HeroProps) {
  return <section className="inner-hero"><div className="inner-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{children}</div><div className="inner-hero-mark" aria-hidden="true"><span>{salonConfig.logo.mark}</span></div></section>;
}
