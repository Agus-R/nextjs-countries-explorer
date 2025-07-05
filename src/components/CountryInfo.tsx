import { useTranslation } from 'next-i18next'
import { Country } from '@/types/country'
import Link from 'next/link'

interface Props {
  country: Country
}

const CountryInfo = ({ country }: Props) => {
  const { t } = useTranslation('common')

  return (
    <Link href={`/country/${country.cca3}`} className="cardLink">
      <article className="card">
        <div className="infoContainer">
          <span>
            {t('country.name')}: {country.name.common}
          </span>
          <span>
            {t('country.population')}: {country.population.toLocaleString()}
          </span>
          <span>
            {t('country.region')}: {country.region}
          </span>
          <span>
            {t('country.capital')}: {country.capital?.[0] || '—'}
          </span>
        </div>
        <div className="imageContainer">
          <img src={country.flags.png} alt={country.flags.alt || country.name.common} />
        </div>
      </article>
    </Link>
  )
}

export default CountryInfo
