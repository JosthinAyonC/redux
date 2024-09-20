import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store'
import { decrementCounter, incrementCounter, incrementOn, restart } from './store/slices/counter'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>The count is {count}</h1>
      <div className="card ">
        <button onClick={() => dispatch(incrementCounter())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrementCounter())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementOn(5))}>
          Increment by 5
        </button>
        <button onClick={() => dispatch(restart())}>
          Restart
        </button>
      </div>
    </>
  )
}

export default App
