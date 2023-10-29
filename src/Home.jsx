import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

    // const value=20;
    const dispatch = useDispatch();

    const {c} = useSelector(state => state.custom)

    const addBtn =() => {
        dispatch({
            type: "increment",
        });
    };
    const addBtn25 =() => {
        dispatch({
            type: "incrementByValue",
            payload: 25,
        });
    };
    const subBte =() => {
        dispatch({
            type: "decrement",
        });
    }


  return (
    <div>

        <h2>{c}</h2>

        <button onClick={addBtn}>Increment</button>
        <button onClick={addBtn25}>Increment By 25</button>
        <button onClick={subBte}>Decrement</button>
    </div>
  )
}

export default Home