import { Country } from '@/types/country'

export async function getAllCountries(): Promise<Country[]> {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags,cca3',
  )

  if (!res.ok) {
    throw new Error('Error al obtener los países')
  }

  const data: Country[] = await res.json()
  return data
}

export const getCountryByCode = async (code: string): Promise<Country> => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`)
  if (!res.ok) throw new Error('Error fetching country data')
  const data = await res.json()
  return data[0]
}
