'use client'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import '@/styles/style.css'

const LanguageSwitcher = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const { locale, asPath } = router

  const switchTo = locale === 'es' ? 'en' : 'es'

  const handleSwitch = () => {
    router.push(asPath, asPath, { locale: switchTo })
  }

  return (
    <div className="languageContainer">
      <button onClick={handleSwitch} className="languageSwitchBtn">
        {t('languageSwitcher')} ({switchTo.toUpperCase()})
      </button>
    </div>
  )
}

export default LanguageSwitcher
