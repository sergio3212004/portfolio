export interface SocialLink {
  label: string
  to: string
  icon: string
}

/**
 * Datos del portfolio que NO se traducen (nombres propios, URLs, contacto).
 * El texto traducible vive en `i18n/locales/*.json`.
 */
export const site = {
  name: 'Tu Nombre',
  initials: 'TN',
  email: 'tucorreo@example.com',
  location: 'Lima, Perú',
  /** Coloca tu CV en `public/cv.pdf` */
  cvUrl: '/cv.pdf',
}

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    to: 'https://github.com/tu-usuario',
    icon: 'i-simple-icons-github',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/tu-usuario',
    icon: 'i-simple-icons-linkedin',
  },
]
