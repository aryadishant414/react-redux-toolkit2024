
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const[amount, setAmount] = useState(0);

  return (
    <div>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span>{count}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <br /><br />
        <input type="text" placeholder='Enter amount' onChange={(e) => setAmount(e.target.value) } />
        <button
          aria-label="increment by amount"
          onClick={() => dispatch(incrementByAmount(amount))}
        >
          Inc. By Amount
        </button>
        <br /><br />
        <button
          aria-label="Reset"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
    </div>
  )
}

export default App
