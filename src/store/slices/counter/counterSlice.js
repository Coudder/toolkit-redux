import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1
    },
    decrement: (state) =>{
      state.counter -= 1
    },
    incrementby2 : ( state, { payload } ) => {  //aqui desestructuramos el action y obtenemos directamente el payload
    //incrementby2 : ( state, action ) => {
      //state.counter += action.payload //le pasamos el payload para que sume dacuerdo al numero que querramos
      

      console.log(action);
      state.counter += payload //le pasamos el payload para que sume dacuerdo al numero que querramos
    },
    reset: ( state ) => {
      state.counter = counterSlice.getInitialState().counter
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementby2, reset } = counterSlice.actions


//export const {increment } = counterSlice.actions  son nuestras acciones del slice las cuales exportamos para
//que se puedan usar en nuestro store


/**UN SLUDE ES UNA FUNCION QUE CONTIENE UN OBJETO
 * QUE CONTIENE EL NOMBRE, ESTADO INICIAL, EL REDUCER QUE ES LA ACCION QUE QUEREMOS HACER  Y AL FINAL SE EXPORTAN
 * EN EXPORT CONST {INCREMEN } = COUNTERsLICE.ACTIONS
 */