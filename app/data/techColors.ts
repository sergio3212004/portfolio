/**
 * Sistema de color del portfolio (regla 60-30-10)
 * -------------------------------------------------
 *   ~60%  neutral   → fondos, tarjetas, texto, bordes, separadores
 *   ~30%  primary   → identidad: CTAs, links, ítem activo, títulos clave
 *   ~10%  secondary + info/success → acentos, etiquetas, degradados
 *   puntual warning/error → solo cuando significan algo real
 *
 * En las etiquetas de tecnología pintamos por CATEGORÍA (no al azar): así el
 * color comunica y la sección se ve variada pero con lógica consistente.
 * Con `variant="subtle"` los tonos quedan suaves y no compiten con los CTAs.
 */

/** Nombres de color semánticos de Nuxt UI. */
export type UIColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'error'
  | 'neutral'

export type TechCategory =
  | 'lenguaje'
  | 'frontend'
  | 'backend'
  | 'database'
  | 'herramienta'

export interface Tech {
  name: string
  category: TechCategory
}

/** Color por categoría de tecnología. */
export const categoryColor: Record<TechCategory, UIColor> = {
  lenguaje: 'primary', //    Java, Python, TypeScript
  frontend: 'secondary', //  Vue, Nuxt, Tailwind
  backend: 'info', //        Spring Boot, FastAPI
  database: 'success', //    PostgreSQL, MongoDB
  herramienta: 'warning', // Git, Docker, Linux
}

/** Color para el estado de un proyecto. */
export type ProjectStatus = 'completado' | 'en-progreso' | 'prototipo'

export const statusColor: Record<ProjectStatus, UIColor> = {
  completado: 'success',
  'en-progreso': 'warning',
  prototipo: 'info',
}
