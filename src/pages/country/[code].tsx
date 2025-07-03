import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllCountries, getCountryByCode } from '@/services/countriesServices'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { Country } from '@/types/country'
import LanguageSwitcher from '@/components/LanguageSwitcher'

interface Props {
  country: Country
}

const CountryDetails = ({ country }: Props) => {
  const { t } = useTranslation('common')

  return (
    <div className="countryContainer">
      <Link href="/" className="backButton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
        {t('back')}
      </Link>

      <div className="modal-overlay">
        <div className="modal countryInfo">
          <h1 className="title">{country.name.common}</h1>
          <div className="countryDetails">
            <img src={country.flags.svg} alt={country.flags.alt || ''} width={200} />
            <ul className="itemsList">
              <li>
                <strong>{t('country.official')}:</strong> {country.name.official}
              </li>
              <li>
                <strong>{t('country.population')}:</strong> {country.population.toLocaleString()}
              </li>
              <li>
                <strong>{t('country.region')}:</strong> {country.region}
              </li>
              <li>
                <strong>{t('country.subregion')}:</strong> {country.subregion || '—'}
              </li>
              <li>
                <strong>{t('country.capital')}:</strong> {country.capital?.[0] || '—'}
              </li>
              <li>
                <strong>{t('country.code')}:</strong> {country.cca3}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <LanguageSwitcher />
    </div>
  )
}

export default CountryDetails

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const countries = await getAllCountries()

  const paths =
    locales?.flatMap((locale) =>
      countries
        .filter((c) => typeof c.cca3 === 'string' && c.cca3.length > 0)
        .map((c) => ({
          params: { code: c.cca3 },
          locale,
        })),
    ) || []

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const code = params?.code as string
  const country = await getCountryByCode(code)

  return {
    props: {
      country,
      ...(await serverSideTranslations(locale || 'es', ['common'])),
    },
  }
}
