import { salonConfig } from "../config/salon";

export { hours, navigation, salonConfig, services, site } from "../config/salon";

export const bookingHref = salonConfig.links.bookingUrl || "/termin-buchen/";
export const hasOnlineBooking = Boolean(salonConfig.links.bookingUrl);
export const bookingLabel = hasOnlineBooking ? "Online-Termin buchen" : "Termin anfragen";
export const phoneHref = salonConfig.identity.phoneHref || "#kontakt";
export const directionsHref = salonConfig.links.directionsUrl || "#kartenhinweis";
export const emailHref = salonConfig.identity.emailHref || "#kontakt";

export const isExternal = (href: string) => /^https?:\/\//i.test(href);

export const pageCopy = {
  home: {
    heroIntro: "Ein Ort für gute Gespräche, klares Handwerk und Looks, die sich nach Ihnen anfühlen.",
    serviceIntro: "Von der ersten Beratung bis zum letzten Finish entsteht ein Look, der zu Ihrem Alltag und Ihrer Persönlichkeit passt.",
    salonIntro: "Ruhige Atmosphäre, persönliche Beratung und ein Blick für die Details – die wichtigsten Eindrücke sehen Sie auf den folgenden Seiten.",
    processIntro: "Sie wählen den passenden Bereich, besprechen Ihren Wunsch und erhalten direkt den nächsten sinnvollen Schritt.",
    visitIntro: "Adresse, Öffnungszeiten und Anfahrt finden Sie übersichtlich an einem Ort.",
    finalIntro: "Ob frischer Schnitt, neue Farbe oder ein ganz eigener Look: Der erste Schritt beginnt mit einem guten Gespräch.",
  },
  pages: {
    team: { eyebrow: "Friseursalon · Team & Haltung", intro: "Persönliche Beratung, sorgfältiges Handwerk und die Menschen hinter dem Salon." },
    salon: { eyebrow: "Friseursalon · Der Salon", intro: "Ein ruhiger Ort für neue Ideen, gute Gespräche und einen Look, der sich richtig anfühlt." },
    extensions: { eyebrow: "Extensions · Beratung", intro: "Mehr Länge oder Fülle beginnt mit einer persönlichen Beratung und einer passenden Methode." },
    about: { eyebrow: "Friseursalon · Über Uns", intro: "Die Geschichte, Haltung und Arbeitsweise des Salons – klar, persönlich und nahbar erzählt." },
    contact: { eyebrow: "Friseursalon · Kontakt", intro: "Kontakt, Öffnungszeiten und Anfahrt übersichtlich an einem Ort." },
    booking: { eyebrow: "Terminvereinbarung", intro: "Den eigenen Wunsch besprechen und den passenden Weg zum Termin finden." },
  },
} as const;
