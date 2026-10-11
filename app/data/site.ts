export interface SocialLink {
  label: string;
  to: string;
  icon: string;
}

/**
 * Datos del portfolio que NO se traducen (nombres propios, URLs, contacto).
 * El texto traducible vive en `i18n/locales/*.json`.
 */
export const site = {
  name: "Sergio Monge Muñoz",
  initials: "SM",
  email: "smonge630@gmail.com",
  location: "Trujillo, Perú",
  /** Coloca tu CV en `public/cv.pdf` */
  cvUrl: "/cv.pdf",
};

export const socials: SocialLink[] = [
  {
    label: "Gmail",
    to: `mailto:${site.email}`,
    icon: "i-simple-icons-gmail",
  },
  {
    label: "GitHub",
    to: "https://github.com/tu-usuario",
    icon: "i-simple-icons-github",
  },
  {
    label: "WhatsApp",
    to: "https://wa.me/51999999999",
    icon: "i-simple-icons-whatsapp",
  },
  {
    label: "LinkedIn",
    to: "https://www.linkedin.com/in/tu-usuario",
    icon: "i-simple-icons-linkedin",
  },
];
