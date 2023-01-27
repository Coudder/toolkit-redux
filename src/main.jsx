import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import {store} from './store'
import {PokemonApp} from './PokemonApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <PokemonApp />
    </Provider>
  </React.StrictMode>,
)


/**Aqui llamamos nuestro provider de react redux ya instalado con toolki 
 * y obtenemos la store que creamos en la carpeta store.js para que pueda aplicarse 
 * a toda nuestra aplicacion de React
 
  SLICE ES UNA FUNCION QUE RECIBE UN OBJETO

*/