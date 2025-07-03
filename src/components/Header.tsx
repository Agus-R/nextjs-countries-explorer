import { useTranslation } from 'next-i18next'
import '@/styles/style.css'
import Searcher from './Searcher'

interface HeaderProps {
  onSearch: (term: string) => void
}

const Header = ({ onSearch }: HeaderProps) => {
  const { t } = useTranslation('common')

  return (
    <header className="header">
      <div className="intro">
        <h1 className="text-2xl font-bold">{t('title')}</h1>
        <p className="text-sm">{t('description')}</p>
      </div>
      <Searcher onSearch={onSearch} />
    </header>
  )
}

export default Header
