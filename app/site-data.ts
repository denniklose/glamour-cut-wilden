import { salonConfig } from "../config/salon";

export { hours, navigation, salonConfig, services, site } from "../config/salon";

export const bookingHref = salonConfig.links.bookingUrl || "/termin-buchen/";
export const hasOnlineBooking = Boolean(salonConfig.links.bookingUrl);
export const bookingLabel = hasOnlineBooking ? "Online-Termin buchen" : "Termin anfragen";
export const appointmentHref = salonConfig.links.bookingUrl || salonConfig.identity.phoneHref;
export const appointmentLabel = hasOnlineBooking ? "Online-Termin buchen" : "Jetzt anrufen";
export const phoneHref = salonConfig.identity.phoneHref || "#kontakt";
export const directionsHref = salonConfig.links.directionsUrl || "#kartenhinweis";
export const emailHref = salonConfig.identity.emailHref || "#kontakt";

export const isExternal = (href: string) => /^https?:\/\//i.test(href);

export const pageCopy = {
  home: {
    heroIntro: "Persönliche Beratung, neue Ideen und ein Look, der zu Ihnen und Ihrem Alltag passt.",
    serviceIntro: "Öffentliche Einblicke von Glamour Cut zeigen Beratung, Schnitt, Farbe, Kurzhaar- und Flechtfrisuren.",
    salonIntro: "Entdecken Sie Haar-Inspirationen und lernen Sie die persönliche Haltung hinter Glamour Cut kennen.",
    processIntro: "Besprechen Sie Ihren Wunsch direkt mit dem Salon und stimmen Sie den passenden Termin telefonisch ab.",
    visitIntro: "Adresse, aktuelle Öffnungszeiten und Anfahrt finden Sie übersichtlich an einem Ort.",
    finalIntro: "Ob frischer Schnitt, neue Farbe oder ein ganz eigener Look: Der erste Schritt beginnt mit einem persönlichen Gespräch.",
  },
  pages: {
    team: { eyebrow: "Glamour Cut · Elena Schefer", intro: "Persönlicher Austausch und eine klare Idee für den Look, der zu Ihnen passt." },
    salon: { eyebrow: "Glamour Cut · Wilnsdorf-Wilden", intro: "Raum für Beratung, neue Ideen und einen Look, der sich richtig anfühlt." },
    cutColor: { eyebrow: "Schnitt · Farbe · Inspiration", intro: "Veränderung beginnt mit einer persönlichen Beratung und einer Idee, die zum eigenen Haar passt." },
    about: { eyebrow: "Glamour Cut · Über Uns", intro: "Persönlicher Austausch und öffentliche Einblicke in Schnitt, Farbe und neue Haar-Ideen." },
    contact: { eyebrow: "Glamour Cut · Kontakt", intro: "Telefon, Öffnungszeiten und Anfahrt übersichtlich an einem Ort." },
    booking: { eyebrow: "Termin bei Glamour Cut", intro: "Den eigenen Wunsch besprechen und den Termin direkt telefonisch abstimmen." },
  },
} as const;
