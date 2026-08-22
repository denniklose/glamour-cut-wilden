export type RouteKey =
  | "home"
  | "team"
  | "salon"
  | "extensions"
  | "about"
  | "contact"
  | "booking"
  | "imprint"
  | "privacy";

export type ImageAsset = {
  src: string;
  alt: string;
  caption: string;
};

export type SalonConfig = {
  identity: {
    name: string;
    descriptor: string;
    owner: string;
    address: [string, string];
    phoneDisplay: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    year: string;
    locale: string;
  };
  preview: {
    enabled: boolean;
    label: string;
    note: string;
  };
  logo: {
    text: string;
    mark: string;
    subtitle: string;
    src: string;
    alt: string;
  };
  accent: {
    base: string;
    dark: string;
    soft: string;
    light: string;
  };
  navigation: Array<{ label: string; href: string }>;
  links: {
    bookingUrl: string;
    websiteUrl: string;
    directionsUrl: string;
    mapEmbedUrl: string;
    social: Array<{ label: string; href: string }>;
  };
  map: {
    mode: "consent" | "link-only";
    providerName: string;
    title: string;
    consentLabel: string;
    consentCopy: string;
    routeLabel: string;
  };
  hours: Array<{ label: string; time: string }>;
  hoursNote: string;
  services: Array<{ number: string; title: string; copy: string }>;
  team: Array<{ name: string; role: string; bio: string }>;
  media: {
    hero: ImageAsset;
    salon: ImageAsset;
    extension: ImageAsset;
    team: ImageAsset;
    about: ImageAsset;
  };
  history: {
    heading: string;
    intro: string;
    paragraphs: string[];
  };
  claims: {
    hero: string;
    intro: string;
    services: string;
    salon: string;
    extensions: string;
    booking: string;
    visit: string;
    faq: string;
    final: string;
  };
  faq: Array<{ question: string; answer: string }>;
  seo: {
    baseUrl: string;
    pages: Record<RouteKey, { title: string; description: string; canonical: string }>;
  };
  legal: {
    imprint: {
      owner: string;
      address: string[];
      contact: string;
      paragraphs: Array<{ title: string; copy: string }>;
    };
    privacy: {
      responsible: string;
      paragraphs: Array<{ title: string; copy: string }>;
    };
    approvals: {
      legalReviewed: boolean;
      claimsConfirmed: boolean;
      assetRightsConfirmed: boolean;
    };
  };
};

const templateHairImage = (src: string, caption: string, alt: string): ImageAsset => ({
  src,
  caption,
  alt,
});

export const salonConfig = {
  preview: {
    enabled: true,
    label: "Vorab-Entwurf",
    note: "Neutrale Inhalte für das Erstgespräch – öffentliche Fakten und persönliche Wünsche werden vor dem Livegang finalisiert.",
  },
  identity: {
    name: "Ihr Friseursalon",
    descriptor: "Friseursalon · Haar · Stil · Beratung",
    owner: "",
    address: ["Adresse des Salons", "Ort des Salons"],
    phoneDisplay: "",
    phoneHref: "",
    email: "",
    emailHref: "",
    year: "2026",
    locale: "de-DE",
  },
  logo: {
    text: "Salon",
    mark: "SF",
    subtitle: "Haar · Stil · Beratung",
    src: "/images/brand-mark.svg",
    alt: "Neutrales Salonlogo",
  },
  accent: {
    base: "#70465e",
    dark: "#4d3041",
    soft: "#a47a8e",
    light: "#f0dfe7",
  },
  navigation: [
    { label: "Start", href: "/" },
    { label: "Team", href: "/team/" },
    { label: "Salon", href: "/salon/" },
    { label: "Extensions", href: "/haarverlaengerung-extension/" },
    { label: "Über Uns", href: "/ueber-uns/" },
    { label: "Öffnungszeiten/Kontakt", href: "/oeffnungszeiten/" },
  ],
  links: {
    bookingUrl: "",
    websiteUrl: "",
    directionsUrl: "",
    mapEmbedUrl: "",
    social: [] as Array<{ label: string; href: string }>,
  },
  map: {
    mode: "consent",
    providerName: "Google Maps",
    title: "Anfahrt zum Salon",
    consentLabel: "Karte laden",
    consentCopy: "Beim Laden der Karte können Daten an Google übertragen werden.",
    routeLabel: "Route in Google Maps öffnen",
  },
  hours: [
    { label: "Montag", time: "Nach Recherche bestätigen" },
    { label: "Dienstag", time: "Nach Recherche bestätigen" },
    { label: "Mittwoch", time: "Nach Recherche bestätigen" },
    { label: "Donnerstag", time: "Nach Recherche bestätigen" },
    { label: "Freitag", time: "Nach Recherche bestätigen" },
    { label: "Samstag", time: "Nach Recherche bestätigen" },
  ],
  hoursNote: "Aktuelle Öffnungszeiten werden vor dem Livegang anhand öffentlicher Angaben abgeglichen.",
  services: [
    { number: "01", title: "Beratung & Schnitt", copy: "Ein klarer Plan für einen Look, der zu Haarstruktur, Alltag und persönlichem Stil passt." },
    { number: "02", title: "Styling & Finish", copy: "Textur, Form und ein Finish, das den neuen Look im Alltag leicht tragbar macht." },
    { number: "03", title: "Farbe & Nuancen", copy: "Farbideen mit Gefühl für Ton, Tiefe und den Charakter des jeweiligen Haars." },
    { number: "04", title: "Highlights & Dimension", copy: "Lichtreflexe und weiche Übergänge für mehr Bewegung und eine natürliche Wirkung." },
    { number: "05", title: "Pflege & Glanz", copy: "Routinen und Produkte, die das Haar zwischen den Terminen gepflegt und lebendig halten." },
    { number: "06", title: "Länge & Extensions", copy: "Mehr Fülle oder Länge beginnt mit einer persönlichen Beratung und einer passenden Methode." },
    { number: "07", title: "Looks für besondere Momente", copy: "Ein Styling, das sich für Feier, Event oder einfach für den nächsten schönen Tag richtig anfühlt." },
    { number: "08", title: "Ihr persönlicher Plan", copy: "Gemeinsam entsteht eine realistische Empfehlung für den nächsten Termin und die Zeit dazwischen." },
  ],
  team: [
    {
      name: "Persönliche Beratung",
      role: "Für Ihren Stil",
      bio: "Von der ersten Idee bis zum Finish steht ein klarer, persönlicher Austausch im Mittelpunkt.",
    },
    {
      name: "Handwerk mit Sorgfalt",
      role: "Für Ihr gutes Gefühl",
      bio: "Jeder Termin bekommt Zeit für Verständnis, Auswahl und einen Look, der sich nach Ihnen anfühlt.",
    },
  ],
  media: {
    hero: templateHairImage(
      "/images/hero-hair-photo.webp",
      "Original KI-Haarmotiv · keine Salonaufnahme",
      "Original KI-Haarmotiv mit langen braunen Wellen von hinten; keine Salonaufnahme",
    ),
    salon: templateHairImage(
      "/images/salon-hair-photo.webp",
      "Original KI-Haarmotiv · vor Kundeneinsatz ersetzen oder freigeben",
      "Original KI-Haarmotiv mit blondem, strukturiertem Bob von hinten; keine Salonaufnahme",
    ),
    extension: templateHairImage(
      "/images/extensions-hair-photo.webp",
      "Original KI-Haarmotiv für Extensions · keine Leistungsaufnahme",
      "Original KI-Haarmotiv mit langen dunkelbraunen Haarsträhnen; keine Leistungsaufnahme",
    ),
    team: templateHairImage(
      "/images/team-hair-photo.webp",
      "Original KI-Haarmotiv · keine Teamdarstellung",
      "Original KI-Haarmotiv mit kupferfarbenen Wellen von hinten; keine Teamdarstellung",
    ),
    about: templateHairImage(
      "/images/about-hair-photo.webp",
      "Original KI-Haarmotiv · keine Salonaufnahme",
      "Original KI-Haarmotiv mit dunklen lockigen Haaren von hinten; keine Salonaufnahme",
    ),
  },
  history: {
    heading: "Ihr Stil beginnt mit guter Beratung.",
    intro: "Ein guter Salon verbindet Handwerk, Persönlichkeit und Zeit für das, was Ihnen wichtig ist.",
    paragraphs: [
      "Jeder Salon ist anders – und jeder Look beginnt mit einem guten Gespräch.",
      "Von Schnitt und Styling bis Farbe, Pflege oder Länge entsteht die Auswahl passend zu Haar, Alltag und Wunsch.",
      "Die Geschichte, Menschen und besonderen Schwerpunkte dieses Salons werden im Erstgespräch mit den passenden Fakten ergänzt.",
    ],
  },
  claims: {
    hero: "Haar. Stil. Persönlichkeit.",
    intro: "Ihr Look. Ihr Moment.",
    services: "Alles für Ihren Look.",
    salon: "Raum für gute Beratung.",
    extensions: "Mehr Länge. Mehr Möglichkeiten.",
    booking: "Ihr Termin. Ihr Rhythmus.",
    visit: "Wir freuen uns auf Ihren Besuch.",
    faq: "Gut zu wissen.",
    final: "Bereit für Ihren nächsten Look?",
  },
  faq: [
    { question: "Wie wird ein Termin vereinbart?", answer: "Nutzen Sie den bestätigten Online-Terminlink oder fragen Sie direkt beim Salon an. Der passende Weg wird im finalen Kundenprofil hinterlegt." },
    { question: "Welche Leistungen werden angeboten?", answer: "Das Leistungsprofil wird anhand öffentlicher Saloninformationen aufgebaut und im Gespräch gemeinsam verfeinert." },
    { question: "Wo befindet sich der Salon?", answer: "Adresse und Route werden nach der öffentlichen Recherche übersichtlich auf der Kontaktseite gezeigt." },
    { question: "Wann ist der Salon geöffnet?", answer: "Die aktuell recherchierten Öffnungszeiten werden vor dem Livegang gegengeprüft und zentral gepflegt." },
    { question: "Wo finde ich weitere Informationen?", answer: "Offizielle Website und Social-Profile werden nur verlinkt, wenn sie eindeutig dem Salon zugeordnet sind." },
  ],
  seo: {
    baseUrl: "",
    pages: {
      home: { title: "Friseursalon | Haar, Stil & Beratung", description: "Vorab-Entwurf für einen modernen Friseursalon mit persönlicher Beratung und klarer Bildsprache.", canonical: "" },
      team: { title: "Team & Haltung | Friseursalon", description: "Persönliche Beratung, sorgfältiges Handwerk und ein gutes Gefühl für den eigenen Stil.", canonical: "" },
      salon: { title: "Der Salon | Friseursalon", description: "Ein ruhiger Ort für Beratung, Schnitt, Styling und neue Ideen.", canonical: "" },
      extensions: { title: "Extensions & Länge | Friseursalon", description: "Mehr Länge und Fülle beginnen mit einer persönlichen Beratung.", canonical: "" },
      about: { title: "Über Uns | Friseursalon", description: "Die Geschichte, Haltung und Arbeitsweise des Salons im Überblick.", canonical: "" },
      contact: { title: "Öffnungszeiten & Kontakt | Friseursalon", description: "Kontakt, Öffnungszeiten und Anfahrt übersichtlich an einem Ort.", canonical: "" },
      booking: { title: "Termin anfragen | Friseursalon", description: "Den passenden Terminweg finden und den eigenen Wunsch besprechen.", canonical: "" },
      imprint: { title: "Impressum | Friseursalon", description: "Rechtliche Betreiberangaben des Friseursalons.", canonical: "" },
      privacy: { title: "Datenschutz | Friseursalon", description: "Datenschutzhinweise des Friseursalons.", canonical: "" },
    },
  },
  legal: {
    imprint: {
      owner: "Die rechtlichen Betreiberangaben werden vor dem Livegang ergänzt.",
      address: ["Adresse des Salons wird vor dem Livegang ergänzt."],
      contact: "Telefonischer und digitaler Kontakt werden im finalen Profil ergänzt.",
      paragraphs: [
        { title: "Betreiberangaben", copy: "Name, ladungsfähige Anschrift und Kontakt werden nach der Recherche mit dem Salon geprüft." },
        { title: "Externe Links", copy: "Verlinkt werden nur bestätigte Seiten und Dienste. Die finale rechtliche Bewertung erfolgt vor der Veröffentlichung." },
        { title: "Urheberrecht", copy: "Texte, Bilder und Gestaltung werden mit Quelle, Lizenz und Freigabestatus dokumentiert." },
      ],
    },
    privacy: {
      responsible: "Verantwortliche Stelle und Kontaktdaten werden vor dem Livegang ergänzt.",
      paragraphs: [
        { title: "Verantwortliche Stelle", copy: "Die für den Salon verantwortliche Stelle wird mit den finalen Betreiberangaben ergänzt." },
        { title: "Externe Links und Buchung", copy: "Nur tatsächlich eingesetzte externe Dienste und ihre Datenschutzhinweise werden beschrieben." },
        { title: "Kartenansicht", copy: "Die Kartenansicht wird erst nach einer bewussten Zustimmung geladen. Anbieter, Zweck und Rechtsgrundlage werden vor dem Livegang geprüft." },
        { title: "Kontakt", copy: "Kontaktwege und Speicherfristen werden ausschließlich anhand der tatsächlich eingesetzten Funktionen dokumentiert." },
      ],
    },
    approvals: {
      legalReviewed: false,
      claimsConfirmed: false,
      assetRightsConfirmed: true,
    },
  },
} satisfies SalonConfig;

export const site = salonConfig.identity;
export const navigation = salonConfig.navigation;
export const services = salonConfig.services;
export const hours = salonConfig.hours;
