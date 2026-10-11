export interface SocialLink {
  label: string
  to: string
  icon: string
  colorClass: string
  hoverBgClass: string
  hoverBorderClass: string
}

/**
 * Datos del portfolio que NO se traducen (nombres propios, URLs, contacto).
 * El texto traducible vive en `i18n/locales/*.json`.
 */
export const site = {
  name: 'Sergio Monge Muñoz',
  initials: 'SM',
  email: 'smonge630@gmail.com',
  location: 'Trujillo, Perú',
  /** Coloca tu CV en `public/cv.pdf` */
  cvUrl: '/cv.pdf',
}

export const socials: SocialLink[] = [
  {
    label: 'Gmail',
    to: `mailto:${site.email}`,
    icon: 'i-simple-icons-gmail',
    colorClass: 'text-[var(--ctp-latte-red)] dark:text-[var(--ctp-mocha-red)]',
    hoverBgClass: 'hover:bg-[var(--ctp-latte-red)]/10 dark:hover:bg-[var(--ctp-mocha-red)]/15',
    hoverBorderClass: 'hover:border-[var(--ctp-latte-red)]/50 dark:hover:border-[var(--ctp-mocha-red)]/60',
  },
  {
    label: 'GitHub',
    to: 'https://github.com/tu-usuario',
    icon: 'i-simple-icons-github',
    colorClass: 'text-[var(--ctp-latte-text)] dark:text-[var(--ctp-mocha-text)]',
    hoverBgClass: 'hover:bg-[var(--ctp-latte-text)]/10 dark:hover:bg-[var(--ctp-mocha-text)]/15',
    hoverBorderClass: 'hover:border-[var(--ctp-latte-text)]/50 dark:hover:border-[var(--ctp-mocha-text)]/60',
  },
  {
    label: 'WhatsApp',
    to: 'https://wa.me/51999999999',
    icon: 'i-simple-icons-whatsapp',
    colorClass: 'text-[var(--ctp-latte-green)] dark:text-[var(--ctp-mocha-green)]',
    hoverBgClass: 'hover:bg-[var(--ctp-latte-green)]/10 dark:hover:bg-[var(--ctp-mocha-green)]/15',
    hoverBorderClass: 'hover:border-[var(--ctp-latte-green)]/50 dark:hover:border-[var(--ctp-mocha-green)]/60',
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/tu-usuario',
    icon: 'i-simple-icons-linkedin',
    colorClass: 'text-[var(--ctp-latte-blue)] dark:text-[var(--ctp-mocha-blue)]',
    hoverBgClass: 'hover:bg-[var(--ctp-latte-blue)]/10 dark:hover:bg-[var(--ctp-mocha-blue)]/15',
    hoverBorderClass: 'hover:border-[var(--ctp-latte-blue)]/50 dark:hover:border-[var(--ctp-mocha-blue)]/60',
  },
]
