import { useTranslation } from 'next-i18next'
import '@/styles/style.css'
import { useState, useEffect } from 'react'

interface SearcherProps {
  onSearch: (term: string) => void
}

const Searcher = ({ onSearch }: SearcherProps) => {
  const { t } = useTranslation('common')
  const [input, setInput] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(input.trim())
    }, 300)

    return () => clearTimeout(timeout)
  }, [input, onSearch])

  return (
    <div className="searchContainer">
      <input
        type="search"
        placeholder={t('search')}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="searchInput"
        aria-label="Buscar país"
      />
      <svg
        className="searchIcon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        width={20}
        height={20}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  )
}

export default Searcher
