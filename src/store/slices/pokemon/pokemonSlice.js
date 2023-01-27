import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
       page: 0,
       pokemons: [],
       isLoading: false
    },
    reducers: {
       startLoadingPokemons: (state, /* action */ ) => { //accion mientras cargamos los pokemons
            state.isLoading = true;
       },
       setPokemons: (state, action) => { //accion cuando estan cargados los pokemons
        //console.log(action);
        state.isLoading = false;
        state.page = action.payload.page;
        state.pokemons = action.payload.pokemons;

       }
}
});


// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;