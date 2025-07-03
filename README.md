Para este proyecto utilice [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Primeros pasos

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Inicie dando estructura al proyecto con los componentes que pensaba utilizar (Header, CountriesList, LanguageSwitcher). Me parecio interesante para darle cierta complejidad tener en el Header el buscador y que LanguageSwitcher se encargue de modificar el idioma de forma independiente.

Con respecto a CountriesList le di una estructura para que sea un contenedor que renderiza el componente CountryInfo con los parametros que corresponden. Este componente es el disparador para generar la pagina que le corresponde a cada pais de forma dinamica (ver [code].tsx) que se ocupa de la generacion de los paths y recuperacion de la info del pais correspondiente.

Con respecto al buscador la logica la albergue en el Home, para que impacte a traves de props al propio buscador y el listado que se encontraban en componentes distintos.
