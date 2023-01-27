//todos nuestro thunks relacionadodos a pokemon peticiones http asincronas

import {pokemonApi} from "../../../api/pokemonApi";
import {setPokemons, startLoadingPokemons} from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch(startLoadingPokemons());

        //TODO: realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json();
        // console.log(data);
    //REALIZAMOS LA PETICION CON AXIOS MAS FACIL QUE CON FETCH
        //CON AXIOS
        const {data} =  await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
        //desestructuramos la resp para obtener solo la data
        //console.log(resp);

        //dispatch( setPokemons() )
        // aqui hacemos el dispatch de nuestra accion de nuestro slidePolkemon que es la sePokemons
        // y le mandamos el objet {pokemon: data.results } que son los pokemons y tmn enviamos la pagina +1
        dispatch(setPokemons({pokemons: data.results, page: page +1}))
    }
}

/**THUNK ES UNA FUNCION QUE REGRESA UNA TAREA ASINCRONA LA CUAL SE EJECUTA y CUANDO SE RESUELTA 
 * EJECUTARA LAS DIFERENTES ACCIONES DE NUESTRO SLICE
 * LOS THUNKS SOLO SE USAN PARA PETICIONES HTTP BUENO ES DONDE LOS PUEDO LLEGAR A USAR HACEN EL DISPACH
 * DE NUESTRAS ACCIONES DEL SLIDE
 
   PETICIONES HTTP CON AXIOS yarn add axios
*/