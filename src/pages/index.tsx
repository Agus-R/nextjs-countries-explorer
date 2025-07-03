import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '@/components/Header'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { GetStaticProps } from 'next'
import CountriesList from '@/components/CountriesList'
import { Country } from '@/types/country'
import { getAllCountries } from '@/services/countriesServices'
import { useState, useMemo } from 'react'

interface Props {
  countries: Country[]
}

export default function Home({ countries }: Props) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredCountries = useMemo(() => {
    if (!searchTerm) return countries
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm, countries])

  return (
    <div>
      <Header onSearch={setSearchTerm} />
      <CountriesList countries={filteredCountries} />
      <LanguageSwitcher />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const countries = await getAllCountries()

  return {
    props: {
      countries,
      ...(await serverSideTranslations(locale || 'es', ['common'])),
    },
    revalidate: 86400, // cada 24h
  }
}
