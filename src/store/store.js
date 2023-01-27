import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter'
import {pokemonSlice} from './slices/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer
  },
})


/**AQUI CONFIGURAMOS NUESTRA STORE 
 * 
 * importamos nuestro counterSlice qye viene de nuestros slices
 * al reducer: { 
 *  nombre_identificador: nuestroslice.reducer
 * }
 */