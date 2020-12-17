import { LOCALES } from '@/plugins/vue-i18n'

export default async function ({ isHMR, app, store, route, params, error, redirect }) {
  if (isHMR) {
    return
  }

  // Loading locale from params or retrieving the fallback one if it's not provided
  const locale = params.locale || app.i18n.fallbackLocale

  // Checking if the locale is supported. Otherwise, we'll return a not found error
  if (!LOCALES.includes(locale)) {
    return error({
      statusCode: 404,
      message: 'This page could not be found!'
    })
  }

  // Updating locale in the app state
  await store.dispatch('i18n/updateLocale', locale)

  if (locale === app.i18n.fallbackLocale && route.fullPath.indexOf(`/${app.i18n.fallbackLocale}`) === 0) {
    const path = route.fullPath

    return redirect(
      path.replace(
        new RegExp(`^/${locale}${path.indexOf(`/${locale}/`) === 0 ? '/' : ''}`),
        '/'
      )
    )
  }
}