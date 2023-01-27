
import reactLogo from './assets/react.svg'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, incrementby2, reset} from './store/slices/counter'

function App() {

  //USE SELECTOR PARA SELECCIONAR ALGO DE NUESTRA STORE
  /**DE TODO EL STATE DEL STATE TOME EL OBJETO Y DE ESE OBJETO ME INTERESA EL COUNTER O EL NOMBRE
   * QUE LE HAYAMOS PUESTO EN EL INITIAL STATE DE NUESTRO COUNTERSLIDE
   */
    const { counter } = useSelector( state => state.counter)
    
    //usamos el dispatch para poder usar la accion que queremos de nuestro slide
    const dispatch =  useDispatch()


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>  count is {counter}</h1>
      <div className="card">
        <button type='button' onClick={ ()=> dispatch(increment()) }>
          Increment
        </button>
        <button type='button' onClick={ ()=> dispatch(decrement()) }>
          Decrement
        </button>
        <button type='button' onClick={ ()=> dispatch(incrementby2(3)) }>
          Increment By 2
        </button>
        <button type='button' onClick={ ()=> dispatch(reset()) }>
          Reset
        </button>
       
      
      </div>
      
    </div>
  )
}

export default App


/** 
 *   <button onClick={ ()=> dispatch(increment()) }>
          count is {counter}
        </button>
  
    en este ejemplo usamos el dispachjt para nuestra acciond e incremen que hace que sume un numero 
    esta accion esta en nuestro SlideCounter, el cual ya esta configurado en nuestro store como:
     counter: counterSlice.reducer,
*/