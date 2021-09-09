import React, { useState } from 'react';
import '../App.css';

const Counter = () => {

    const [counter,setCounter] = useState(0);

    const increament = () => {
        setCounter(counter+1);
    }
    return (
        <div >
            {counter}  <button onClick = {increament}>Increment</button>
        </div>
    )
}

export default Counter;