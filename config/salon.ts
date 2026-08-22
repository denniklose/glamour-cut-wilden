export type RouteKey =
  | "home"
  | "team"
  | "salon"
  | "cutColor"
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
    color: ImageAsset;
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
    cutColor: string;
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

const hairImage = (src: string, caption: string, alt: string): ImageAsset => ({
  src,
  caption,
  alt,
});

const baseUrl = "https://glamour-cut-wilden.vercel.app";

export const salonConfig = {
  preview: {
    enabled: true,
    label: "Kundenvorschau",
    note: "Öffentliche Angaben wurden recherchiert; Leistungen und Rechtstexte werden vor dem Livegang gemeinsam final geprüft.",
  },
  identity: {
    name: "Glamour Cut",
    descriptor: "Friseursalon · Wilnsdorf-Wilden",
    owner: "Elena Schefer",
    address: ["Auf dem Bruch 1", "57234 Wilnsdorf-Wilden"],
    phoneDisplay: "02739 / 875447",
    phoneHref: "tel:+492739875447",
    email: "e.schefer33@gmail.com",
    emailHref: "mailto:e.schefer33@gmail.com",
    year: "2026",
    locale: "de-DE",
  },
  logo: {
    text: "Glamour Cut",
    mark: "GC",
    subtitle: "by Elena Schefer",
    src: "/favicon.svg",
    alt: "Glamour Cut Schriftzug",
  },
  accent: {
    base: "#70344C",
    dark: "#4D2336",
    soft: "#A8788B",
    light: "#EEDFE5",
  },
  navigation: [
    { label: "Start", href: "/" },
    { label: "Team", href: "/team/" },
    { label: "Salon", href: "/salon/" },
    { label: "Schnitt & Farbe", href: "/schnitt-farbe/" },
    { label: "Über Uns", href: "/ueber-uns/" },
    { label: "Öffnungszeiten/Kontakt", href: "/oeffnungszeiten/" },
  ],
  links: {
    bookingUrl: "",
    websiteUrl: baseUrl,
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Glamour+Cut%2C+Auf+dem+Bruch+1%2C+57234+Wilnsdorf-Wilden",
    mapEmbedUrl: "https://www.google.com/maps?q=Glamour+Cut%2C+Auf+dem+Bruch+1%2C+57234+Wilnsdorf-Wilden&output=embed",
    social: [
      { label: "Instagram", href: "https://www.instagram.com/glamour.cut/" },
    ],
  },
  map: {
    mode: "consent",
    providerName: "Google Maps",
    title: "Anfahrt zu Glamour Cut in Wilnsdorf-Wilden",
    consentLabel: "Google Maps laden",
    consentCopy: "Erst nach Ihrem Klick wird die Karte von Google Maps geladen. Dabei können Daten an Google übertragen werden.",
    routeLabel: "Route in Google Maps öffnen",
  },
  hours: [
    { label: "Montag", time: "Geschlossen" },
    { label: "Dienstag", time: "09:00–18:00" },
    { label: "Mittwoch", time: "09:00–17:00" },
    { label: "Donnerstag", time: "09:00–18:00" },
    { label: "Freitag", time: "09:00–19:00" },
    { label: "Samstag", time: "08:00–13:00" },
    { label: "Sonntag", time: "Geschlossen" },
  ],
  hoursNote: "Stand: Google-Unternehmensprofil, geprüft am 22.08.2026. An Feiertagen bitte kurz telefonisch nachfragen.",
  services: [
    {
      number: "01",
      title: "Persönliche Beratung",
      copy: "Wünsche, Haar und Alltag geben gemeinsam die Richtung für den nächsten Look vor.",
    },
    {
      number: "02",
      title: "Schnitt & Form",
      copy: "Ein frischer Schnitt bringt Form, Bewegung und eine Linie, die im Alltag zu Ihnen passt.",
    },
    {
      number: "03",
      title: "Farbe & Veränderung",
      copy: "Farbideen und sichtbare Veränderungen werden persönlich besprochen und passend zum Haar geplant.",
    },
    {
      number: "04",
      title: "Kurzhaarfrisuren",
      copy: "Klare Konturen und eine Form, die den eigenen Stil präzise auf den Punkt bringt.",
    },
    {
      number: "05",
      title: "Flechtfrisuren",
      copy: "Geflochtene Looks als ausdrucksstarke Inspiration für besondere Momente.",
    },
  ],
  team: [
    {
      name: "Elena Schefer",
      role: "Glamour Cut · persönliche Ansprechpartnerin",
      bio: "Bei Glamour Cut steht der persönliche Austausch im Mittelpunkt – von der ersten Idee bis zum passenden nächsten Schritt.",
    },
  ],
  media: {
    hero: hairImage(
      "/images/hero-hair-photo.webp",
      "Haar-Inspiration",
      "Symbolbild mit langen braunen Wellen als Haar-Inspiration",
    ),
    salon: hairImage(
      "/images/salon-hair-photo.webp",
      "Schnitt & Form",
      "Symbolbild eines strukturierten Bobs als Inspiration für Schnitt und Form",
    ),
    color: hairImage(
      "/images/extensions-hair-photo.webp",
      "Farbe & Veränderung",
      "Symbolbild mit langem dunklem Haar als Inspiration für Farbe und Veränderung",
    ),
    team: hairImage(
      "/images/team-hair-photo.webp",
      "Persönliche Beratung",
      "Symbolbild mit kupferfarbenen Wellen als Haar-Inspiration",
    ),
    about: hairImage(
      "/images/about-hair-photo.webp",
      "Glamour Cut in Wilden",
      "Symbolbild mit dunklen Locken als Haar-Inspiration für Glamour Cut",
    ),
  },
  history: {
    heading: "Ihr Stil beginnt mit guter Beratung.",
    intro: "Persönlicher Austausch, neue Ideen und ein Look, der sich nach Ihnen anfühlt.",
    paragraphs: [
      "Bei Glamour Cut beginnt Veränderung mit einem persönlichen Gespräch. Wünsche, Haar und Alltag geben die Richtung vor.",
      "Öffentliche Einblicke zeigen Schnitt, Farbe, Kurzhaar- und Flechtfrisuren – als Inspiration für den eigenen Termin.",
      "Den passenden Termin stimmen Sie direkt telefonisch mit dem Salon ab.",
    ],
  },
  claims: {
    hero: "Lust auf Veränderung?",
    intro: "Ihr Look. Ihr Moment.",
    services: "Schnitt. Farbe. Neue Ideen.",
    salon: "Raum für Ihren Stil.",
    cutColor: "Schnitt, Farbe und neue Ideen.",
    booking: "Direkt zum persönlichen Termin.",
    visit: "In Wilden. Schnell gefunden.",
    faq: "Die wichtigsten Fragen vor Ihrem Termin.",
    final: "Bereit für Ihren nächsten Look?",
  },
  faq: [
    {
      question: "Wie vereinbare ich einen Termin?",
      answer: "Termine werden direkt telefonisch unter 02739 / 875447 abgestimmt. Eine bestätigte Online-Buchung ist derzeit nicht öffentlich verlinkt.",
    },
    {
      question: "Welche Bereiche zeigt Glamour Cut öffentlich?",
      answer: "Öffentliche Einblicke zeigen Beratung, Schnitt, Farbe, Kurzhaar- und Flechtfrisuren. Den konkreten Wunsch und Umfang klären Sie bitte direkt im Salon.",
    },
    {
      question: "Wo befindet sich der Salon?",
      answer: "Glamour Cut liegt Auf dem Bruch 1 in 57234 Wilnsdorf-Wilden. Die Route lässt sich über Google Maps öffnen.",
    },
    {
      question: "Wann ist Glamour Cut geöffnet?",
      answer: "Die aktuell recherchierten Zeiten stehen auf der Kontaktseite. An Feiertagen empfiehlt sich eine kurze telefonische Rückfrage.",
    },
    {
      question: "Wo finde ich aktuelle Haar-Inspirationen?",
      answer: "Das bestätigte Instagram-Profil @glamour.cut zeigt öffentliche Einblicke und aktuelle Inspirationen.",
    },
  ],
  seo: {
    baseUrl,
    pages: {
      home: {
        title: "Glamour Cut | Friseursalon in Wilnsdorf-Wilden",
        description: "Glamour Cut in Wilnsdorf-Wilden: persönliche Beratung, Schnitt, Farbe und neue Haar-Ideen. Termin direkt telefonisch anfragen.",
        canonical: `${baseUrl}/`,
      },
      team: {
        title: "Elena Schefer | Glamour Cut Wilden",
        description: "Lernen Sie Elena Schefer und die persönliche Beratung bei Glamour Cut in Wilnsdorf-Wilden kennen.",
        canonical: `${baseUrl}/team/`,
      },
      salon: {
        title: "Der Salon | Glamour Cut Wilden",
        description: "Glamour Cut in Wilden: Raum für persönliche Beratung, Schnitt, Farbe und neue Ideen.",
        canonical: `${baseUrl}/salon/`,
      },
      cutColor: {
        title: "Schnitt & Farbe | Glamour Cut Wilden",
        description: "Schnitt, Farbe, Kurzhaar- und Flecht-Inspirationen bei Glamour Cut in Wilnsdorf-Wilden.",
        canonical: `${baseUrl}/schnitt-farbe/`,
      },
      about: {
        title: "Über Glamour Cut | Friseursalon in Wilden",
        description: "Persönlicher Austausch und Haar-Inspirationen bei Glamour Cut von Elena Schefer in Wilnsdorf-Wilden.",
        canonical: `${baseUrl}/ueber-uns/`,
      },
      contact: {
        title: "Öffnungszeiten & Kontakt | Glamour Cut Wilden",
        description: "Telefon, Adresse, Öffnungszeiten und Anfahrt zu Glamour Cut, Auf dem Bruch 1 in Wilnsdorf-Wilden.",
        canonical: `${baseUrl}/oeffnungszeiten/`,
      },
      booking: {
        title: "Termin anfragen | Glamour Cut Wilden",
        description: "Termin bei Glamour Cut in Wilnsdorf-Wilden direkt telefonisch unter 02739 / 875447 anfragen.",
        canonical: `${baseUrl}/termin-buchen/`,
      },
      imprint: {
        title: "Impressum | Glamour Cut Wilden",
        description: "Anbieterangaben der Kundenvorschau von Glamour Cut in Wilnsdorf-Wilden.",
        canonical: `${baseUrl}/impressum/`,
      },
      privacy: {
        title: "Datenschutz | Glamour Cut Wilden",
        description: "Datenschutzhinweise zur Kundenvorschau von Glamour Cut in Wilnsdorf-Wilden.",
        canonical: `${baseUrl}/datenschutz/`,
      },
    },
  },
  legal: {
    imprint: {
      owner: "Elena Schefer",
      address: ["Auf dem Bruch 1", "57234 Wilnsdorf-Wilden"],
      contact: "Telefon: 02739 / 875447 · E-Mail: e.schefer33@gmail.com",
      paragraphs: [
        {
          title: "Hinweis zur Kundenvorschau",
          copy: "Die öffentlich recherchierten Kontaktangaben sind eingetragen. Rechtsform, vollständige Anbieterkennzeichnung und weitere Pflichtangaben müssen vor einem regulären Livegang durch die Betreiberin bestätigt und rechtlich geprüft werden.",
        },
        {
          title: "Externe Links",
          copy: "Diese Vorschau verlinkt das bestätigte Instagram-Profil und Google Maps. Für Inhalte externer Seiten sind deren jeweilige Anbieter verantwortlich.",
        },
        {
          title: "Bildmaterial",
          copy: "Die verwendeten Haarmotive sind generische Symbolbilder der Website-Vorlage und keine Aufnahmen des Salons, des Teams oder von Kundinnen und Kunden.",
        },
      ],
    },
    privacy: {
      responsible: "Elena Schefer",
      paragraphs: [
        {
          title: "Kundenvorschau und Hosting",
          copy: "Diese Website ist eine technische Kundenvorschau. Angaben zu Hosting, Server-Protokollen, Speicherdauer und Rechtsgrundlagen müssen vor dem regulären Livegang anhand der finalen Konfiguration rechtlich geprüft und ergänzt werden.",
        },
        {
          title: "Kontakt",
          copy: "Die Website enthält kein Kontaktformular und speichert selbst keine Terminangaben. Bei Telefon- oder E-Mail-Kontakt gelten die dort vereinbarten Kommunikationswege.",
        },
        {
          title: "Google Maps",
          copy: "Die eingebettete Karte wird erst nach einem bewussten Klick geladen. Erst dann kann eine Verbindung zu Google aufgebaut und können Daten an Google übertragen werden. Alternativ lässt sich der externe Routenlink direkt öffnen.",
        },
        {
          title: "Instagram",
          copy: "Instagram-Inhalte werden nicht eingebettet. Erst beim Öffnen des externen Links verlassen Sie diese Website; dort gelten die Datenschutzbestimmungen von Instagram.",
        },
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
