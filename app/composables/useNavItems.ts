import type { NavigationMenuItem } from '@nuxt/ui'

/**
 * Enlaces ancla del header/footer (portfolio de una sola página).
 * Las etiquetas se traducen con i18n; los `to` apuntan a los `id` de sección.
 */
export const useNavItems = () => {
  const { t } = useI18n()

  return computed<NavigationMenuItem[]>(() => [
    { label: t('nav.projects'), to: '#proyectos' },
    { label: t('nav.about'), to: '#sobre-mi' },
    { label: t('nav.skills'), to: '#habilidades' },
    { label: t('nav.contact'), to: '#contacto' },
  ])
}
