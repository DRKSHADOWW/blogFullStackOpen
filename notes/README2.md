# Snippets

{
  "console.log": {
    "prefix": "clog",
    "body": [
      "console.log('$1')",
    ],
    "description": "Log output to console"
  }
}

# React

- npm create vite@latest nombre_proyecto -- --template react
    - cd  nombre_proyecto
    - npm install
    - npm run dev

# Node
npm install -g json-server
npx json-server --port 3001 --watch db.json

# Node -Axios
npm install axios // Librería para hacer llamadas request
npm install json-server --save-dev
este código se adiciona en el package.json
"scripts":{
  "server": "json-server -p3001 --watch db.json"
}
npm run server
hooks : es indispensable en la obtención de datos del servidor

filter: devuelve una nueva matriz que comprende solo los eementos de la lista para los cuales la función que se pasó com parámetro devuelve verdedero


------------------------------------PART 3 -------------------------------------------------------

## Node
npm init -y
"start": "node index.js" 

# express
npm install express
npm update // actualizar dependencias
npm install // en otra computadora, podemos instalar todas las dependencias actualizadas del proyecto definidas en package.json

request // contiene toda la información  de la  
response // se utiliza para definir como se responde

# nodemon
npm install --save-dev nodemon // dependencia de desarrollo
"dev": "nodemon index.js",

.status // establecer el estado
.end // para responder a la soclicitud sin enviar ningun dato


## Rest client plugin
Rest client

# json-parser
middleware // funciones que se pueden utilizar para manejar objetos de request y response
app.use(express.json()) // funciona para que tome los datos de JSON de una solicitud, los transforme en un objeto javascript y luego los adjunte a la propiedad body del objeto request antes de llamar al controlador de ruta.

Math.max(...notes.map(n => n.id)) //  El array se puede transformar en números individuales mediante el uso de la sintaxis de spread (tres puntos)

# morgan
npm install morgan
const morgan = require('morgan')
app.use(morgan('tiny'))

# corse
npm install cors
const cors = require('cors')
app.use(cors())

Aplicación ha sido desplegada en Render.com
npm run build - React
Cuando se despliega la aplicación, debemos crear un production build (compilación de producción) o una versión de la aplicación que esté optimizada para producción.

app.use(express.static('dist')) - Node
copiar la carpeta dist de React a Node
const baseUrl = '/api/notes' // se omite la url ya están en la misma direccion

---------------------------------- part 4 -----------------------------------------------------



## prop-types
npm install prop-types
import PropTypes from 'prop-types'

------------------------------------------- part 5 --------------------------------------------
#### Testing React


## jsdom
npm install --save-dev vitest jsdom

npm install --save-dev @testing-library/react @testing-library/jest-dom


package.json:
{
  "scripts": {
    // ...
    "test": "vitest run"
  }
  // ...
}

archivo testSetup.js en carpeta raiz:

import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

afterEach(() => {
  cleanup()
})

vite.config.js:




export default defineConfig({
  // ...
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './testSetup.js', 
  }
})

## repositorio
https://github.com/mpampols/fullstackopen.part5

# Eslint se queja de las palabras clave test y expect en las pruebas. El problema se puede resolver instalando eslint-plugin-vitest-globals

npm install --save-dev eslint-plugin-vitest-globals

# Instalemos la librería user-event
npm install --save-dev @testing-library/user-event

# pagina docs testing
testing library

# Cobertura de la pruebas
npm i -D @vitest/coverage-v8
npm test -- --coverage

# PlayWright
npm init playwright@latest

Do you want to use TypeScript or Javascript? javascript
Where to put your end-to-end test? test
Add a github Actions workflow? false
install ? true

"scripts": {
    "test": "playwright test",
    "test:report": "playwright show-report"
  },
----------------------
  $ npm test

> notes-e2e@1.0.0 test
> playwright test


Running 6 tests using 5 workers
  6 passed (3.9s)

To open last HTML report run:

  npx playwright show-report
  -----------------------------
reporte más detallado

npm run test:report
------------------------------
interfaz gráfica
npm run test -- --ui
---------------
"script":{
  "start:test": "NODE_ENV=test node index.js"
}


Puedes definir el motor de navegador a utilizar con el parámetro de línea de comando:

npm test -- --project chromium

reducir el tiempo de espera a unos pocos segundos. Según la documentación, esto se puede hacer cambiando el archivo playwright.config.js de la siguiente manera:

module.exports = defineConfig({
  timeout: 3000,
  fullyParallel: false,
  workers: 1,
  // ...
})

### Cypress

rm-rf ./node_modules

npm install cypress -D

"scripts":{
  "cypress:open": "cypress open"
  "test:e2e": "cypress run" // con este codigo se regfleja en la consola no es necesario
}

npm run cypress:open


// esto en la parte del backend
"start:test": "NODE_ENV=test node index.js"

### eslint

npm install eslint-plugin-cypress -D
"eslintConfig":{
  env:{
    "cypress/globlas": true
}
  "plugins":[
    "cypress"
  ]
}

cy.debug

### Monorepo
