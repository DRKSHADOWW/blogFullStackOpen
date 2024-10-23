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




