import Image from "next/image";
import Link from "next/link";
import styles from "./LookMomentVariant.module.css";

type LookMomentVariantProps = {
  accent: string;
  bookingHref: string;
  bookingLabel: string;
  image: {
    alt: string;
    src: string;
  };
  lead: string;
};

export default function LookMomentVariant({
  accent,
  bookingHref,
  bookingLabel,
  image,
  lead,
}: LookMomentVariantProps) {
  const [accentLead, ...accentTail] = accent.split(" ");

  return (
    <section className={styles.section} aria-labelledby="look-moment-variant-title">
      <figure className={styles.imageFrame}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 820px) calc(100vw - 40px), (max-width: 1320px) 39vw, 500px"
        />
      </figure>

      <div className={styles.copy}>
        <p className={`${styles.eyebrow} section-kicker`}>Beratung · Schnitt · Farbe</p>
        <h2 className={styles.title} id="look-moment-variant-title">
          <span>{lead}</span>
          <em className={`heading-accent ${styles.accent}`}>
            <span>{accentLead}</span>{" "}
            <span>{accentTail.join(" ")}</span>
          </em>
        </h2>
        <Link className={styles.cta} href={bookingHref}>
          {bookingLabel} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
