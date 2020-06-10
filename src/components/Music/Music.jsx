import React, {useState, useEffect, useReducer,} from 'react';
import classes from './Music.module.css';


function Counter({ step }) {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === 'tick') {
      return state + step;
    } else {
      throw new Error();
    }
  }

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  return <h1>{count}</h1>;
}


const Music = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <Counter step={step} />
      <input value={step} onChange={e => setStep(Number(e.target.value))} />
    </>
  );
}

export default Music;