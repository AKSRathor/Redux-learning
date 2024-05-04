import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux"
import {actions} from "./store/index"

function App() {
  const counter = useSelector((state) =>state.counter)
  const dispatch = useDispatch()
  const incrementer = ()=>{
    // dispatch({type: 'INC'})
    dispatch(actions.increment())
  }

  const decrementer = ()=>{
    // dispatch({type:'DEC'})
    dispatch(actions.decrement())
  }
  const addBy10 = ()=>{
    // dispatch({type:'addby', payload: 10})
    dispatch(actions.addBy(20))
  }
  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={incrementer}>Increment</button>
      <button onClick={decrementer}>Decrement</button>
      <button onClick={addBy10}>Add by 10</button>
    
    </div>
  );
}

export default App;
