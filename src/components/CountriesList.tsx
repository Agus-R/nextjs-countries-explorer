import CountryInfo from './CountryInfo'
import { Country } from '@/types/country'

interface Props {
  countries: Country[]
}

const CountriesList = ({ countries }: Props) => {
  return (
    <main className="countriesList countryGrid">
      {countries.map((country) => (
        <CountryInfo key={country.name.common} country={country} />
      ))}
    </main>
  )
}

export default CountriesList
