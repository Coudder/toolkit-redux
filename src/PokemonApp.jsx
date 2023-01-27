import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemons} from './store/slices/pokemon/thunks';

export const PokemonApp = () => {


  //llamamos el dispatg de redyx
  const dispatch =  useDispatch();
  //usamos el useSelector para obtener de nuestr pokemonslide lo que queremos
  //que en este caso es isloading los pokemons y la pagina
  const {isLoading, pokemons= [], page  } = useSelector(state => state.pokemons); //nuestro estado de pokemons


  //usamos le usseffect para usar el dispatrch de nuestros pokemons que vienen de la api que se traen
  //cin la funcion getPokemons que viene de nuestro thunks
  useEffect(() => {
    dispatch( getPokemons() );
    
    
  }, [])
  

  return (
    <>
        <h1>PokemonApp</h1>
        <hr/>
        {/* aqui mostramos truye o false dependiendo que valor tenga is loading */}
        <span>Loading: { isLoading ? 'True': 'False' } </span>
        <ul>
        {/* aqio mostramos nuestros pokemons ya con desestructuracion para obtener el nombre */}
          {
            pokemons.map( ({name}) => (
              <li key={name}> {name}  </li>
            ) )
          }

            <li>Hola</li>
        </ul>

          {/* aqui ponemos el boton disabled si isloading es true es porque est aobteniendo la info
          y en el onclick mandamos el dispartch de nuestros getPokeomons para traer los otros 10 paginacion  */}
         <button

            disabled = {isLoading}
            // onClick= { dispatch(getPokemons(page))  }
            onClick= { () => dispatch(getPokemons(page)) }
          >
            Next
         </button> 

    </>
  )
}


/**
 *  {
            pokemons.map( pokemon => (
              <li key={pokemon.name}> {pokemon.name}  </li>
            ) )
          }

  
 */