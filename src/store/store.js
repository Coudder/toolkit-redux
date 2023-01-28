import { configureStore } from '@reduxjs/toolkit'
import {todosApi} from './apis/todosApi';
import {counterSlice} from './slices/counter'
import {pokemonSlice} from './slices/pokemon'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,



    [todosApi.reducerPath]: todosApi.reducer,  

  },
  //middleware es uyna funcion que se ejecuta antes que otra ese lo genera nuestro createapi
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
      .concat(todosApi.middleware)
});


/**AQUI CONFIGURAMOS NUESTRA STORE 
 * 
 * importamos nuestro counterSlice qye viene de nuestros slices
 * al reducer: { 
 *  nombre_identificador: nuestroslice.reducer
 * }
 */