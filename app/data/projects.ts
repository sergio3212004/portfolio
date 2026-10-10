export interface Project {
  title: string
  /** Una línea: qué problema resuelve. */
  description: string
  /** Ruta de la captura/GIF dentro de `public/` (ej: `/projects/inventario.png`). */
  image?: string
  stack: string[]
  /** Tu rol, sobre todo si fue en equipo. */
  role?: string
  repo?: string
  demo?: string
  /** Un logro o detalle técnico concreto. */
  highlight?: string
}

/**
 * Proyectos destacados, los mejores primero.
 *
 * Ejemplo de una entrada:
 *
 * {
 *   title: 'API de gestión de inventario',
 *   description: 'Resuelve el control de stock con reportes programados.',
 *   image: '/projects/inventario.png',
 *   stack: ['Java', 'Spring Boot', 'PostgreSQL', 'Flyway'],
 *   role: 'Backend (equipo de 4)',
 *   repo: 'https://github.com/tu-usuario/inventario-api',
 *   highlight: 'Migraciones con Flyway y reportes programados.',
 * }
 */
export const projects: Project[] = []
