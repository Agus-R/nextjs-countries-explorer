import path from 'path'
import { UserConfig } from 'next-i18next'

const i18nextConfig: UserConfig = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  localePath: path.resolve('./public/locales'),
}

export default i18nextConfig
